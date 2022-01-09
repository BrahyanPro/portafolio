import * as YAML from 'yaml';
import { typedBoolean } from '~/utils/misc';
import { markdownToHtml, stripHtml } from '~/utils/markdown.server';
import { downloadFile } from '~/utils/github.server';
import { cachified } from '~/utils/cache.server';
import { redisCache } from '~/utils/redis.server';

async function getSlugify() {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!_slugify) {
        const { slugifyWithCounter } = await
        import ('@sindresorhus/slugify');

        _slugify = slugifyWithCounter();
    }
    return _slugify;
}

async function getTalk(rawTalk, allTags) {
    const slugify = await getSlugify();
    const descriptionHTML = rawTalk.description ?
        await markdownToHtml(rawTalk.description) :
        '';

    return {
        title: rawTalk.title,
        tag: allTags.find((tag) => rawTalk.tags.includes(tag)),
        tags: rawTalk.tags,
        slug: slugify(rawTalk.title),
        resourceHTMLs: rawTalk.resources ?
            await Promise.all(rawTalk.resources.map((r) => markdownToHtml(r))) :
            [],
        descriptionHTML,
        description: descriptionHTML ? await stripHtml(descriptionHTML) : '',
        deliveries: rawTalk.deliveries ?
            await Promise.all(
                rawTalk.deliveries.map(async(d) => {
                    return {
                        eventHTML: d.event ? await markdownToHtml(d.event) : undefined,
                        date: d.date,
                        recording: d.recording,
                    };
                })
            ) :
            [],
    };
}

function sortByPresentationDate(a, b) {
    const mostRecentA = mostRecent(
        a.deliveries.map(({ date }) => date).filter(typedBoolean)
    );
    const mostRecentB = mostRecent(
        b.deliveries.map(({ date }) => date).filter(typedBoolean)
    );
    return moreRecent(mostRecentA, mostRecentB) ? -1 : 1;
}

function mostRecent(dates) {
    return dates.reduce((recent, compare) => {
        if (!recent) return compare;
        return moreRecent(compare, recent) ? compare : recent;
    });
}

// returns true if a is more recent than b
function moreRecent(a, b) {
    if (typeof a === 'string') a = new Date(a);
    if (typeof b === 'string') b = new Date(b);
    return a > b;
}

function getTags(talks) {
    // get most used tags
    const tagCounts = {};

    for (const talk of talks) {
        if (!talk.tags) continue;

        for (const tag of talk.tags) {
            tagCounts[tag] = tagCounts[tag] + 1;
        }
    }

    const tags = Object.entries(tagCounts)
        .filter(([_tag, counts]) => counts > 1) // only include tags assigned to >1 talks
        .sort((l, r) => r[1] - l[1]) // sort on num occurrences
        .map(([tag]) => tag); // extract tags, ditch the counts

    return tags;
}

async function getTalksAndTags({ request, forceFresh }) {
    const slugify = await getSlugify();
    slugify.reset();

    const talks = await cachified({
        cache: redisCache,
        key: 'content:data:talks.yml',
        maxAge: 1000 * 60 * 60 * 24 * 14,
        request,
        forceFresh,
        getFreshValue: async() => {
            const talksString = await downloadFile('content/data/talks.yml');
            const rawTalks = YAML.parse(talksString);
            if (!Array.isArray(rawTalks)) {
                console.error('Talks is not an array', rawTalks);
                throw new Error('Talks is not an array.');
            }

            const allTags = getTags(rawTalks);

            const allTalks = await Promise.all(
                rawTalks.map((rawTalk) => getTalk(rawTalk, allTags))
            );
            allTalks.sort(sortByPresentationDate);

            return { talks: allTalks, tags: allTags };
        },
        checkValue: (value) =>
            Boolean(value) &&
            typeof value === 'object' &&
            Array.isArray(value.talks) &&
            Array.isArray(value.tags),
    });

    return talks;
}

export { getTalksAndTags };
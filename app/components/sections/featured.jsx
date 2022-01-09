import { data } from '~/data/featured.js';
import { ProjectFeatured } from '../common/ProjectFeatured';

export default function Featured() {
  return (
    <section id="projects">
      <h2 className="numbered-heading">Algunas cosas que he construido</h2>
      <ul className="ulgrid">
        {data.map((valor, i) => {
          return (
            <ProjectFeatured
              title={valor.title}
              link={valor.link}
              description={valor.description}
              tech={valor.tech}
              cta={valor.cta}
              github={valor.github}
              demo={valor.demo}
              image={valor.image}
            />
          );
        })}
      </ul>
    </section>
    /*   <section id="projects">
      <h2 className="numbered-heading">Some Things I’ve Built</h2>

      <ul className="ulgrid">
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, tech, github, cover, cta } = frontmatter;
            const image = getImage(cover);

            return (
              <li
                className="liproject"
                key={i}
                ref={(el) => (revealProjects.current[i] = el)}
              >
                <div className="project-content">
                  <div>
                    <p className="project-overline">Featured Project</p>

                    <h3 className="project-title">
                      <a href={external}>{title}</a>
                    </h3>

                    <div
                      className="project-description"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />

                    {tech.length && (
                      <ul className="project-tech-list">
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
                      {cta && (
                        <a href={cta} aria-label="Course Link" className="cta">
                          Learn More
                        </a>
                      )}
                      {github && (
                        <a href={github} aria-label="GitHub Link">
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && !cta && (
                        <a
                          href={external}
                          aria-label="External Link"
                          className="external"
                        >
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={external ? external : github ? github : '#'}>
                    <GatsbyImage image={image} alt={title} className="img" />
                  </a>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
 */
  );
}

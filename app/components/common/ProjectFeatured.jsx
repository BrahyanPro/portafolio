import { Icon } from '~/components/icons';
export function ProjectFeatured({ data }) {
  const { title, link, description, tech, github } = data;
  console.log(title);

  return (
    <div className="project-inner">
      <header>
        <div className="project-top">
          <div className="folder">
            <Icon name="Folder" />
          </div>
          <div className="project-links">
            {github && (
              <a
                href={github}
                aria-label="GitHub Link"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="GitHub" />
              </a>
            )}
            {link && (
              <a
                href={link}
                aria-label="External Link"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="External" />
              </a>
            )}
          </div>
        </div>

        <h3 className="project-title">
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>

        <div className="project-description">{description}</div>
      </header>

      <footer>
        {tech && (
          <ul className="project-tech-list">
            {tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        )}
      </footer>
    </div>
  );
}

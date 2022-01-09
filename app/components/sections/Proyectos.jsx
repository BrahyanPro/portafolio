import { useState } from 'react';
import { Link } from 'remix';

import { data } from '~/data/featured';
import { ProjectFeatured } from '../common/ProjectFeatured';

function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="StyledProjectsSection">
      <h2>Algunos Proyectos que he construido</h2>
      <Link className="inline-link archive-link" to="/archive">
        view the archive
      </Link>

      <ul className="projects-grid">
        {
          <>
            {data &&
              data.map((dates, i) => (
                <li className="StyledProject" key={i}>
                  <ProjectFeatured data={dates} />
                </li>
              ))}
          </>
        }
      </ul>
      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button>
    </section>
  );
}

export default Projects;

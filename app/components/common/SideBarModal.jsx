/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

/* --------------------------- Image Dependencies --------------------------- */
import { Close, Github, Product } from '../icons';

/* ------------------------- SideBarModal propTypes ------------------------ */
const propTypes = {
  show: PropTypes.bool,
  closeShow: PropTypes.func,
  size: PropTypes.string,
  overlayColor: PropTypes.string,
  css: PropTypes.object,
  data: PropTypes.object,
};

/* ------------------------ SideBarModal defaultprops ----------------------- */
const defaultProps = {
  show: false,
  closeShow: () => {},
  size: 'md',
  overlayColor: 'rgba(0, 0, 0, 0.8)',
  css: {},
};

function SideBarModal({
  show,
  closeShow,
  size,
  overlayColor,
  css: styling,
  data,
}) {
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Escape') {
      closeShow();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  return (
    <>
      {show && (
        <>
          <div className="bodyA">
            <div
              className="wrapper"
              size={size}
              css={styling}
              data-testid="sidebarmodal"
            >
              <div
                className="Overlay"
                overlayColor={overlayColor}
                className="overlay"
                onClick={() => closeShow()}
              />
              <aside className="fadeInLeft">
                <div className="pos__relative">
                  <div className="d-flex justify-content-between header">
                    <button
                      onClick={() => closeShow()}
                      className="none-button"
                      type="button"
                    >
                      <Close />
                    </button>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        closeShow();
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Back To Projects.
                    </a>
                  </div>

                  <div className="main__post">
                    <h3 className="mt-4">{data.title}</h3>
                    <p className="te mb-4">{data.description}</p>
                    <img src={data.imageUrl} alt={data.title} />
                    <h4>About</h4>
                    <p>{data.about && data.about}</p>
                    <h4>Technologies</h4>
                    {data.technologies && (
                      <p className="d-flex flex-wrap">
                        {data.technologies.map((tech, index) => (
                          <span key={index} className="d-block mb-1">
                            {tech}
                          </span>
                        ))}
                      </p>
                    )}
                    <h4>
                      <Product /> Website
                    </h4>
                    <p>
                      <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.link}
                      </a>
                    </p>
                    {data.github && (
                      <>
                        <h4>
                          <Github /> Github
                        </h4>
                        <p>
                          <a
                            href={data.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {data.github}
                          </a>
                        </p>
                      </>
                    )}
                  </div>
                  <a
                    href={data.link}
                    className="open__project"
                    target="_blank"
                    id="cardHover"
                    rel="noopener noreferrer"
                  >
                    Open Project{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
                    </svg>
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </>
      )}
    </>
  );
}

SideBarModal.propTypes = propTypes;
SideBarModal.defaultProps = defaultProps;

export default SideBarModal;

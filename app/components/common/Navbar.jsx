/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
// import { useContext } from 'react';
import { Link } from 'remix';

/* -------------------------- Internal Dependencies ------------------------- */
// import AppContext from '../Utils/context';

/* ---------------------------- Image Dependency ---------------------------- */
import { IconLogo, Moon, Icon } from '../icons';

function Navbar() {
  // const { show, handleopen, setTheme, closeShow, theme } =useContext(AppContext);
  return (
    <>
      <header className="Header">
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
          <div className="contairner">
            <Link to="/">
              <a
                href="#!"
                className="navbar-brand"
                aria-label="Adenekan Wonderful Home"
                tabIndex={undefined}
              >
                <IconLogo />
              </a>
            </Link>

            <button
              className="navbar-toggler pr-0"
              type="button"
              // onClick={handleopen}
              tabIndex={undefined}
              aria-label="Open Button Toggle"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className={`collapse navbar-collapse`} id="collapsibleNavbar">
              <button
                className="d-block d-md-none close-nav"
                // onClick={handleopen}
              >
                <Icon />
              </button>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item hover__bottom d-block d-md-none">
                  <Link to="/" activeclassname="is-active">
                    <a
                      className="nav-link"
                      id="cardHover"
                      // onClick={closeShow}
                      href="#!"
                      aria-label="Go Home"
                      title="Home"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item hover__bottom">
                  <Link to="/about" activeclassname="is-active">
                    <a
                      className="nav-link"
                      id="cardHover"
                      // onClick={closeShow}
                      to="#!"
                      aria-label="Go To About Page"
                      title="About"
                    >
                      About
                    </a>
                  </Link>
                </li>
                <li className="nav-item hover__bottom">
                  <Link to="/projects" activeclassname="is-active">
                    <a
                      className="nav-link"
                      id="cardHover"
                      // onClick={closeShow}
                      href="#!"
                      aria-label="Go To Projects Page"
                      title="Projects"
                    >
                      Projects
                    </a>
                  </Link>
                </li>
                <li className="nav-item hover__bottom">
                  <Link to="/resume" activeclassname="is-active">
                    <a
                      className="nav-link"
                      id="cardHover"
                      // onClick={closeShow}
                      href="#!"
                      aria-label="Go To Resume Page"
                      title="Resume"
                    >
                      Resume
                    </a>
                  </Link>
                </li>
                <li className="nav-item hover__bottom">
                  <Link to="/contact" activeclassname="is-active">
                    <a
                      className="nav-link"
                      id="cardHover"
                      // onClick={closeShow}
                      href="#!"
                      aria-label="Go To Contacts Page"
                      title="Contact"
                    >
                      Contact
                    </a>
                  </Link>
                </li>
                <li className="nav-item pl-md-3">
                  <Link to="#0">
                    <a
                      className="nav-link nav-svg"
                      aria-label={`Turn On Mood`}
                      // onClick={setTheme}
                      href="#!"
                    >
                      <Moon />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

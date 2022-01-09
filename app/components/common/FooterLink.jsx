/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import PropTypes from 'prop-types';

/* -------------------------- Image Dependecy -------------------------- */
import {
  IconRight,
  IconTwitter,
  Facebook,
  IconLinkedin,
  IconGitHub,
  IconInstagram,
  Dribble,
} from '../icons';
import { Link } from 'remix';
/* -------------------------- FooterLink PropTypes -------------------------- */
const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  goto: PropTypes.string.isRequired,
};

/* ------------------------- FooterLink defaultProps ------------------------ */

const defaultProps = {
  children: {},
};

function FooterLink({ children, goto, ...rest }) {
  return (
    <>
      <footer className="FooterStyle">
        <Link to={`${goto}`}>
          <a aria-label={children}>
            <p {...rest}>
              {children}
              <IconRight />
            </p>
          </a>
        </Link>
      </footer>
      <div className="SocialMedia">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/code_wonders"
          aria-label="Go To Adenekan Wonderful Twitter Page"
          title="Twitter Page"
        >
          <IconTwitter />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/AdenekanWonderful"
          aria-label="Go To Adenekan Wonderful Facebook Page"
          title="Facebook Page"
        >
          <Facebook />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/codewonders"
          aria-label="Go To Adenekan Wonderful Linkedin Page"
          title="Linkedin Page"
        >
          <IconLinkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/adenekan41"
          aria-label="Go To Adenekan Wonderful Github Page"
          title="Github Page"
        >
          <IconGitHub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dribbble.com/codewonders"
          aria-label="Go To Adenekan Wonderful Dribble Page"
          title="Dribbble Page"
        >
          <Dribble />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/codewonders"
          aria-label="Go To Adenekan Wonderful Instagram Page"
          title="Instagram Page"
        >
          <IconInstagram />
        </a>
      </div>
    </>
  );
}

FooterLink.defaultProps = defaultProps;

FooterLink.propTypes = propTypes;

export default FooterLink;

/* -------------------------------------------------------------------------- */
/*                           External Dependencies                        */
/* -------------------------------------------------------------------------- */

import { Children } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'remix';
import PropTypes from 'prop-types';

/* -------------------------- ActiveLink PropTypes -------------------------- */
const propTypes = {
  router: PropTypes.any,
  children: PropTypes.any,
  activeClassName: PropTypes.string,
  href: PropTypes.any,
};

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);

  let className = child.props.className || '';

  const { to, activeClassName } = props;

  if (router.pathname === to && activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

ActiveLink.propTypes = propTypes;

export default withRouter(ActiveLink);

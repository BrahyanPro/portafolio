import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix';
import { imagesnes } from '~/images/index';
import globalStylesUrl from '~/styles/global.css';
import { Social } from './components/common/social';

export let links = () => {
  return [
    {
      rel: 'stylesheet',
      href: globalStylesUrl,
    },
  ];
};
export default function App() {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="shortcut icon"
          href="./img/favicon.ico"
          type="image/x-icon"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout />
      <div>
        <h1>There was an error</h1>
        <p>{error.message}</p>
        <hr />
        <p>
          Hey, developer, you should replace this with what you want your users
          to see.
        </p>
      </div>
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout />
      <h1>
        {caught.status}: {caught.statusText}
      </h1>
      {message}
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

function Layout() {
  return (
    <header>
      <nav>
        <div className="nav_top">
          <Link to="/SobreMi" className="navLink account">
            <img src={imagesnes.home} width="60" height="60" alt="Account" />
            <div className="navLink1">
              <p>
                <b>Brahyan Martinez</b>
              </p>
              <p>
                <small>Web Developer</small>
              </p>
            </div>
          </Link>
          <Social />
        </div>
        <div className="nav_bottom">
          <NavLink activeclassname="active" className="navLink no" to="/">
            <img
              className="icon"
              src={imagesnes.home}
              alt="Hola"
              height="16"
              width="16"
            />
            Home
          </NavLink>
          <NavLink
            activeclassname="active"
            className="navLink no"
            to="/SobreMi"
          >
            <img src={imagesnes.about} alt="" height="16" width="16" />
            Sobre Mi
          </NavLink>
          <NavLink
            activeclassname="active"
            className="navLink no"
            to="/proyectos"
          >
            <img src={imagesnes.wifi} alt="" height="16" width="16" />
            Proyectos
          </NavLink>
          <NavLink
            activeclassname="active"
            className="navLink no"
            to="/blogpost"
          >
            <img src={imagesnes.theme} alt="" height="16" width="16" />
            Blog Post
          </NavLink>
          <NavLink activeclassname="active" className="navLink no" to="/">
            <img src={imagesnes.Accounts} alt="" height="16" width="16" />
            Area Pro
          </NavLink>
          <NavLink
            activeclassname="active"
            className="navLink no"
            to="/contactame"
          >
            <img src={imagesnes.time} alt="" height="16" width="16" />
            Contactame
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

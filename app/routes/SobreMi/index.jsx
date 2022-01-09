import { Outlet } from 'remix';
import styles from '~/styles/routes/sobremi/index.css';
import AboutMe from '~/components/pages/About';
// import basestyle from '~/styles/base.css';
// import normalize from '~/styles/normalize.css';

export let links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },

    // { rel: 'stylesheet', href: basestyle },
    // { rel: 'stylesheet', href: normalize },
  ];
};

export default function SobreMi() {
  return (
    <main className="Main">
      <AboutMe />
      <Outlet />
    </main>
  );
}

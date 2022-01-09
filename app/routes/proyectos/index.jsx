import { Outlet } from 'remix';
import Proyectos from '~/components/pages/Proyectos';

import styles from '~/styles/routes/proyectos/index.css';
import basestyle from '~/styles/base.css';
import normalize from '~/styles/normalize.css';

export const meta = () => {
  return {
    title: 'Brahyan Pro | Proyectos',
    description:
      'Portafolio de Brahyan Pro, proyectos hechos recientemente por Brahyan Martinez un Programador de la Republica Dominicana',
  };
};

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'stylesheet',
      href: basestyle,
    },
    {
      rel: 'stylesheet',
      href: normalize,
    },
  ];
}

export default function IndexProyecto() {
  return (
    <>
      <Proyectos />
      <Outlet />
    </>
  );
}

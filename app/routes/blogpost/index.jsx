import { Outlet } from 'remix';
import ComingSoon from '~/components/sections/ComingSoon';
import stylecoming from '~/styles/components/sections/ComingSoon.css';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylecoming,
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Varela',
    },
  ];
}

export let meta = () => {
  return {
    title: 'Brahyan Pro | Blog',
    description:
      'Blog de Brahyan Martinez, desarrallador web full stack conocido como Brahyan Pro',
  };
};

export default function index() {
  return (
    <div>
      <ComingSoon />
      <Outlet />
    </div>
  );
}

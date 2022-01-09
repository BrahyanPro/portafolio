import Hero from '~/components/sections/Hero';
import About from '~/components/sections/About';
import Contact from '~/components/sections/Contact';
import Footer from '~/components/common/footer';

import stylehero from '~/styles/components/sections/hero.css';
import styleabout from '~/styles/components/sections/about.css';
import stylefeatured from '~/styles/components/sections/featured.css';
import stylecontact from '~/styles/components/sections/contact.css';
import Projects from '~/components/sections/Proyectos';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylehero,
    },
    {
      rel: 'stylesheet',
      href: styleabout,
    },
    {
      rel: 'stylesheet',
      href: stylefeatured,
    },
    {
      rel: 'stylesheet',
      href: stylecontact,
    },
  ];
}

export let meta = () => {
  return {
    title: 'Brahyan Pro | Inicio',
    description:
      'Portafolio de Brahyan Martinez, desarrallador web full stack conocido como Brahyan Pro',
  };
};

export default function Index() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

import Contactame from '~/components/pages/Contacts';
import stylecontact from '~/styles/routes/contactame/index.css';
import styles from '~/styles/routes/sobremi/index.css';

export let links = () => {
  return [
    {
      rel: 'stylesheet',
      href: stylecontact,
    },
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export let meta = () => {
  return {
    title: 'Brahyan Pro | Contactame',
    desc: 'Portafolio de brahyan pro, BAMM',
  };
};

export default function index() {
  return (
    <div>
      <Contactame />
    </div>
  );
}

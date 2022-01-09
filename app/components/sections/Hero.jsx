import { Link } from 'remix';

export default function Hero() {
  const one = <h1>Hola, Mi pseudonimo es</h1>;
  const two = <h2 className="big-heading">Brahyan Pro.</h2>;
  const three = <h3 className="big-heading">Construyo cosas para la web.</h3>;
  const four = (
    <>
      <p className="text">
        Soy un desarrollador web con sede en Santo Domingo, Republica
        Dominicana. Aunque tengo un título en electricidad, la codificación es
        mi pasión y mi nuevo enfoque de carrera profesional. El desarrollo de
        aplicaciones para la web se ha convertido en mi motor.
      </p>
    </>
  );
  const five = (
    <div>
      <a
        className="email-link"
        href="https://1drv.ms/b/s!Av7FLZILkzaybNCqTXnicXTXBsA"
        target="_blank"
        rel="noreferrer"
      >
        Mi Curriculum
      </a>
      <Link to="/contactame">
        <a className="email-link" target="_blank" rel="noreferrer">
          Contactame
        </a>
      </Link>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <div className="sectionhero">
      {
        <>
          {items.map((item, i) => (
            <div key={i} className="holi">
              {item}
            </div>
          ))}
        </>
      }
    </div>
  );
}

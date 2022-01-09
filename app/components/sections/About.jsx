import { Link } from 'remix';
import me from '~/images/me.jpg';

export default function About() {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Nextjs',
    'CSS3',
    'Html5',
    'SASS',
    'Git & GitHub',
    'Firebase',
    'Gatsby',
    'NPM',
    'Linux',
    'Remix',
  ];

  return (
    <section className="section" id="about">
      <h2 className="numbered-heading">Sobre Mi</h2>

      <div className="inner">
        <div className="text">
          <div>
            <p>
              Hello! Mi nombre es Brahyan y disfruto creando cosas para que
              vivan en la internet . Mi interes en web development inicio una
              noche fria en diciembre del 2017 mientras veia la pelicula{' '}
              <b>Red Social</b> que cuenta la historia de Facebook y Mark
              Zuckerberg, al principio era tipo "Wow!! quiero ser como el" pero
              luego de mi acercamiento todo se fue haciendo mas claro hasta al
              punto de que me enamore total y completamente de la web &hearts;
            </p>

            <p>
              El tiempo ha avanzado rapido hasta el dia de hoy, siempre he
              buscado oportunidades y desafíos que sean significativos para mí,
              quiero hacer del mundo un lugar mejor mediante la creación de un
              software increíble. Todavía no he descubierto cómo hacerlo
              exactamente pero me las arreglo como persona, enseñando y
              compartiendo lo que sé, y en menor escala siendo amable con los
              que me rodean, alegre y divertido{':)'}.
            </p>

            <p>
              Como desarrollador Full-Stack disfruto usar mi atención obsesiva a
              los detalles, mi amor inequívoco por hacer cosas y mi ética de
              trabajo impulsada por la misión para literalmente cambiar el
              mundo. Es por eso que estoy emocionado de tener un gran impacto en
              una empresa de alto crecimiento y objetivos.
            </p>

            <p>
              Vivo en Republica Dominicana con mi madre y mi hermano, y dedico
              mis horas a escribir software, leer mucho, escribir, dibujar y
              hacer ejercicio. Si te interesa la historia de este guapo isleño
              dominicano
              <Link to="/SobreMi">
                <a>puedes hacer click aqui.</a>
              </Link>
            </p>

            <p>
              De mí puedo decir que soy una gran persona, aspirando siempre a
              ser un gran desarrollador pero ser humano primero, Creo firmemente
              en el concepto de mentalidad de crecimiento y en que “la vida no
              se trata de encontrarte a ti mismo, sino de crearte a ti mismo”
              (George Bernard Shaw).
            </p>

            <p>Aqui hay algunas tecnologias en las que soy realmente bueno:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

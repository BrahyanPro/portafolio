import { useState } from 'react';
import AboutTile from '../AbouTile';
import skills, { more } from '~/data/skills';
import Footer from '../common/footer';
import Github from '../common/GitHub';
import { Link } from 'remix';
// import Techstack from '../common/Techstack';
// import { Complete } from '../common/Techstack';

function AboutMe() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div>
        <h1 className="titleSeparate top numbered-heading">
          Un poco sobre mi
          <span> &#x1F447;</span>
        </h1>
        <div className="text">
          <p>
            👋 Soy <b>Brahyan {'{Brahyan - Pro}'}</b>, un desarrollador web
            full-stack con afición total{' '}
            <b>por el aprendizaje de nuevas tecnologías de desarrollo</b>. Me
            gusta rascarme mi propia picazón en el sentido de resolver mis
            propios problemas. Un viejo dicho dice que, "La programación es como
            el sexo, si cometes un pequeño error, siempre estará ahí hasta que
            lo arregles". Me gusta leer y planeo escribir sobre tecnologías web,
            o sobre cosas que me hacen mejorar como desarrollador en general.
            Durante mi tiempo libre, soy un erudito autodidacta que adquiere
            conocimientos de varios recursos en línea y como buen lector al fin,
            también me encanta leer sobre ficción, romance y fantasía🤓.
          </p>
          <p>
            Soy un desarrollador Dominicano, dedicado a trabajar principalmente
            con tecnologías web, y apasionado al aprendizaje y mejora de
            habilidades en codificación. Amo ser un pro y dedico mi tiempo libre
            a despejar la mente haciendo ejercicio, viendo animes, leyendo
            ficción y fantasía; Pero mi favorita de todas es probar nuevas
            tecnologías relacionadas con la web, estos días estoy jugando con
            elixir...👨🏼‍💻.
          </p>
          <p>
            Actualmente, tengo <b>más de 4 años</b> aprendiendo y mejorando mis
            habilidades de desarrollo, tanto en el tecnicismo de la tecnología
            como en las habilidades blandas que son útiles para la convivencia
            con otras personas. Me gusta pensar que es ilimitado lo que podemos
            mejorar, por eso siempre me he acostumbrado abrir mi mente y verme a
            mi mismo desde diferente perspectiva para explotar mi enorme
            potencial al máximo, ahora con mis 18, amo la idea de demostrar mis
            habilidades en un equipo de trabajo de alguna increíble empresa del
            mundo, me emociona el hecho de formar parte del crecimiento de ese
            lugar que me dará una oportunidad...
          </p>
          <p>
            El camino para llegar hasta aquí ha sido largo, la verdad es mucho
            que decir desde el 2017 hasta aquí. Año en que me enamoré del
            desarrollo web. Lo he guardado por nostalgia (seguro mi yo futuro
            agradece). Léalo{' '}
            <Link to="/SobreMi">
              <a>aqui</a>{' '}
            </Link>{' '}
            solo si tiene 5 minutos libres para leer sobre un extraño apuesto y
            rudo isleño Dominicano xDD.
          </p>
          <p>
            ¿Terminar de escribir? Hmm... eso es complicado... déjame pensar...
            ¿Soy un desarrollador web Full-Stack? ¿Ese concepto describe y
            captura todo mi ser? ¿Soy un técnico en electricidad? ¿Amante de la
            fantasía, el anime, la ciencia ficción y la literatura histórica?
            ¿Un nerd? ¿Patrick O'Brian #1 fan? ¿Un coqueto latino encantador?
            ¿Un fanático de los Peaky Blinders? ¿Un amante fiel? ¿Un adicto a la
            lectura? Hmm… supongo que soy todos ellos y ninguno al mismo tiempo.
            Y eso es para responder una pregunta con otra pregunta. Pongamos fin
            a esta diarrea mental y finalicemos esta sección XD
          </p>
        </div>
      </div>
      <br />
      <div>
        <h3 className="titleSeparate numbered-heading">
          Habilidades & Herramientas
          <span role="img" aria-label="Bag Pack">
            🎒
          </span>
        </h3>
        <div className="habilidades">
          {skills.map((skill, i) => {
            return <AboutTile key={i} habilidades={skill} />;
          })}
        </div>
        <button className="more-button" onClick={() => setShowMore(!showMore)}>
          Mostrar {showMore ? 'menos' : 'más'}
        </button>
      </div>
      {showMore ? (
        <div>
          <h3 className="titleSeparate numbered-heading">
            Actualmente Mejorando
            <span role="img" aria-label="Bag Pack">
              🎒
            </span>
          </h3>
          <div className="habilidades">
            {more.map((skill, i) => {
              return <AboutTile key={i} habilidades={skill} />;
            })}
          </div>
        </div>
      ) : null}
      <Github />
      <footer style={{ textAlign: 'center', padding: '20px' }}>
        <Footer />
        <b>~ Brahyan Pro ~</b>
      </footer>
    </>
  );
}
export default AboutMe;

import { config } from '~/config';

export default function Contact() {
  const { email } = config;
  return (
    <section className="ContactSection" id="contact">
      <h2 className="numbered-heading overline">Te parezco Interesante?</h2>

      <h2 className="title">Entonces Contactame</h2>

      <p className="text">
        Actualmente estoy interesado en nuevas oportunidades laborales, tambien
        puedes contactarme si tienes alguna pregunta, o simplemente decirme un
        "Hola, Como estas?" mi buzon esta completamente abierto.
      </p>

      <div>
        <a
          className="email-link"
          target={'_blank'}
          href={`https://api.whatsapp.com/send/?phone=18299041170&text=Hola%20Brahyan,%20me%20interesa%20ponerme%20en%20contacto%20contigo&app_absent=0`}
        >
          WhatsApp
        </a>
        <a className="email-link" target={'_blank'} href={`mailto:${email}`}>
          Hablame al correo
        </a>

        <a
          className="email-link"
          target={'_blank'}
          href={'https://t.me/BrahyanPro'}
        >
          Telegram
        </a>
      </div>
    </section>
  );
}

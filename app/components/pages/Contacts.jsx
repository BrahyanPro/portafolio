import Icon from '../icons/icon';

const Contactame = () => {
  return (
    <>
      <div className="Main">
        <div>
          <h1>Contactame</h1>
        </div>
        <ul className="ul">
          <li>
            <a
              class="facebook a"
              href="https://web.facebook.com/brahyan.martinez.7355"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Icon name="Facebook" />
            </a>
          </li>
          <li>
            <a class="twitter a" href="https://twitter.com/brahyanpro">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Icon name="Twitter" />
            </a>
          </li>
          <li>
            <a
              class="instagram a"
              href="https://www.instagram.com/brahyanproo/"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Icon name="Instagram" />
            </a>
          </li>
          <li>
            <a class="google a" href="https://github.com/BrahyanPro">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Icon name="GitHub" />
            </a>
          </li>
          <li>
            <a class="google a" href="https://www.linkedin.com/in/brahyanpro/">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Icon name="Linkedin" />
            </a>
          </li>
          <li>
            <a class="google a" href="https://www.linkedin.com/in/brahyanpro/">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <img width={60} src={'/skills/telegram.gif'} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contactame;

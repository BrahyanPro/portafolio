import { config } from '~/config';
import { Icon } from '../icons';

export function Social() {
  let { socialMedia } = config;

  return (
    <ul className="socialul">
      {socialMedia.map(({ url, name }, i) => (
        <li key={i} className="socialli">
          <a href={url} aria-label={name} target="_blank" rel="noreferrer">
            <Icon name={name} />
          </a>
        </li>
      ))}
    </ul>
  );
}

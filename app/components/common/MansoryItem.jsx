import { useState } from 'react';
import Image from './Image';
import SideBarModal from './SideBarModal';

export function MansoryItem({ item, altura }) {
  const [show, setShow] = useState(false);
  console.log(altura);

  return (
    <>
      {/* <a
        href={item.link}
        target="_blank"
        style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}
        rel="noopener noreferrer"
        title={item.title}
        id="cardHover"
        aria-label={`${item.title} ${item.description}`}
      >
        <div
          className="MansoryItemStyle"
          {...{ item }}
          style={{
            height,
          }}
          role="gridcell"
        >
          <Image src={item.imageUrl} alt={item.imageUrl} />
          <div className="content__slate">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      </a> */}

      <>
        <div
          className="MansoryItemStyle"
          {...{ item }}
          style={{
            height: altura,
          }}
          role="gridcell"
          id="cardHover"
          aria-label={`${item.title} ${item.description}`}
          onClick={() => setShow(true)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') return setShow(true);
          }}
          tabIndex="0"
        >
          <Image src={item.imageUrl} alt={item.imageUrl} />
          <div className="content__slate">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.technologies && (
              <p className="d-flex flex-wrap">
                {item.technologies.map((tech, index) => (
                  <span key={index} className="d-block mb-1">
                    {tech}
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>

        <SideBarModal
          show={show}
          closeShow={() => setShow(false)}
          size="lg"
          data={item}
        />
      </>
    </>
  );
}

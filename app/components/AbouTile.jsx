function AboutTile({ habilidades }) {
  console.log(habilidades);
  const { img, textH4, textH3, alt, height, width } = habilidades;

  // import imagen from `../images/skills/${img}`
  return (
    <div className="aboutTile">
      <div className="aboutBlock">
        <img
          src={`/skills/${img}`}
          height={height || 64}
          width={width || 64}
          alt={alt || ''}
        />
      </div>
      <div className="textCente mrTp26PX">
        <h4>{textH4 || ''}</h4>
        <h3>{textH3 || ''}</h3>
      </div>
    </div>
  );
}

export default AboutTile;

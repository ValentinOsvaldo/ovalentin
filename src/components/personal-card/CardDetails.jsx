import image from '../../assets/osvaldo.jpg';

export const CardDetails = () => {
  return (
    <div className="personal__card">
      <header className="personal__card-img">
        <img src={image} alt="Osvaldo Valentin - Front End" />
      </header>

      <div className="personal__card-body">
        <div className="card__title">
          <h1>Osvaldo Valentin</h1>
          <h2 className='sub'>
            <small>Front End Dev</small>
          </h2>
        </div>

        <div className="card__contact">
          <div className="contact__item">
            <i className="bx bxs-envelope"></i>
            <span>ovalentindev@gmail.com</span>
          </div>
          <div className="contact__item">
            <i className="bx bxs-phone"></i>
            <span>+52 8123 2363 94</span>
          </div>
          <div className="contact__item">
            <i className="bx bxs-map"></i>
            <span>San Nicolas de los Garza, Nuevo León, México</span>
          </div>
        </div>

        <p className="details__description">
          Desarrollador front end, egresado de Conalep en la carrera de informática desde 2020.
          Con mas de 2 años con experiencia en el área de la tecnología.
        </p>
      </div>
    </div>
  );
};

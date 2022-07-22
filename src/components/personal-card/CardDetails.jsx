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
          Desarrollador <strong>Front End</strong>, actualmente me especializo en desarrollar aplicaciones usando <strong>React</strong>. Tengo mas de <strong>2 años trabajando para el sector TI</strong>.
          <br />
          También me encuentro preparandome para desarrollar aplicaciones moviles y aplicaciones Back End con NodeJs (express)
        </p>
      </div>
    </div>
  );
};

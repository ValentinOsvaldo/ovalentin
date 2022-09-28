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
          <h2 className="sub">
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
          Actualmente soy desarrollador <strong>Front End</strong> con{' '}
          <strong>ReactJs</strong> y <strong>NextJs</strong>.
          <br />
          <br />
          Me considero una persona <strong>proactiva</strong>,{' '}
          <strong>responsable</strong>, <strong>resiliente</strong> y <strong>autodidacta</strong>
          <br />
          <br />
          Tengo experiencia en la creación de aplicaciones web, en las cuales he
          puesto en practica los siguientes conceptos:
          <ul>
            <li>Conocimiento en HTML, CSS, Javascript</li>
            <li>Diseño responsivo</li>
            <li>
              Consumo de APIs en formato <strong>JSON</strong>
            </li>
            <li>
              Uso de manejadores de estado con <strong>Redux</strong>
            </li>
            <li>
              Uso de herramientas de control de versiones con{' '}
              <strong>Git</strong> y Github
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

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
        </div>

        <p className="details__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolorem
          deserunt doloremque est architecto maxime quidem earum rerum ut cum,
          eaque nesciunt harum commodi deleniti voluptatem maiores. Tempore, ex
          amet!
        </p>
      </div>
    </div>
  );
};

import logo from '../../assets/Logo.svg';

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Osvaldo Valentin - Front End Logo" />
      </div>

      <nav>
        <a href="http://https://github.com/ValentinOsvaldo" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-github'></i>
        </a>
        <a href="#" className="btn-primary">
          CV
        </a>
      </nav>
    </header>
  );
};

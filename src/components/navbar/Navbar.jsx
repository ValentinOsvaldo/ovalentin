import logo from '../../assets/Logo.svg';

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Osvaldo Valentin - Front End Logo" />
      </div>

      <nav className="nav-links">
        <a
          href="https://github.com/ValentinOsvaldo"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/valentin-osvaldo/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="#" className="btn-primary">
          Resume
        </a>
      </nav>
    </header>
  );
};

import logo from '../../assets/Logo.svg';
import pdf from '../../assets/Osvaldo_Valentin_Garcia.pdf'

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
        <a href={ pdf } className="btn-primary">
          Curriculum
        </a>
      </nav>
    </header>
  );
};

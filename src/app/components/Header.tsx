import Link from "next/link";

export default function Header() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <Link href="/" className="active">
          Home
        </Link>
      </div>
      <div className="nav-right">
        <div className="toggle-container">
          <i className="fas fa-sun"></i>
          <label className="switch">
            <input type="checkbox" id="theme-toggle" />
            <span className="slider round"></span>
          </label>
          <i className="fas fa-moon"></i>
        </div>
        <button className="hamburger" aria-label="Menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className="nav-links">
          <Link href="/about" className="about-me">
            About Me
          </Link>
          <Link href="/projects">Projects</Link>
          <a href="/files/SWE_Resume_Goshanraj_Govindaraj.pdf">Resume</a>
        </div>
      </div>
    </header>
  );
}

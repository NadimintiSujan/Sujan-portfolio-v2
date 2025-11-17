import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        SATYA SAI SUJAN <span className="last-name">Nadiminti</span>
      </h1>
      <nav className="navbar">
        <a href="#about">ABOUT</a>
        <a href="#resume">RESUME</a>
        <a href="#work">WORK</a>
      </nav>
    </header>
  );
};

export default Header;

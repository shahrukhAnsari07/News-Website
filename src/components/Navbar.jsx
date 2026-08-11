import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        <span className="logo-icon">🎮</span>
        <span>News Tech</span>
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#trending" onClick={closeMenu}>
          Trending
        </a>

        <a href="#latest" onClick={closeMenu}>
          Latest
        </a>

        <a href="#categories" onClick={closeMenu}>
          Categories
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>
      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}

export default Navbar;
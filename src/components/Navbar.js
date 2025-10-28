import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (event, sectionId) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">AGRO PET</h2>

      <div className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" onClick={() => setMenuOpen(false)}>
            Sobre
          </a>
        </li>
        <li>
          <a
            href="#contato"
            onClick={(event) => handleScrollTo(event, "contato")}
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

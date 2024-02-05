import React, { useState } from 'react';
import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';
import '../index.css';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <a href="/little-lemon-capstone/" className="logo">
        <img src={logo} alt="logo" />
      </a>

      {/*Mobile navbar */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/*navbar items*/}
      <ul className={`nav-links ${menuOpen ? 'visible' : ''}`}>
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/">About</a>
        </li>

        <li>
          <a href="/">Menu</a>
        </li>

        <li>
          <a href="/">Reservations</a>
        </li>

        <li>
          <a href="/">Order Online</a>
        </li>

        <li>
          <a href="/">Login</a>
        </li>
      </ul>

      <Link to="/booking">
        <button className="small-btn" aria-label="On Click">
          Reserve a Table
        </button>
      </Link>
    </nav>
  );
}

export default Nav;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="header-left">
        <h1>MOHAMMAD SAMEER</h1>
      </div>
      <div className="hidden-button" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`header-right ${menuOpen ? 'show-menu' : ''}`}>
        <Link to="/home" onClick={toggleMenu}><h2>Home</h2></Link>
        <Link to="/about" onClick={toggleMenu}><h2>About</h2></Link>
        <Link to="/project" onClick={toggleMenu}><h2>Projects</h2></Link>
      </div>
    </div>
  );
}

export default Header;

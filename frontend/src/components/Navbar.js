import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <a href="/" style={{ textDecoration: 'none' }}>
            <h1>Brand</h1>
          </a>
        </div>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="#home">Home69</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 
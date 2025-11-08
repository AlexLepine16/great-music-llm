import React from 'react';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <button className="logo-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Great Music LLM</button>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#musicians">Musicians</a>
        <a href="#contact">Contact us</a>
      </nav>
    </header>
  );
}

export default Header;

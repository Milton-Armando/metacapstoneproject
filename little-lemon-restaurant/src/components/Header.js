import React from 'react';
import logo from '../assets/images/logo.png';

function Header() {
  return (
    <header className="header-container">
      <div className="logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <h1 style={{ color: 'rgb(189, 189, 52)', font: '1.5em small-caps', fontWeight: 'bold' }}>LITTLE LEMON</h1>
    </header>
  );
}

export default Header;

import React from 'react';
import logo from '../../assets/RAD.png'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div className="header">
        <img src={logo} alt="test logo" height="100"/>
      <h1>Bet With Friends Header</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Header;

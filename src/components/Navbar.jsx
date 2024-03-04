import React from 'react';
import "./Navbar.css"


function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar-left">
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/acerca-de">Acerca de</a></li>
      </ul>
    </div>
    <div className="navbar-mid">
      <img src="src/images/logo.png" alt="" />  
    </div> 
    <div className="navbar-right">
      <ul>
        <li><a href="/login">Inicio Sesión</a></li>
        <li><a href="/register">Registro</a></li>
      </ul>
    </div>
  </nav>
  
  );
}

export default Navbar;

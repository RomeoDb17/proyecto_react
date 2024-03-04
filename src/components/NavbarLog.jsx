import React from 'react';
import "./Navbar.css"


function NavbarLog() {
  return (
    <nav className="navbar">
    <div className="navbar-left">
      <ul>
        <li><a href="/home-log">Inicio</a></li>
        <li><a href="/acerca-de-log">Acerca de</a></li>
      </ul>
    </div>
    <div className="navbar-mid">
      <img src="src/images/logo.png" alt="" />  
    </div> 
    <div className="navbar-right">
      <ul>
        <li><a href="/carrito">Carrito</a></li>
        <li><a href="/">Log Out</a></li>
      </ul>
    </div>
  </nav>
  
  );
}

export default NavbarLog;

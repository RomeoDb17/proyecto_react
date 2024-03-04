import React from 'react';
import NavbarLog from './NavbarLog'; // Importa tu componente NavbarLog
import "./AcercaDe.css"; // Importa los estilos CSS para este componente

function AcercaDeLog() {
  return (
    <div className="about-page"> {/* Contenedor principal con la clase CSS 'about-page' */}
      <NavbarLog /> {/* Renderiza el componente NavbarLog */}
      <br /> {/* Salto de línea */}
      <br /> {/* Salto de línea */}
      <h1>Acerca de Nosotros</h1> {/* Encabezado principal */}
      <p>Bienvenido a nuestra tienda de skins de CS:GO. <br />
        Somos un equipo apasionado de jugadores de Counter-Strike que se dedica a ofrecer una amplia variedad de skins para satisfacer las necesidades de nuestros clientes.</p> {/* Información sobre la tienda */}
      <p>Nuestra misión es proporcionar skins de alta calidad a precios asequibles, brindando una experiencia de compra segura y conveniente.</p> {/* Misión de la tienda */}
      <p>Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nuestro equipo de atención al cliente.</p> {/* Información de contacto */}
      <br /> {/* Salto de línea */}
      <br /> {/* Salto de línea */}
      <p>Email: csgoskins@gmail.com</p> {/* Email de contacto */}
      <p>Telefono: 000 00 00 00</p> {/* Teléfono de contacto */}
    </div>
  );
}

export default AcercaDeLog; // Exporta el componente AcercaDeLog

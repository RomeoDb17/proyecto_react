import React from "react";
import "./Footer.css"; // Importa los estilos CSS para este componente

function Footer() {
  return (
    <footer> {/* Elemento de pie de página */}
      <div className="footer-content"> {/* Contenido del pie de página */}
        <div className="logo">
          <img src="src\images\logo.png" alt="Logo" /> {/* Imagen del logo */}
        </div>
        <div className="links">
          <a href="">Contacto</a> {/* Enlace de contacto */}
        </div>
        <a>&copy; 2024 CSGO Skins. Todos los derechos reservados.</a> {/* Texto de derechos de autor */}
      </div>
    </footer>
  );
}

export default Footer; // Exporta el componente Footer

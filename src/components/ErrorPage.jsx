import React from 'react';
import "./ErrorPage.css" // Importa los estilos CSS para este componente

const ErrorPage = ({ errorCode }) => { // Componente funcional ErrorPage que recibe el código de error como prop
  return (
    <div>
      <h1>Error {errorCode}</h1> {/* Título que muestra el código de error */}
      <p>Lo siento, ha ocurrido un error.</p> {/* Mensaje de error genérico */}
      <p>Pagina no encontrada</p> {/* Mensaje indicando que la página no se encontró */}
      <p>Vuelve a intentarlo más tarde.</p> {/* Sugerencia para intentarlo nuevamente más tarde */}
    </div>
  );
};

export default ErrorPage; // Exporta el componente ErrorPage

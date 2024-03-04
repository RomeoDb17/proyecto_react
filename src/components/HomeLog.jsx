import React from 'react';
import ImageCarousel from './ImageCarousel'; // Importa el componente ImageCarousel
import ProductosLog from './ProductosLog'; // Importa el componente ProductosLog
import "./index.css"; // Importa los estilos CSS globales
import NavbarLog from './NavbarLog'; // Importa el componente NavbarLog

function HomeLog({ agregarAlCarrito }) { // Define el componente HomeLog que recibe la función agregarAlCarrito como prop
  return (
    <> {/* Fragmento React para agrupar múltiples elementos hijos */}
      <NavbarLog /> {/* Renderiza el componente NavbarLog */}
      <ImageCarousel /> {/* Renderiza el componente ImageCarousel */}
      <ProductosLog agregarAlCarrito={agregarAlCarrito} /> {/* Renderiza el componente ProductosLog y pasa la función agregarAlCarrito como prop */}
    </>
  );
}

export default HomeLog; // Exporta el componente HomeLog

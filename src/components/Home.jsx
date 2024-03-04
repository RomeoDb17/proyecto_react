import React from 'react';
import Navbar from './Navbar'; // Importa el componente Navbar
import ImageCarousel from './ImageCarousel'; // Importa el componente ImageCarousel
import Productos from './Pruductos'; // Importa el componente Productos
import "./index.css"; // Importa los estilos CSS globales
import Footer from './Footer'; // Importa el componente Footer

function Home() {
  return (
    <> {/* Fragmento React para agrupar múltiples elementos hijos */}
      <Navbar /> {/* Renderiza el componente Navbar */}
      <ImageCarousel /> {/* Renderiza el componente ImageCarousel */}
      <Productos/> {/* Renderiza el componente Productos */}
      <Footer /> {/* Renderiza el componente Footer */}
    </>
  );
}

export default Home; // Exporta el componente Home

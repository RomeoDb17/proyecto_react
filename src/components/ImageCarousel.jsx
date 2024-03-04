import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'; // Importa los estilos CSS para este componente

function ImageCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0); // Estado para mantener el índice del slide actual

    useEffect(() => {
      // Efecto de useEffect para cambiar el slide cada 10 segundos
      const interval = setInterval(() => {
        setCurrentSlide(current => (current + 1) % 5); // Cambia al siguiente slide, reinicia al primer slide si llega al último
      }, 10000); // Cambia cada 10 segundos
  
      return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta o actualiza
    }, []); // Se ejecuta solo una vez al montar el componente
  
    return (
      <div className="carousel-container"> {/* Contenedor principal del carrusel */}
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 1s ease-in-out' }}>
          {/* Div que contiene los slides y se desplaza horizontalmente */}
          <div className="slide">
            <img src="src/images/lotus.png" alt="Slide 1" /> {/* Slide 1 */}
          </div>
          <div className="slide">
            <img src="src/images/gungnir.png" alt="Slide 2" /> {/* Slide 2 */}
          </div>
          <div className="slide">
            <img src="src/images/howl.png" alt="Slide 3" /> {/* Slide 3 */}
          </div>
          <div className="slide">
            <img src="src/images/knight.png" alt="Slide 4" /> {/* Slide 4 */}
          </div>
          <div className="slide">
            <img src="src/images/lore.png" alt="Slide 5" /> {/* Slide 5 */}
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
}

export default ImageCarousel; // Exporta el componente ImageCarousel

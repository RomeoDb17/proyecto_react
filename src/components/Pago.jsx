import React, { useState, useEffect } from 'react';
import { getCarritoFromLocalStorage, saveCarritoToLocalStorage } from './localStorage'; // Importa funciones para leer y escribir en localStorage
import Carrito from './Carrito'; // Importa el componente Carrito
import NavbarLog from './NavbarLog'; // Importa el componente NavbarLog
import ProductosLog from './ProductosLog'; // Importa el componente ProductosLog

function Pago() {
  // Estado para mantener el carrito de compras y el precio total
  const [carrito, setCarrito] = useState(getCarritoFromLocalStorage()); // Obtiene el carrito de localStorage al inicio
  const [precioTotal, setPrecioTotal] = useState(0);

  // Efecto de useEffect para actualizar localStorage y calcular el precio total cada vez que cambie el carrito
  useEffect(() => {
    saveCarritoToLocalStorage(carrito); // Guarda el carrito en localStorage cada vez que cambie
    const total = carrito.reduce((acc, producto) => acc + parseFloat(producto.price), 0); // Calcula el precio total sumando los precios de todos los productos en el carrito
    setPrecioTotal(total); // Actualiza el precio total
  }, [carrito]); // Se ejecuta cada vez que cambie el carrito

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito, producto]; // Crea un nuevo carrito agregando el producto
    setCarrito(nuevoCarrito); // Actualiza el carrito
  };

  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id); // Crea un nuevo carrito excluyendo el producto con el id proporcionado
    setCarrito(nuevoCarrito); // Actualiza el carrito
  };

  // Renderizado del componente
  return (
    <div className="app">
      <NavbarLog /> {/* Renderiza el componente NavbarLog */}
      <Carrito carrito={carrito} precioTotal={precioTotal} eliminarDelCarrito={eliminarDelCarrito} /> {/* Renderiza el componente Carrito y pasa el carrito, el precio total y la función para eliminar del carrito como props */}
      <ProductosLog agregarAlCarrito={agregarAlCarrito} /> {/* Renderiza el componente ProductosLog y pasa la función para agregar al carrito como prop */}
    </div>
  );
}

export default Pago; // Exporta el componente Pago

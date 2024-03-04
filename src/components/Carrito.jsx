import React from 'react';
import './Carrito.css'; // Importa los estilos CSS para este componente

function Carrito({ carrito, precioTotal, eliminarDelCarrito }) { // Definición del componente Carrito que recibe props
  return (
    <div className="carrito-container"> {/* Contenedor principal con la clase CSS 'carrito-container' */}
      <h2 className="carrito-title">Carrito de Compras</h2> {/* Título del carrito */}
      <table className="carrito-table"> {/* Tabla que mostrará los productos del carrito */}
        <thead>
          <tr>
            <th>Producto</th> {/* Encabezado de la columna de productos */}
            <th>Precio</th> {/* Encabezado de la columna de precios */}
            <th></th> {/* Encabezado de la columna vacía para el botón de eliminar */}
          </tr>
        </thead>
        <tbody>
          {carrito.map((producto) => ( 
            <tr key={producto.id}> {/* Cada producto tiene una fila en la tabla, la clave es el ID del producto */}
              <td>{producto.name}</td> {/* Nombre del producto */}
              <td>${producto.price}</td> {/* Precio del producto */}
              <td><button className="carrito-btn" onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button></td> {/* Botón para eliminar el producto del carrito */}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="carrito-total">Precio Total: ${precioTotal}</p> {/* Precio total del carrito */}
    </div>
  );
}

export default Carrito; // Exporta el componente Carrito

// Función para obtener el carrito desde localStorage
const getCarritoFromLocalStorage = () => {
    const carrito = localStorage.getItem('carrito');
    return carrito ? JSON.parse(carrito) : [];
  };
  
  // Función para guardar el carrito en localStorage
  const saveCarritoToLocalStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  };
  
  export { getCarritoFromLocalStorage, saveCarritoToLocalStorage };
  
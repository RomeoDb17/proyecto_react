import React from 'react'
import ImageCarousel from './ImageCarousel'
import ProductosLog from './ProductosLog'
import "./index.css"
import NavbarLog from './NavbarLog'

function UserLog({ agregarAlCarrito }) {
  return (
    <>
      <NavbarLog />
      <ImageCarousel />
      <ProductosLog agregarAlCarrito={agregarAlCarrito} />
    </>
  );
}

export default UserLog;
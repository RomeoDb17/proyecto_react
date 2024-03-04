import React from 'react';
import "./Productos.css"

function Productos() {

  const products = [
    { id: 1, name: '★ Karambit | Lore', price: "1950", image: 'src/images/karambitlore.webp' },
    { id: 2, name: '★ Butterfly Knife | Doppler', price: "1750", image: 'src/images/doppler.webp' },
    { id: 3, name: '★ M9 Bayonet | Fade', price: "1800", image: 'src/images/fade.webp' },
    { id: 4, name: '★ Sport Gloves | Vice', price: "42500", image: 'src/images/vice.webp' },
    { id: 5, name: '★ Sport Gloves | Pandora Box', price: "16000", image: 'src/images/pandora.webp' },
    { id: 6, name: '★ Skeleton Knife | Slaughter', price: "800", image: 'src/images/skeleton.webp' },
    { id: 7, name: 'AK-47 | Fire Serpent', price: "2049", image: 'src/images/fire.webp' },
    { id: 8, name: 'AWP | Desert Hydra', price: "2300", image: 'src/images/hydra.webp' },
  ];

  return (
    <div className="product-page">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
export default Productos;

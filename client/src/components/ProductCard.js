import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={`/images/${product.image}`} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <button>Añadir al carrito</button>
  </div>
);

export default ProductCard;

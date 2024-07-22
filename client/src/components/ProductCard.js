import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Producto añadido al carrito');
  };

  return (
    <div className="product-card">
      <img src={`/images/${product.image}`} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;

import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const handleRemove = (id) => {
    const updatedItems = cartItems.filter(item => item._id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        cartItems.map(item => (
          <div key={item._id} className="cart-item">
            <img src={`/images/${item.image}`} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => handleRemove(item._id)}>Eliminar</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

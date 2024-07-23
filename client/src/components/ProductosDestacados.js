import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductosDestacados.css';

const ProductosDestacados = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await axios.get('/api/products');
      setProductos(response.data);
    };
    fetchProductos();
  }, []);

  return (
    <div className="productos-destacados">
      {productos.map(producto => (
        <div key={producto._id} className="producto">
          <img src={producto.image} alt={producto.name} />
          <h3>{producto.name}</h3>
          <p>{producto.description}</p>
          <p>${producto.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductosDestacados;

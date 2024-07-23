import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';
import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="homepage">
      <Banner />
      <h2 className="productos-destacados-title">Productos Destacados</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import './ProductPage.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredProducts = products.filter(product => {
    return (
      (!filters.category || product.category === filters.category) &&
      (!filters.minPrice || product.price >= filters.minPrice) &&
      (!filters.maxPrice || product.price <= filters.maxPrice)
    );
  });

  return (
    <div className="product-page">
      <Filters onFilterChange={handleFilterChange} />
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

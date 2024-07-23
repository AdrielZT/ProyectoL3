import React, { useState, useEffect } from 'react';
import ElectronicsFilter from '../components/filters/ElectronicsFilter';
import HomeFilter from '../components/filters/HomeFilter';
import AccessoriesFilter from '../components/filters/AccessoriesFilter';
import ProductCard from '../components/ProductCard';
import './ProductPage.css';

const ProductPage = ({ category }) => {
  const [filters, setFilters] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => {
        let filteredProducts = data.filter(product => product.category === category);
        if (filters.color) {
          filteredProducts = filteredProducts.filter(product => product.color === filters.color);
        }
        // Aplica otros filtros de la misma manera
        setProducts(filteredProducts);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [filters, category]);

  const renderFilterComponent = () => {
    switch (category) {
      case 'electronica':
        return <ElectronicsFilter filters={filters} setFilters={setFilters} />;
      case 'hogar':
        return <HomeFilter filters={filters} setFilters={setFilters} />;
      case 'accesorios':
        return <AccessoriesFilter filters={filters} setFilters={setFilters} />;
      default:
        return null;
    }
  };

  return (
    <div className="product-page">
      <div className="filter-section">
        {renderFilterComponent()}
      </div>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

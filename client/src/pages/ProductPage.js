import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './ProductPage.css';

const ProductPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ color: '', subcategory: '' });

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/category/${category}`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, [category]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProducts = products.filter(product => {
    return (
      (filters.color ? product.color === filters.color : true) &&
      (filters.subcategory ? product.subcategory === filters.subcategory : true)
    );
  });

  return (
    <div className="product-page">
      <div className="filters">
        <h3>Filtrar</h3>
        {category === 'electronica' && (
          <>
            <label>
              Color:
              <select name="color" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value="negro">Negro</option>
                <option value="blanco">Blanco</option>
                <option value="gris">Gris</option>
                <option value="crema">Crema</option>
              </select>
            </label>
            <label>
              RAM:
              <select name="ram" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value="4gb">4GB</option>
                <option value="6gb">6GB</option>
              </select>
            </label>
            <label>
              Almacenamiento:
              <select name="storage" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value="64gb">64GB</option>
                <option value="128gb">128GB</option>
                <option value="256gb">256GB</option>
              </select>
            </label>
            <label>
              Cámara Frontal:
              <select name="frontCamera" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value="10MP">10MP</option>
                <option value="15MP">15MP</option>
                <option value="20MP">20MP</option>
              </select>
            </label>
            <label>
              Cámara Trasera:
              <select name="rearCamera" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value="50MP">50MP</option>
                <option value="75MP">75MP</option>
                <option value="100MP">100MP</option>
              </select>
            </label>
            <label>
              Tamaño de Pantalla:
              <select name="screenSize" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value='9"'>9"</option>
                <option value='10"'>10"</option>
                <option value='11"'>11"</option>
              </select>
            </label>
          </>
        )}
        {category === 'hogar' && (
          <>
            <label>
              Subcategoría:
              <select name="subcategory" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value="heladera">Heladera</option>
                <option value="lavarropa">Lavarropa</option>
                <option value="cocina">Cocina</option>
              </select>
            </label>
            <label>
              Color:
              <select name="color" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value="blanco">Blanco</option>
                <option value="gris">Gris</option>
                <option value="gris oscuro">Gris Oscuro</option>
              </select>
            </label>
          </>
        )}
        {category === 'accesorios' && (
          <>
            <label>
              Subcategoría:
              <select name="subcategory" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value="cargador">Cargador</option>
                <option value="auriculares">Auriculares</option>
                <option value="fundas">Fundas</option>
              </select>
            </label>
            <label>
              Color:
              <select name="color" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value="blanco">Blanco</option>
                <option value="negro">Negro</option>
                <option value="gris">Gris</option>
              </select>
            </label>
          </>
        )}
      </div>
      <div className="products">
        {filteredProducts.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

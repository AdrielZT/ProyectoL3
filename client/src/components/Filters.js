import React from 'react';
import './Filters.css';

const Filters = ({ onFilterChange }) => (
  <div className="filters">
    <label>
      Categoría:
      <select onChange={e => onFilterChange('category', e.target.value)}>
        <option value="">Todas</option>
        <option value="electronics">Electrónica</option>
        <option value="home">Hogar</option>
        <option value="accessories">Accesorios</option>
      </select>
    </label>
    <label>
      Precio:
      <input type="number" placeholder="Mín" onChange={e => onFilterChange('minPrice', e.target.value)} />
      <input type="number" placeholder="Máx" onChange={e => onFilterChange('maxPrice', e.target.value)} />
    </label>
  </div>
);

export default Filters;

import React from 'react';

const AccessoriesFilter = ({ filters, setFilters }) => {
  return (
    <div>
      <h3>Filtros para Accesorios</h3>
      <label>
        Subcategoría:
        <select onChange={(e) => setFilters({ ...filters, subcategory: e.target.value })}>
          <option value="">Todos</option>
          <option value="cargador">Cargador</option>
          <option value="auriculares">Auriculares</option>
          <option value="fundas">Fundas</option>
        </select>
      </label>
      <label>
        Color:
        <select onChange={(e) => setFilters({ ...filters, color: e.target.value })}>
          <option value="">Todos</option>
          <option value="blanco">Blanco</option>
          <option value="negro">Negro</option>
          <option value="gris">Gris</option>
        </select>
      </label>
    </div>
  );
};

export default AccessoriesFilter;

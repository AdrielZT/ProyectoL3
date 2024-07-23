import React from 'react';

const HomeFilter = ({ filters, setFilters }) => {
  return (
    <div>
      <h3>Filtros para Hogar</h3>
      <label>
        Subcategoría:
        <select onChange={(e) => setFilters({ ...filters, subcategory: e.target.value })}>
          <option value="">Todos</option>
          <option value="heladera">Heladera</option>
          <option value="lavarropa">Lavarropa</option>
          <option value="cocina">Cocina</option>
        </select>
      </label>
      <label>
        Color:
        <select onChange={(e) => setFilters({ ...filters, color: e.target.value })}>
          <option value="">Todos</option>
          <option value="blanco">Blanco</option>
          <option value="gris">Gris</option>
          <option value="gris oscuro">Gris Oscuro</option>
        </select>
      </label>
    </div>
  );
};

export default HomeFilter;

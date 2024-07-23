import React from 'react';

const ElectronicsFilter = ({ filters, setFilters }) => {
  return (
    <div>
      <h3>Filtros para Electrónica</h3>
      <label>
        Color:
        <select onChange={(e) => setFilters({ ...filters, color: e.target.value })}>
          <option value="">Todos</option>
          <option value="negro">Negro</option>
          <option value="blanco">Blanco</option>
          <option value="gris">Gris</option>
          <option value="crema">Crema</option>
        </select>
      </label>
      <label>
        RAM:
        <select onChange={(e) => setFilters({ ...filters, ram: e.target.value })}>
          <option value="">Todos</option>
          <option value="4gb">4GB</option>
          <option value="6gb">6GB</option>
        </select>
      </label>
      <label>
        Almacenamiento:
        <select onChange={(e) => setFilters({ ...filters, storage: e.target.value })}>
          <option value="">Todos</option>
          <option value="64gb">64GB</option>
          <option value="128gb">128GB</option>
          <option value="256gb">256GB</option>
        </select>
      </label>
      <label>
        Cámara Frontal:
        <select onChange={(e) => setFilters({ ...filters, frontCamera: e.target.value })}>
          <option value="">Todos</option>
          <option value="10MP">10MP</option>
          <option value="15MP">15MP</option>
          <option value="20MP">20MP</option>
        </select>
      </label>
      <label>
        Cámara Trasera:
        <select onChange={(e) => setFilters({ ...filters, backCamera: e.target.value })}>
          <option value="">Todos</option>
          <option value="50MP">50MP</option>
          <option value="75MP">75MP</option>
          <option value="100MP">100MP</option>
        </select>
      </label>
      <label>
        Pantalla:
        <select onChange={(e) => setFilters({ ...filters, screenSize: e.target.value })}>
          <option value="">Todos</option>
          <option value="9">9"</option>
          <option value="10">10"</option>
          <option value="11">11"</option>
        </select>
      </label>
    </div>
  );
};

export default ElectronicsFilter;

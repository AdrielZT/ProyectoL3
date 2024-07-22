import React from 'react';
import './Categories.css';

const Categories = () => (
  <div className="categories">
    <div className="category">
      <img src="/images/category1.jpg" alt="Electrónica" />
      <h3>Electrónica</h3>
    </div>
    <div className="category">
      <img src="/images/category2.jpg" alt="Hogar" />
      <h3>Hogar</h3>
    </div>
    <div className="category">
      <img src="/images/category3.jpg" alt="Accesorios" />
      <h3>Accesorios</h3>
    </div>
  </div>
);

export default Categories;

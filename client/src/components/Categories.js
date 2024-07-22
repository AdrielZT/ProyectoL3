import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => (
  <nav className="categories">
    <ul>
      <li>
        <Link to="/categoria/electronica">Electrónica</Link>
        <img src="/images/electronica.jpg" alt="Electrónica" />
      </li>
      <li>
        <Link to="/categoria/hogar">Hogar</Link>
        <img src="/images/hogar.jpg" alt="Hogar" />
      </li>
      <li>
        <Link to="/categoria/accesorios">Accesorios</Link>
        <img src="/images/accesorios.jpg" alt="Accesorios" />
      </li>
      <li>
        <Link to="/contacto">Contáctanos</Link>
      </li>
    </ul>
  </nav>
);

export default Categories;

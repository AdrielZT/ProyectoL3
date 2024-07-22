import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <h1>Mi Tienda</h1>
    <nav>
      <a href="/">Inicio</a>
      <a href="/productos">Productos</a>
      <a href="/contacto">Contacto</a>
    </nav>
  </header>
);

export default Header;

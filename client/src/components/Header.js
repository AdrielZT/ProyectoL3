import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <div className="top-bar">
      <div className="logo">
        <Link to="/">Samsung</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Buscar productos..." />
        <button type="submit">x</button>
      </div>
      <div className="user-options">
        <Link to="/carrito">Carrito</Link>
        <Link to="/perfil">Perfil</Link>
      </div>
    </div>
    <nav className="categories">
      <ul>
        <li><Link to="/categoria/accesorios">Accesorios</Link></li>
        <li><Link to="/categoria/electronica">Electrónica</Link></li>
        <li><Link to="/categoria/hogar">Hogar</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

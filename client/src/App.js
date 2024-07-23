import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage'; // Nueva importación
import Cart from './pages/Cart';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productos" element={<ProductPage />} />
      <Route path="/producto/:id" element={<ProductDetailPage />} /> {/* Nueva ruta */}
      <Route path="/carrito" element={<Cart />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/categoria/electronica" element={<ProductPage category="electronica" />} />
      <Route path="/categoria/hogar" element={<ProductPage category="hogar" />} />
      <Route path="/categoria/accesorios" element={<ProductPage category="accesorios" />} />
    </Routes>
  </Router>
);

export default App;

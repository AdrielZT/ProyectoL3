import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productos" element={<ProductPage />} />
      <Route path="/productos/:id" element={<ProductDetail />} />
      <Route path="/contacto" element={<ContactPage />} />
    </Routes>
  </Router>
);

export default App;

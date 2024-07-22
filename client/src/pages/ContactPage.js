import React from 'react';
import './ContactPage.css';

const ContactPage = () => (
  <div className="contact-page">
    <h1>Contacto</h1>
    <form>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" required />
      
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Mensaje:</label>
      <textarea id="message" name="message" required></textarea>
      
      <button type="submit">Enviar</button>
    </form>
  </div>
);

export default ContactPage;

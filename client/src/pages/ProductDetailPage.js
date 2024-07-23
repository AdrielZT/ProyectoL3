import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleOptionChange = (e) => {
    setSelectedOptions({ ...selectedOptions, [e.target.name]: e.target.value });
  };

  const handleAddToCart = () => {
    // Lógica para añadir el producto al carrito
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {product.category === 'electronica' && (
        <>
          <label>
            Color:
            <select name="color" onChange={handleOptionChange}>
              <option value="">Seleccione</option>
              <option value="negro">Negro</option>
              <option value="blanco">Blanco</option>
              <option value="gris">Gris</option>
              <option value="crema">Crema</option>
            </select>
          </label>
          <label>
            Memoria RAM:
            <select name="ram" onChange={handleOptionChange}>
              <option value="">Seleccione</option>
              <option value="4gb">4GB</option>
              <option value="6gb">6GB</option>
            </select>
          </label>
          <label>
            Memoria de Almacenamiento:
            <select name="storage" onChange={handleOptionChange}>
              <option value="">Seleccione</option>
              <option value="64gb">64GB</option>
              <option value="128gb">128GB</option>
              <option value="256gb">256GB</option>
            </select>
          </label>
          <label>
            Cámara Frontal:
            <select name="frontCamera" onChange={handleOptionChange}>
              <option value="">Seleccione</option>
              <option value="10MP">10MP</option>
              <option value="15MP">15MP</option>
              <option value="20MP">20MP</option>
            </select>
          </label>
          <label>
            Cámara Trasera:
            <select name="rearCamera" onChange={handleOptionChange}>
              <option value="">Seleccione</option>
              <option value="50MP">50MP</option>
              <option value="75MP">75MP</option>
              <option value="100MP">100MP</option>
            </select>
          </label>
          <label>
            Tamaño de Pantalla:
            <select name="screenSize" onChange={handleOptionChange}>
              <option value="">Seleccione</option>
              <option value='9"'>9"</option>
              <option value='10"'>10"</option>
              <option value='11"'>11"</option>
            </select>
          </label>
        </>
      )}
      {product.category === 'hogar' && (
        <>
          <label>
            Subcategoría:
            <select name="subcategory" onChange={handleOptionChange}>
              <option value="">Seleccione</option>
              <option value="heladera">Heladera</option>
              <option value="lavarropa">Lavarropa</option>
              <option value="cocina">Cocina</option>
            </select>
          </label>
          <label>
            Color:
            <select name="color" onChange={handleOptionChange}>
              <option value="">Seleccione</option>
              <option value="blanco">Blanco</option>
              <option value="gris">Gris</option>
              <option value="gris oscuro">Gris Oscuro</option>
            </select>
          </label>
        </>
      )}
      {product.category === 'accesorios' && (
        <>
          <label>
            Subcategoría:
            <select name="subcategory" onChange={handleOptionChange}>
              <option value="">Seleccione</option>
              <option value="cargador">Cargador</option>
              <option value="auriculares">Auriculares</option>
              <option value="fundas">Fundas</option>
            </select>
          </label>
          <label>
            Color:
            <select name="color" onChange={handleOptionChange}>
              <option value="">Seleccione</option>
              <option value="blanco">Blanco</option>
              <option value="negro">Negro</option>
              <option value="gris">Gris</option>
            </select>
          </label>
        </>
      )}
      <label>
        Cantidad:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />
      </label>
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
};

export default ProductDetailPage;

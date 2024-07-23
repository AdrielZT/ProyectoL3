const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Obtener todos los productos
router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Obtener productos por categoría
router.get('/products/category/:category', async (req, res) => {
  const { category } = req.params;
  const products = await Product.find({ category });
  res.json(products);
});

// Crear un nuevo producto
router.post('/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

module.exports = router;

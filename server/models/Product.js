const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  ram: {
    type: String
  },
  storage: {
    type: String
  },
  frontCamera: {
    type: String
  },
  rearCamera: {
    type: String
  },
  screenSize: {
    type: String
  },
  subcategory: {
    type: String
  },
  stock: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

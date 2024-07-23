const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  // Características específicas según la categoría
  color: { type: String, enum: ['negro', 'blanco', 'gris', 'crema'], default: null },
  ram: { type: String, enum: ['4gb', '6gb'], default: null },
  storage: { type: String, enum: ['64gb', '128gb', '256gb'], default: null },
  frontCamera: { type: String, enum: ['10MP', '15MP', '20MP'], default: null },
  rearCamera: { type: String, enum: ['50MP', '75MP', '100MP'], default: null },
  screenSize: { type: String, enum: ['9"', '10"', '11"'], default: null },
  subcategory: { type: String, default: null }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


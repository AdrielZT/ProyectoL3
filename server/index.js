const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Importar rutas
const productRoutes = require('./routes/productRoutes');

// Usar rutas
app.use('/api', productRoutes);

// Conexión a la base de datos
mongoose.connect('mongodb+srv://adrieltejerina15:42813089@cluster0.onjmz9r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

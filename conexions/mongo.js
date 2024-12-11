const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,  // Tiempo de espera para intentar la conexión
  socketTimeoutMS: 45000,          // Tiempo de espera para inactividad
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
  console.log('¡Conexión a la base de datos establecida correctamente!');
});

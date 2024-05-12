const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config(); 

const mongoose = require('mongoose');

const usuario = require('./src/routes/usuarios.js');
const cliente = require('./src/routes/clientes.js');
const producto = require('./src/routes/productos.js')
const carrito = require('./src/routes/carrito.js')
const detalle = require('./src/routes/detalle_ventas.js') 
const ventas = require('./src/routes/ventas.js') 

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/producto', producto);
app.use('/api/usuario', usuario);
app.use('/api/cliente', cliente);
app.use('/api/ventas', ventas);
app.use('/api/detalle', detalle); 
app.use('/api/carrito', carrito)
app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    mongoose.connect('mongodb://127.0.0.1:27017/tienda')
        .then(() => console.log('Connected!')); 
});















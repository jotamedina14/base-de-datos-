const Carrito = require('../models/carrito.js');

const httpCarrito = {
    listarCarritoPorCliente: async (req, res) => {
        const clienteId = req.params.clienteId;
        try {
            const carrito = await Carrito.find({ cliente: clienteId }).populate('productos');
            res.json(carrito);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    insertarElementoAlCarrito: async (req, res) => {
        const { idcliente, productos, cantidad, valor } = req.body;
        try {
            const nuevoElemento = new Carrito({ idcliente, productos, cantidad, valor });
            await nuevoElemento.save();
            res.status(201).json(nuevoElemento);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    eliminarElementoDelCarrito: async (req, res) => {
        const elementoId = req.params.elementoId;
        try {
            await Carrito.findByIdAndDelete(elementoId);
            res.json({ message: 'Elemento eliminado del carrito correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = {httpCarrito}
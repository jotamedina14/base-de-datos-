const DetalleVenta = require('../models/detalle_ventas');

const httpDetalle = {
    // Listar detalle de venta por ID de venta
    listarDetalleVentaPorIdVenta: async (req, res) => {
        const { idVenta } = req.params;
        try {
            const detallesVenta = await DetalleVenta.find({ idVenta });
            res.json(detallesVenta);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // Insertar nuevo detalle de venta
    insertarDetalleVenta: async (req, res) => {
        const { idcliente, idventa, fecha, valor } = req.body;
        try {
            const detalleVenta = new DetalleVenta({ idcliente, idventa, fecha, valor });
            await detalleVenta.save();
            res.status(201).json(detalleVenta);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Modificar detalle de venta
    modificarDetalleVenta: async (req, res) => {
        const { id } = req.params;
        const { fecha, valor} = req.body;
        try {
            const detalleVenta = await DetalleVenta.findByIdAndUpdate(id, { fecha, valor }, { new: true });
            res.json(detalleVenta);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = {httpDetalle};
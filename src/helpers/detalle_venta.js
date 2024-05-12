const DetalleV=require('../models/detalle_ventas')
const Cliente=require('../models/clientes.js')
const Venta=require('../models/ventas')


const detalleVHelper = {
    existeClienteID: async (id, req) => {
        const existe = await Cliente.findById(id);
        if (!existe) {
            throw new Error(`No existe el cliente con ID ${id}`);
        }
        req.clientebd = existe; 

    },
    listarTodo: async (req, res) => {
        try {
            const Dventas = await DetalleV.find();
            res.json(Dventas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    existeventaID: async (id, req) => {
        const existe = await Venta.findById(id)
        if (!existe) {
            throw new Error(`venta no existe ${id}`)
        }

        req.ventabd = existe

    }
}
module.exports= {detalleVHelper}

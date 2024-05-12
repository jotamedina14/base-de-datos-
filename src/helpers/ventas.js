const Venta=require('../models/ventas')
const Cliente=require('../models/clientes.js')

const ventaHelper = {
    existeClienteID: async (id, req) => {
        const existe = await Cliente.findById(id);
        if (!existe) {
            throw new Error(`No existe el cliente con ID ${id}`);
        }
        req.clientebd = existe; 

    },

    existeventaID: async (id, req) => {
        const existe = await Venta.findById(id)
        if (!existe) {
            throw new Error(`venta no existe ${id}`)
        }

        req.ventabd = existe

    },


 

}
module.exports= {ventaHelper}

const Carrito=require('../models/carrito.js')
const Cliente=require('../models/clientes.js')
const Producto=require('../models/productos')

const carritoHelper = {

    existeClienteID: async (id, req) => {
        const existe = await Cliente.findById(id)
        if (!existe) {
            throw new Error(`no existe el cliente ${id}`)
        }
        req.req.clientebd = existe

    },
    existeProductoID: async (id, req) => {
        const existe = await Producto.findById(id)
        if (!existe) {
            throw new Error(`no existe el usuario ${id}`)
        }
        req.req.productobd = existe

    },
    existeCarritoID: async (id, req) => {
        const existe = await Carrito.findById(id)
        if (!existe) {
            throw new Error(`No existe el carrito ${id}`)
        }
        req.req.carritobd = existe
    }
}

module.exports= {carritoHelper}
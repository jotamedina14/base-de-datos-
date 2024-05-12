const Producto=require('../models/productos')

const productoHelper = {
    existeProductoID: async (id, req) => {
        const existe = await Producto.findById(id)
        if (!existe) {
            throw new Error(`no existe el usuario ${id}`)
        }
        req.req.productobd = existe

    },
}
module.exports= {productoHelper}


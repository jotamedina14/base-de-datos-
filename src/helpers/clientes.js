const Cliente=require('../models/clientes.js')

const clienteHelper = {
    existeClienteID: async (id, req) => {
        const existe = await Cliente.findById(id)
        if (!existe) {
            throw new Error(`no existe el cliente ${id}`)
        }
        req.req.clientebd = existe

    },

    existeEmail: async (email, req) => {
        if (email) {
            const existe = await Cliente.findOne({ email })
            if (existe) {
                if (req.req.method === "PUT") {
                    if (existe.email !== req.req.usuariobd.email)
                        throw new Error(`Ya existe ese email en la base de datos!!! ${email}`)

                } else {
                    throw new Error(`Ya existe ese email en la base de datos!!! ${email}`)
                }
            }
        }
    },

    verificarEmail: async (email, req) => {

        const existe = await Cliente.findOne({ email });

        if (!existe) {
            throw new Error(`El email no está registrado`)
        }

        req.req.usuariobd = existe;

    },
}
module.exports= {clienteHelper}
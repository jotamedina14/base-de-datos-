const mongoose = require('mongoose');

const ventasSchema = new mongoose.Schema({
    idcliente:{type:mongoose.Schema.Types.ObjectId,ref:'Cliente'},
    detalles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DetalleVenta' }], 
    fecha:{ type: Date, required: true},
    valor: { type: Number, default: 0 },
    cantidad: { type: Number, default:0},
    descuento: { type: Number, default:0}
}, { timestamps: true })
 
module.exports= mongoose.model("Venta", ventasSchema)

// //ventas   ojo listar los detalles
// router.get()//listar todo
// get//listar por un id
// // listar activos, listar inactivos
// // listar ventas del cliente xxx
// // listar todas las ventas entre dos fechas
// // listar ventas con un valor superior a xxxx
// // total de ventas entre dos fechas
// //total descuento
// post//insertar
// put//modificar
// put//activar
// put//desactivar
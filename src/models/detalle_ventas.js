const mongoose = require('mongoose');

const detalle_ventasSchema = new mongoose.Schema({
    idcliente:{type:mongoose.Schema.Types.ObjectId,ref:'Cliente'},
    idventa: { type: mongoose.Schema.Types.ObjectId, ref: 'Venta' },
    fecha:{ type: Date, required: true},
    valor: { type: Number, default: 0 },
}, { timestamps: true })
 
module.exports = mongoose.model("DetalleVenta", detalle_ventasSchema);



// //detalles ventas
// get//listar por un id venta
// post//insertar
// put//modificar
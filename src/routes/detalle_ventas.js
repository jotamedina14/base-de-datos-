const express = require('express');
const router = express.Router();
const {httpDetalle} = require('../controllers/detalle_ventas.js');
const { validarCampos } = require('../middlewares/validar-campos');
const { detalleVHelper} = require('../helpers/detalle_venta.js');
const { check } = require('express-validator');

router.post('/',[
    check('idventa').custom(detalleVHelper.existeventaID),
    check('idcliente').custom(detalleVHelper.existeClienteID),
validarCampos
],httpDetalle.insertarDetalleVenta);

router.put('/detalle/:id',[
    check('idventa').custom(detalleVHelper.existeventaID),
    check('idcliente').custom(detalleVHelper.existeClienteID),
    validarCampos
],httpDetalle.modificarDetalleVenta);

router.get('/detalle/:id',[
    validarCampos
],httpDetalle.listarDetalleVentaPorIdVenta);


module.exports = router;
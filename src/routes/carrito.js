const express = require('express');
const router = express.Router();
const { httpCarrito } = require('../controllers/carrito.js');
const { validarCampos } = require('../middlewares/validar-campos');
const { carritoHelper} = require('../helpers/carrito.js');
const { check } = require('express-validator');

// Rutas para operaciones del carrito
router.post('/carrito',[
    check('idcliente').custom(carritoHelper.existeClienteID),
    check('idproducto').custom(carritoHelper.existeProductoID),
    check('valor').isNumeric().withMessage('valor'),
    check('cantidad').isNumeric().withMessage('cantidad'),
    validarCampos
], httpCarrito.insertarElementoAlCarrito);

router.get('/carrito/cliente/:idcliente',[
    check('idcliente').custom(carritoHelper.existeClienteID),
    check('idproducto').custom(carritoHelper.existeProductoID),
], httpCarrito.listarCarritoPorCliente);

router.delete('/carrito/:id',[
    check('idproducto').custom(carritoHelper.existeProductoID),
], httpCarrito.eliminarElementoDelCarrito);

module.exports = router;
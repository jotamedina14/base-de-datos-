const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { httpVenta } = require('../controllers/ventas.js'); 
const { ventaHelper } = require('../helpers/ventas.js')

router.post('/',[
    check('idcliente').custom(ventaHelper.existeClienteID),
    validarCampos
], httpVenta.crear); 

router.put('/:id',[
    check('idcliente').custom(ventaHelper.existeClienteID),
    check('id').custom(ventaHelper.existeventaID),
    validarCampos
], httpVenta.actualizar); 

router.put('/activar/:id',[
    check('id').custom(ventaHelper.existeventaID),
    validarCampos
], httpVenta.activar); 

router.put('/desactivar/:id',
[
    check('id').custom(ventaHelper.existeventaID),
    validarCampos
],  httpVenta.desactivar); 

router.get('/:id',[
    check('id').custom(ventaHelper.existeventaID),
    validarCampos
], httpVenta.obtenerPorId); 

router.get('/activas',[
    check('id').custom(ventaHelper.existeventaID),
    validarCampos
], httpVenta.listarActivas); 

router.get('/inactivas',[
    check('id').custom(ventaHelper.existeventaID),
    validarCampos
], httpVenta.listarInactivas);

router.get('/cliente/:id',[
    check('idcliente').custom(ventaHelper.existeClienteID),
], httpVenta.listarPorCliente); 

router.get('/fechas/:inicio/:fin',[
    check('inicio').isDate().withMessage('fecha de inicio'),
    check('fin').isDate().withMessage('fecha fin')
], httpVenta.listarPorRangoDeFechas); 

router.get('/valor/:valor',[
    check('valor').isNumeric().withMessage('valor')
], httpVenta.listarPorValorSuperior);

router.get('/totalventas/:inicio/:fin',[
    check('inicio').isDate().withMessage('fecha de inicio'),
    check('fin').isDate().withMessage('fecha fin')
], httpVenta.calcularTotalPorRangoDeFechas); 

router.get('/totaldescuento/:id',[
], httpVenta.calcularTotalDescuento); 

router.get('/', httpVenta.listarTodo); 


module.exports = router;
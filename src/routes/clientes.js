const express = require('express');
const router = express.Router();
const { httpCliente } = require('../controllers/clientes.js');
const { validarCampos } = require('../middlewares/validar-campos');
const { clienteHelper} = require('../helpers/clientes.js');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validarJWT.js');

// Rutas para los controladores de clientes
router.post('/',[
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('documento', 'El documento es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'email invalido').isEmail(),
    check('direccion', 'La direccion es obligatoria').not().isEmpty(),
validarCampos
], httpCliente.insertarCliente);

router.put('/clientes/:id',[
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('documento', 'El documento es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('email').custom(clienteHelper.existeEmail),
    check('direccion', 'La direccion es obligatoria').not().isEmpty(),
    validarCampos
], httpCliente.modificarCliente);

router.put('/desactivar/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(clienteHelper.existeClienteID),
    validarCampos
], httpCliente.desactivarCliente); 

router.put('/activar/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(clienteHelper.existeClienteID),
    validarCampos
], httpCliente.activarCliente); 

router.get('/',[
    validarJWT,
    validarCampos
], httpCliente.listarClientes);

router.get('/clientes/:id', httpCliente.obtenerClientePorId);




module.exports = router;
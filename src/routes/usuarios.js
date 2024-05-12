const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { httpUsuarios } = require('../controllers/usuarios.js');
const { usuarioHelper } = require('../helpers/usuarios');
const { validarJWT } = require('../middlewares/validarJWT.js');




router.post('/', [
    
    check('email', 'El email es obligatorio!').not().isEmpty(),
    check('email').custom(usuarioHelper.existeEmail),
    check('password', 'Password es obligatorio!').not().isEmpty(),
    check('password', 'Password no es válido').isLength({ min: 8 }),
    validarCampos
    
], httpUsuarios.insertarUsuario);

router.post('/login', [
    check('email', 'El email es obligatorio!').not().isEmpty(),
    check('password', 'Password es obligatorio!').not().isEmpty(),
    validarCampos,
], httpUsuarios.login);

router.put('/:id', [
    validarJWT,
    check('newPassword', 'Password es obligatorio!').not().isEmpty(),
    validarCampos
], httpUsuarios.cambiarContraseña);

router.put('/usuarios/:id',[
    validarJWT,
    check('email', 'El email es obligatorio!').not().isEmpty(),
    check('email').custom(usuarioHelper.existeEmail),
    validarCampos
], httpUsuarios.modificarUsuario);

router.put('/activar/:id',[
    validarJWT,
    check('id').custom(usuarioHelper.existeUsuarioID),
    validarCampos
], httpUsuarios.activarUsuario);

router.put('/desactivar/:id',[
    validarJWT,
    check('id').custom(usuarioHelper.existeUsuarioID),
    validarCampos
], httpUsuarios.desactivarUsuario);

router.get('/',[
    validarJWT,
    validarCampos
], httpUsuarios.listarUsuarios);

router.get('/uactivos',[
    validarJWT,
    validarCampos
], httpUsuarios.listarUsuariosActivos);

router.get('/inactivos', httpUsuarios.listarUsuariosInactivos);

module.exports = router;


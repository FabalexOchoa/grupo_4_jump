const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/', productsController.index); //listado productos
router.get('/:id/', productsController.detail); //detalle individual producto
router.get('/:id/edit', productsController.edit); //formulario edicion producto
/*
router.get('/create', productsController.create); //creacion de productos
router.post('/products', productsController.store); //direccion de creacion(donde apunta el formulario)

router.put('/:id', productsController.update); // accion de edicion (donde apunta el formulario)
router.delete('/:id', productsController.delete); //borra producto especifico
*/
module.exports = router;

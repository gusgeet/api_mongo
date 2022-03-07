
const { Router } = require('express');
const { productoPost, productosGet } = require('../controllers/productos');
const { check } = require('express-validator');


const router = Router()

router.get('/', productosGet);

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('precio', 'El precio no puede estar sin definir').not().isEmpty(),
] , productoPost )


module.exports = router
const Producto = require('../models/producto')

const existeProducto = async (producto = '') => {

    const yaHayProducto = await Producto.findOne({producto})
    if ( yaHayProducto ) {
        throw new Error (`El producto  ${producto} ya se encuentra dado de alta en la base de datos`)
    }
    
}

module.exports = {
    existeProducto
}


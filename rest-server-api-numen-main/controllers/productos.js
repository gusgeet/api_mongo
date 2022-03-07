const Producto = require("../models/producto");

const productosGet = async (req, res) => {

    const { mostrar = 25, from = 0 } = req.query

    
    const [total, productos ] = await Promise.all([
        Producto.countDocuments(),
        Producto.find()
        .skip(Number(from))
        .limit(Number(mostrar))
    ])

    res.status(200).json({

        total,
        productos
   
    })

}

const productoPost = async (req, res) => {

    const { nombre, estado, precio, descripcion } = req.body
    const product = new Producto( {nombre, estado, precio, descripcion} )

    await product.save()

    res.status(200).json({
        msg: 'SE INGRESO CON EXITO', product
              
    })

}


module.exports = { productosGet, productoPost }



const { Schema, model } = require('mongoose')



const ProductoSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: [true, 'No puede colocarse el mismo producto']
    },
    estado: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
    },
    descripcion:{
        type: String
    }
})

ProductoSchema.methods.toJSON = function() {

    const { ...producto } = this.toObject();
    

    return producto
}


module.exports = model('Productos', ProductoSchema)
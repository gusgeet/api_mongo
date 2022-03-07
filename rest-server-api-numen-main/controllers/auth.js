const Usuario = require("../models/usuario");

const bcryptjs = require('bcryptjs');
const { generarJWT } = require("../helpers/generar-jwt");

const login = async ( req, res ) => {

     const { correo, password } = req.body
     
     try {
        //Verificar si el mail existe
        const usuario = await Usuario.findOne({ correo })

        if(!usuario){
            return res.status(400).json({
                msg: 'el correo no existe en la BD'
            })
        }

        //si el usuario esta activo osea el estado sea true
        if( !usuario.estado ) {
            return res.status(400).json({
                msg:'El usuario tiene estado en FALSE'
            })
        }

    
        //Verificar si el pass es correcto
        const validPassword = bcryptjs.compareSync( password, usuario.password)

        if ( !validPassword ) {
            return res.status(400).json({
                msg:'El password es incorrecto'
            })
        }
        //dar o generar el JWT
        const token = await generarJWT(usuario.id)

        res.json({
            usuario,
            token
        })

    } catch (error) {
        
        console.log(error);
        res.status(500).json(
            {msg:'Algo ocurrio conn el backend.'}
        )
        


    }

}



module.exports = {
    login
}
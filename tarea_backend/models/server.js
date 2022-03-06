const express = require('express');
const cors = require('cors');

class Server {
    //constructor
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //middlewares
        this.middlewares();
        this.routes();


    }


    //metodos
    middlewares() {
        this.app.use( cors() );

        this.app.use( express.json() );

        //directorio publico
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use( this.usuariosPath, require('../routes/usuarios') )
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ', this.port);
        })
    }
}


module.exports = Server;
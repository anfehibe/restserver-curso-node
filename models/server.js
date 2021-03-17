const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';


        //Middleweres
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    middlewares() {

        //cors
        this.app.use(cors());

        //lectura y parseo
        this.app.use(express.json());

        //Directorio Publico
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}
module.exports = Server;
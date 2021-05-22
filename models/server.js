const { dbConnection } = require('../database/config');
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth:           '/api/auth',
            buscar:         '/api/buscar',
            categorias:     '/api/categorias',
            productos:      '/api/productos',
            usuarios:       '/api/usuarios',
            uploads:       '/api/uploads'
        }
        

        //Connectar a DB
        this.conectarDB();



        //Middleweres
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }
    async conectarDB() {
        await dbConnection();
    }
    routes() {
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.buscar, require('../routes/buscar'));
        this.app.use(this.paths.categorias, require('../routes/categorias'));
        this.app.use(this.paths.productos, require('../routes/productos'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios'));
        this.app.use(this.paths.uploads, require('../routes/uploads'));
    }

    middlewares() {

        //cors
        this.app.use(cors());

        //lectura y parseo
        this.app.use(express.json());

        //Directorio Publico
        this.app.use(express.static('public'));

        //Fileupload - Carga de archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}
module.exports = Server;
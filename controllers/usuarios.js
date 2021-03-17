const { response } = require('express');


const usuariosGet = (req = request, res = response) => {
    const { q, nombre, apikey } = req.query;
    res.json({
        msg: 'get API - Controlador'
    });
}

const usuariosPost = (req, res = response) => {
    const body = req.body;
    res.json({
        msg: 'post API - Controlador',
        body
    });
}
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    });
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - Controlador'
    })
}
const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'put API - Controlador',
        id
    });
}
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
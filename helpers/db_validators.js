const Role = require('../models/role');
const {Usuario, Categoria, Producto} = require('../models');

const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`EL rol ${rol} no esta regoistrado en la BD`);
    }
}
const emailExiste = async(correo = '') => {
    //verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya está regoistrado en la BD`);
    }
}
const existeUsuarioPorId = async(id) => {
    //verificar si el correo existe
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id "${id}" no existe en la BD`);
    }
}

/* 
Categorias
*/

const existeCategoriaPorId = async(id) => {
    const existeCategorias = await Categoria.findById(id);
    if (!existeCategorias) {
        throw new Error(`El id "${id}" no existe en la BD`);
    }
}
const existeProductoPorId = async(id) => {
    const existeProductos = await Producto.findById(id);
    if (!existeProductos) {
        throw new Error(`El id "${id}" no existe en la BD`);
    }
}
module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId
}
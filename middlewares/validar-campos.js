const { validationResult } = require('express-validator/src/validation-result');
const validarCampos = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
}
module.exports = {
    validarCampos
}
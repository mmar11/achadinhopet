var express = require('express');
var router = express.Router();
const multer = require('multer')
const path = require('path');
const usuarioController = require('../Controllers/usuariosController');
const logDB = require('../middlewares/logDB')
const { check, validationResult, body } = require('express-validator')
const fs = require('fs')



var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join('uploads'))
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })


const checarUsu = [
    body("nome").isLength({ min: 3 }).withMessage("O nome deve conter no min 3 caracteres"),
    body("email").isEmail().withMessage("formato do email deve ser xxxxx@xxxxxx.com"),
    body("senha").isLength({ min: 5 }).withMessage("min 5 caracteres").custom((value, { req, loc, path }) => {
        if (value != req.body.confsenha) {
            // trow error if passwords do not match
            throw new Error("Passwords don't match");
        } else {
            return value;
        }
    })
]

router.get('/criar', usuarioController.criarUsu)
router.post('/criar', logDB, checarUsu, usuarioController.salvarUsu)
router.get('/login', usuarioController.loginUsu)
router.post('/login', usuarioController.validaUsu)

module.exports = router
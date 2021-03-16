var express = require('express');
var router = express.Router();
const animaisController = require('../Controllers/animaisController')
const multer = require('multer')
const path = require('path');
const usuarioController = require('../Controllers/usuariosController');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join('uploads'))
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })


router.get('/criar', usuarioController.criarUsu)
router.post('/criar', usuarioController.salvarUsu)
router.get('/login', usuarioController.loginUsu)
router.post('/login', usuarioController.validaUsu)

module.exports = router
var express = require('express');
var router = express.Router();
const animaisController = require('../Controllers/animaisController')
const multer = require('multer')
const path = require('path')


var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join('uploads'))
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })



router.get('/', animaisController.consultaquery)
router.get('/cadastroanimais', animaisController.cadastro)
router.get('/sucesso', animaisController.sucesso)
router.post('/cadastroanimais', upload.any(), animaisController.salvar)
router.get('/:id/editar', animaisController.editar)
router.put('/editar', animaisController.editarput)
router.get('/consultar', animaisController.listarAnimais)
router.delete('/deletar/:id', animaisController.deletarAnimal)



module.exports = router
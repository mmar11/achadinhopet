var express = require('express');
var router = express.Router();
var contatoController = require('../Controllers/contatoController');
const estController = require('../Controllers/estudantesController');
const infocontroller = require('../Controllers/infoController');
var infoController = require('../Controllers/infoController')


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/contato', contatoController.index)
router.get('/estudantes', estController.index)
router.get('/info', infocontroller.index2)




module.exports = router;
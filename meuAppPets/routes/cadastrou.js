var express = require('express');
var router = express.Router();
var cadastroController = require('../Controllers/cadastroController');

//GET /cadastrou/
router.get('/', cadastroController.index);

module.exports = router;
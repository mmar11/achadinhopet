var express = require('express');
var router = express.Router();
var petsController = require('../Controllers/petsController')

router.get('/', petsController.indexpets)



module.exports = router;
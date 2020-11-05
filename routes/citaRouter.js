const router = require('express').Router();
const CitaController = require('../controllers/citaController');

//Ruta para mostrar los usuarios
router.get('/showAll', CitaController.showAll);

module.exports = router;

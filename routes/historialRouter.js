const router = require('express').Router();
const HistorialController = require('../controllers/historialController');

//Ruta para mostrar los usuarios
router.get('/showAll', HistorialController.showAll);

module.exports = router;

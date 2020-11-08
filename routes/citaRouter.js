const router = require('express').Router();
const CitaController = require('../controllers/citaController');


//Ruta para mostrar todas las citas
router.get('/showAll', CitaController.showAll);
//Ruta para creación de una nueva cita
router.post('/', CitaController.createCita);
//Ruta para eliminar una cita
router.delete('/:id', CitaController.deleteCita);


module.exports = router;

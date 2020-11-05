const router = require('express').Router();
const UserController = require('../controllers/userController');

//Ruta para mostrar los usuarios
router.get('/showAll', UserController.showAll);

module.exports = router;

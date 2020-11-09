const router = require('express').Router();
const UserController = require('../controllers/userController');

//Ruta para crear usuario
router.post('/', UserController.createUser);
//Ruta para mostrar usuario por id / login
router.post('/login', UserController.showId);
//Ruta para logout usuario

module.exports = router;

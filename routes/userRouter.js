const router = require('express').Router();
const UserController = require('../controllers/userController');

//Ruta para crear usuario
router.post('/', UserController.createUser);
//Ruta para mostrar usuario por id
router.post('/login', UserController.showId);

module.exports = router;

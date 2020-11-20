const router = require('express').Router();
const UserController = require('../controllers/userController');

//Ruta para crear usuario
router.post('/', UserController.register);
//Ruta para mostrar usuario por id / login
router.post('/login', UserController.login);
//Ruta para logout usuario
router.delete('/logout', UserController.logout);
//Ruta para mostrar usuarios
router.get('/showAll', UserController.showAll);

module.exports = router;

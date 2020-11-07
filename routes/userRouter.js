const router = require('express').Router();
const UserController = require('../controllers/userController');

//Ruta para mostrar usuario por id
router.get('/showId', UserController.showId);

module.exports = router;

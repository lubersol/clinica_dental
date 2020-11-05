const {
    User
} = require('../models');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const UserController = {
    showAll(req, res) {
        User.findAll()
            .then(users => res.send(users))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'Ha habido un problema tratando de recuperar los users'
                })
            })
    },
    showId(req,res) {
        let idUser = req.body.id;
        User.query(`SELECT * from Users WHERE id = ${idUser}`)
            .then(users => res.send(users))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'Ha habido un problema localizando al usuario'
                })
            })
    }
}
module.exports = UserController;






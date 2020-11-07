const {
    User
} = require('../models');
//const secret = 'ksdjflsdjflsjflsdfjldsjf';
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//Importar el middleware auth
const auth = require('./middlewares/auth');

const UserController = {
    // showAll(req, res) {
    //     User.findAll()
    //         .then(users => res.send(users))
    //         .catch(error => {
    //             console.error(error);
    //             res.status(500).send({
    //                 message: 'Ha habido un problema tratando de recuperar los users'
    //             })
    //         })
    // },
    showId(req, res) {
        User.query(`SELECT * from Users WHERE id = ${idUser}`)
        .then(users => res.send(users))
        .catch(error => {
            console.error(error);
            res.status(500).send({
                message: 'Ha habido un problema localizando al usuario'
            })
        })
},
    //crear metodo para hacer logout usuario
    //crear método de registro para usuario
    //Comprobar si es un login de usuario y añadir autenticacion (token)

}
module.exports = UserController;






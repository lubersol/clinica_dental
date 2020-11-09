const {
    User
} = require('../models');
//const secret = 'ksdjflsdjflsjflsdfjldsjf';
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//Importar el middleware auth
const auth = require('../middlewares/auth');

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
    showId(req, res) {
        User.query(`SELECT * from users WHERE id = ${id}`)
            .then(users => res.send(users))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'Ha habido un problema localizando al usuario'
                })
            })
    },
    //Método de registro para usuario
    createUser(req, res) {
        const u = { nombre, apellidos, rol, email, password, covid, telefono, direccion, deudor, dni, dob } = req.body;
        User.create(u).then((user) => {
            res.status(200).send('Usuario registrado correctamente');
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    },
    // const token = jwt.sign({ email: data.id, password: password }, secret, { expiresIn: 60 * 60 * 24 });
    // res.json({ token: token, message: 'Login correcto' });

    //Middleware para validar mediante token)
    // jwt.verify(token, 'secret', function (err, token) {
    //     if (err) {
    //         return res.status(401).send({
    //             ok: false,
    //             message: 'Token inválido'
    //         });
    //     } else {
    //         req.token = token
    //         next()
    //     }
    // })


    //Comprobar si es un login de usuario y añadir autenticacion (token)
    //crear metodo para hacer logout usuario

    //Logout usuario
    async delete(req, res) {
        try {
            const email = await User.destroy({
                where: {
                    email: req.body.email
                }
            })
            if (!email) {
                return res.status(400).send({
                    message: 'Email not found'
                })
            }
            res.send({
                message: 'Account successfully removed'
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem trying to remove the account'
            })
        }
    },
}
module.exports = UserController;






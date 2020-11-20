const {
    User
} = require('../models');

const bcrypt = require('bcrypt');
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

    //Método de registro para usuario
    register(req, res) {
        const u = { nombre, apellidos, rol, email, password, covid, telefono, direccion, deudor, dni, dob } = req.body;
        User.create(u).then((user) => {
            res.status(200).json(
                {message:'Usuario registrado correctamente'+ u}
                );
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    },

    //Login usuario
    async login(req, res) {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send(
                'Faltan datos'
            );
        }
        try {
            let user = await User.authenticate(email, password)
            user = await user.authorize();
            return res.json(user);
        } catch (err) {
            return res.status(400).json(
                {message:'Datos introducidos incorrectos'});
        }
    },

    //Logout usuario
    async logout(req, res) {
        const { user, cookies: { auth_token: auth } } = req;
        if (user && auth) {
            await req.user.logout(auth);
            return res.status(204).send()
        }
        return res.status(400).send(
            { errors: [{ message: 'no autenticado' }] }
        );

    },

}
module.exports = UserController;






const {
    User,
    Cita
} = require('../models');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//Importar el middleware auth
//const auth = require('../middlewares/auth');

const UserController = {
    showAll(req, res) {
        User.findAll({
            include: [{
                model: Cita
            }]
        })
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
                { message: 'Usuario registrado correctamente' }
            );
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    },

    //Login usuario
    login(req, res) {
        const user = User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(user => {
                if (!user) {
                    return res.status(404).send({ message: 'Usuario no encontrado' })
                }
                const passwordValid = bcrypt.compareSync(req.body.password, user.password);
                if (!passwordValid) {
                    return res.status(401).send({
                        token: null,
                        message: 'Password no válido'
                    });
                }
                const token = jwt.sign({
                    id: user.id, rol: user.rol
                }, 'gatopaseandoporelteclado', {
                    expiresIn: '5d'
                })

                res.status(200).send({
                    id: user.id,
                    email: user.email,
                    token: user.token,
                    rol: user.rol,
                    message: 'Has accedido correctamente'
                });
    })
                    .catch(err => {
        res.status(500).send({ message: err.message });
    });
},

    //Logout usuario
    async logout(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const out = await User.findOne({ token: token });
            out.token = null;
            out.save();
            res.send('Has cerrado la sesión')
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'No se ha podido cerrar la sesión' });

        }

    }
}
module.exports = UserController;






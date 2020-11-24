const {
    User,
    Cita
} = require('../models');

//const bcrypt = require('bcrypt');
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
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            })
            if (!user) {
                return res.status(400).send({
                    message: 'Datos incorrectos'
                });
            }
            const token = jwt.sign({
                id: user.id
            }, 'gatopaseandoporelteclado', {
                expiresIn: '1y'
            })
            res.send({
                user,
                token,
                message: 'Has accedido correctamente'
            });
        } catch (error) {
            res.status(400).send({
                message: 'No has accedido correctamente'
            });
        }
    },
    
    //Logout usuario
    async logout (req, res){
        try{
            const token= req.headers.authorization;

            await User.findOneAndUpdate({token:token},{token:null});

            res.send('Has cerrado la sesión')
        }catch(error){
            console.log(error)
            res.status(500).send({message:'No se ha podido cerrar la sesión'});

        }

    }
}
module.exports = UserController;






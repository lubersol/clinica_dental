const {
    User
} = require('../models');

//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cita = require('../models/cita');
//Importar el middleware auth
//const auth = require('../middlewares/auth');

const UserController = {
    showAll(req, res) {
        User.findAll({
            include:[{
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
        // const { email, password } = req.body;
        // if (!email || !password) {
        //     return res.status(400).send(
        //         'Faltan datos'
        //     );
        // }
        try {
            const user = await User.findOne({
                where:{
                email: req.body.email
            }
            })
            if(!user){
                return res.status(400).send({
                    message:'Datos incorrectos'
                });
            }
            const token = jwt.sign({
                id:user.id
            }, 'gatopaseandoporelteclado',{
                expiresIn:'1y'
            })
            res.send({
                user,
                token,
                message: 'Has accedido correctamente'
            });
        }catch (error){
            res.status(400).send({
                message:'No has accedido correctamente'
            });
        }
    },
    //         user = await user.authorize();
    //         return res.json({
    //             user,
    //             token,
    //             message:'Has accedido correctamente'
    //         });
    //     } catch (err) {
    //         return res.status(400).json(
    //             { message: 'Datos introducidos incorrectos' }
    //         );
    //     }
    // },

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






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
    //crear método de registro para usuario
    createUser(req,res){
        let u = req.body.user;
        console.log(u);
        User.create(u),then(()=>{
            res.status(200).send('Usuario registrado correctamente');
            const token = jwt.sign({ email: data.id, password: password }, secret, { expiresIn: 60 * 60 * 24 });
            res.json({ token: token, message: 'Login correcto' });
        
            //Middleware para validar mediante token)
            jwt.verify(token, 'secret', function (err, token) {
                if (err) {
                    return res.status(401).send({
                        ok: false,
                        message: 'Token inválido'
                    });
                } else {
                    req.token = token
                    next()
                }
            })
        
        }).catch(err=>{
            console.log(err);
            res.status(500).json(err);
        })
    },
    //Comprobar si es un login de usuario y añadir autenticacion (token)
    //crear metodo para hacer logout usuario

}
module.exports = UserController;






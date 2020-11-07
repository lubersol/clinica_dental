const {
    Cita
} = require('../models');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const CitaController = {
    showAll(req, res) {
        Cita.findAll()
            .then(citas => res.send(citas))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'Ha habido un problema tratando de recuperar las citas'
                })
            })
    },
    showId(req,res) {
        let idCita = req.body.id;
        Cita.query(`SELECT * from Citas WHERE id = ${idCita}`)
            .then(citas => res.send(citas))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'Ha habido un problema localizando la cita'
                })
            })
    },
    //crear metodo para eliminar una cita (destroy)
    //mirar lo de citas pendientes(get)
    //crear una cita nueva (post)
}
module.exports = CitaController;



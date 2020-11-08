const {
    Cita
} = require('../models');
const cita = require('../models/cita');
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
    showId(req, res) {
        let idCita = req.body.id;
        Cita.query(`SELECT * from Cita WHERE id = ${idCita}`)
            .then(citas => res.send(citas))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'Ha habido un problema localizando la cita'
                })
            })
    },
    //Método para crear una cita
    createCita(req, res) {
        let c = req.body.cita;
        console.log(c);
        Cita.create(c).then(() => {
            res.status(200).end('Cita creada correctamente');
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    },
    //Método para eliminar una cita
    deleteCita(req, res) {
        console.log(req.params.id);
        Cita.findById(req.params.id).then(cita => {
            cita.destroy();
            res.status(200).end('Cita eliminada');
        })
            .catch(err => {
                console.log(err);
            });

    }

    //mirar lo de citas pendientes(get)

}
module.exports = CitaController;



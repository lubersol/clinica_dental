const {
    Historial
} = require('../models');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const HistorialController = {
    showAll(req, res) {
        Historial.findAll()
            .then(historiales => res.send(historiales))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'Ha habido un problema tratando de recuperar los historiales'
                })
            })
    },
    showId(req,res) {
        let idHistorial = req.body.id;
        Historial.query(`SELECT * from Historiales WHERE id = ${idUser}`)
            .then(historiales => res.send(historiales))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'Ha habido un problema localizando el historial'
                })
            })
    }
}
module.exports = HistorialController;



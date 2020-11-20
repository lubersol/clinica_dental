const {
    Cita, User, Sequelize
} = require('../models');
const { Op } = Sequelize;

const CitaController = {
    showAll(req, res) {
        Cita.findAll({
            include: [User],
            where: {
                date: {
                    [Op.lt]: Date.now()
                }
            }
        })
            .then(citas => res.send(citas))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'Ha habido un problema tratando de recuperar las citas'
                })
            })
    },
    //Ver citas pendientes
    showPending(req, res) {
        Cita.findAll({
            where: { status: 'pending', id: req.params.id },
        }).then(citas => {
            res.send(citas);
        }).catch(error => {
            res.status(500).send({
                message: 'Ha habido un problema localizando citas pendientes'
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
        Cita.destroy({
            where: { id: req.params.id }
        }).then(borrado => {
            res.send('Cita eliminada');
        })
            .catch(err => {
                console.log(err);
            });

    }

}
module.exports = CitaController;



const {
    Cita, User, Sequelize
} = require('../models');
const { Op } = Sequelize;

const CitaController = {
    showAll(req, res) {
        Cita.findAll({
            include: [User, {
                model: User
            }],
            WHERE: {
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
            WHERE: { status: 'pending', userId: req.params.id },
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
            WHERE: { id: req.params.id }
        }).then(borrado => {
            res.send('Cita eliminada');
        })
            .catch(err => {
                console.log(err);
            });

    }

}
module.exports = CitaController;



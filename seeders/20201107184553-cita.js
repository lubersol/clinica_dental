

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cita', [{
      userId: 1,
      hora: '2020-02-27',
      servicio: 'Limpieza dental',
      observaciones: 'Gratuita',
      status: 'Realizada',
      precio: 0,
      sala: '01',
      createdAt: '2020-11-07',
      updatedAt: '2020-11-07',
    }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Users', null, {});

  }
};

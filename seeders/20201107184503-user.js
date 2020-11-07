

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Users', [
      {
        nombre: 'John',
        apellidos: 'Doe',
        rol: 'cliente',
        email: 'johndoe@gmail.com',
        password: 'lkjlkjlkasdasd',
        covid: false,
        telefono: 699999999,
        direccion: 'Gran Via 7',
        deudor: false,
        dni: '454545454K',
        dob: '1990-02-27',
        createdAt: '2020-11-07',
        updatedAt: '2020-11-07',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users', null, {});

  }
};

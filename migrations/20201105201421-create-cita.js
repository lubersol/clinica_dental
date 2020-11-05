'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cita', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      hora: {
        type: Sequelize.DATE
      },
      servicio: {
        type: Sequelize.STRING
      },
      observaciones: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.STRING
      },
      sala: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cita');
  }
};
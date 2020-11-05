'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User);
    }
  };
  Cita.init({
    userId: DataTypes.INTEGER,
    hora: DataTypes.DATE,
    servicio: DataTypes.STRING,
    observaciones: DataTypes.STRING,
    status: DataTypes.STRING,
    precio: DataTypes.STRING,
    sala: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cita',
  });
  return Cita;
};
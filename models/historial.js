'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historial extends Model {

    static associate(models) {
      this.belongsTo(models.User);
    }
  };
  Historial.init({
    clienteId: DataTypes.INTEGER,
    alergias: DataTypes.BOOLEAN,
    historialId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Historial',
  });
  return Historial;
};
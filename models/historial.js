'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
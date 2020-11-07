'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      this.hasMany(models.Cita);
      this.hasOne(models.Historial);
    }
  };
  User.init({
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    rol: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    covid: DataTypes.BOOLEAN,
    telefono: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    deudor: DataTypes.BOOLEAN,
    dni: DataTypes.STRING,
    dob: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
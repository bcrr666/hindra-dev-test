const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Offer = sequelize.define('offer', {
  codigo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
    field: 'id'
  },
  codigo_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    isInt: true,
    field: 'user_id'
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name'
  },
  precio_base: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    isDecimal: true,
    field: 'base_amount'
  }
  ,
  precio_venta: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    isDecimal: true,
    field: 'sales_expectation'
  }
  ,
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'start_date'
  }
  ,
  fecha_fin: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'end_date'
  }
});

module.exports = { offer: new Offer(),  Offer };
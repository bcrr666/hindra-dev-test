const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Offer = sequelize.define('offer', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    isInt: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
  ,
  base_amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    isDecimal: true
  }
  ,
  sales_expectation: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    isDecimal: true
  }
  ,
  start_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
  ,
  end_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = { offer: new Offer(),  Offer };
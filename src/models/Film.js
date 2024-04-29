const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Film = sequelize.define('film', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  episode_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  opening_crawl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false
  },
  producer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  release_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  characters: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  planets: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  starships: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  vehicles: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  species: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  created: {
    type: DataTypes.DATE,
    allowNull: false
  },
  edited: {
    type: DataTypes.DATE,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = { film: new Film(),  Film };
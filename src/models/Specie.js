const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Film = sequelize.define('film', {
  codigo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
    field: 'id'
  },
  altura_promedio: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'average_height'
  },
  promedio_vida: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'average_lifespan'
  },
  sinopsis: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'opening_crawl'
  },
  clasificacion: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'classification'
  },
  creado_en: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'created'
  },
  designación: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'designation'
  },
  editado_en: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'edited'
  },
  color_ojos: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'eye_colors'
  },
  color_pelo: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'hair_colors'
  },
  mundo_natal: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'homeworld'
  },
  idioma: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'language'
  },
  gente: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
    field: 'people'
  },
  peliculas: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    field: 'skin_colors'
  },
  color_piel: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'films'
  },
  enlace: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'url'
  },
});

module.exports = { film: new Film(),  Film };
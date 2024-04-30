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
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'title'
  },
  codigo_episodio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'episode_id'
  },
  sinopsis: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'opening_crawl'
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'director'
  },
  productor: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'producer'
  },
  fecha_lanzamiento: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'release_date'
  },
  personajes: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    field: 'characters'
  },
  planetas: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    field: 'planets'
  },
  naves_estelares: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    field: 'starships'
  },
  vehiculos: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    field: 'vehicles'
  },
  especies: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    field: 'species'
  },
  creado_en: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'createdAt'
  },
  editado_en: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'updatedAt'
  },
  enlace: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'url'
  },
});

module.exports = { film: new Film(),  Film };
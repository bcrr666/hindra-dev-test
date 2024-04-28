const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'rimac_beta'
});

//Todo: Agregar validacion para la conexion

module.exports = pool;
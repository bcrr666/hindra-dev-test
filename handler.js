'use strict';
const axios = require("axios");

module.exports.films = async (event) => {

  const response = await axios.get(`https://swapi.py4e.com/api/films`);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Lista de peliculas.',
        data: response.data
      },
      null,
      2
    ),
  };

};

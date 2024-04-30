const { Film } = require('../models/Film');
const axios = require('axios');


class FilmService {

  async findById(id) {

    try {

      const response = await axios.get(`https://swapi.py4e.com/api/films/${id}`);
      return response.data;

    } catch (error) {
      console.error('Ocurrió un error:', error.message);
      return error.response.status
      
    }
  }
}

module.exports = { filmService: new FilmService(),  FilmService }

const { Film } = require('../models/Film');
const axios = require('axios');


class FilmService {

  async findById(id) {
    const response = await axios.get(`https://swapi.py4e.com/api/films/${id}`);
    return response.data;
  }
}

module.exports = { filmService: new FilmService(),  FilmService }

const { Film } = require('../models/Film');
const axios = require('axios');


class FilmService {

  async findById(id) {

    const film = await Film.findOne({where: {id: id}});
    return film;

  }
    
  async register(data) {

    try {

      const film = await Film.create(data);
      return film;

    } catch (error) {

      console.error('Ocurrió un error al registrar una pelicula:', error.message);
      
    }
  }

  async list() {

    const films = await Film.findAll();
    return films;

  }
}

module.exports = { filmService: new FilmService(),  FilmService }

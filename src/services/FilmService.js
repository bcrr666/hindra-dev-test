const { Film } = require('../models/Film');
const axios = require('axios');


class FilmService {

  async findById(id) {

    try {

      const response = await axios.get(`https://swapi.py4e.com/api/films/${id}`);
      const film = response.data;
      return {
        titulo: film.title,
        codigo_episodio: film.episode_id,
        sinopsis : film.opening_crawl,
        director: film.director,
        productor: film.producer,
        fecha_lanzamiento: film.release_date,
        personajes: film.characters,
        planetas: film.planets,
        naves_estelares: film.starships,
        vehiculos: film.vehicles,
        especies: film.species,
        creado_en: film.created,
        editado_en: film.edited,
        enlace: film.url,
      }

    } catch (error) {
      console.error('Ocurrió un error:', error.message);
      return error.response.status
      
    }
  }
}

module.exports = { filmService: new FilmService(),  FilmService }

const axios = require('axios');


class SpecieService {

  async findById(id) {

    try {

      const response = await axios.get(`https://swapi.py4e.com/api/species/${id}`);
      const film = response.data;
      return {
        altura_promedio: film.average_height,
        promedio_vida: film.average_lifespan,
        clasificacion : film.classification,
        creado_en: film.created,
        designación: film.designation,
        editado_en: film.edited,
        color_ojos: film.eye_colors,
        color_pelo: film.hair_colors,
        mundo_natal: film.homeworld,
        idioma: film.language,
        gente: film.people,
        peliculas: film.films,
        color_piel: film.skin_colors,
        enlace: film.url,
      }

    } catch (error) {
      return error.response.status
    }
  }
}

module.exports = { specieService: new SpecieService(),  SpecieService }

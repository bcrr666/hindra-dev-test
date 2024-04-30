'use strict';
const responseService = require('./provider/response-service-provider');
const { filmService } = require('./src/services/FilmService')
const { specieService } = require('./src/services/SpecieService')

module.exports.finndFilmById = async (event) => {
  const film = await filmService.findById(event.pathParameters.id)

  if (film == 404) {
    return responseService.json('Ocurrio un error al realizar la busqueda', {}, 404)
  }

  return responseService.json('Informacion de la peliculas', film)
};

module.exports.registerFilm = async (event) => {
  const body = JSON.parse(event.body)
  const data = {
    'titulo': body.title,
    'codigo_episodio': body.episode_id,
    'sinopsis': body.opening_crawl,
    'director': body.director,
    'productor': body.producer,
    'fecha_lanzamiento': body.release_date,
    'personajes': body.characters,
    'planetas': body.planets,
    'naves_estelares': body.starships,
    'vehiculos': body.vehicles,
    'especies': body.species,
    'enlace': body.url
  }

  try {
    await filmService.register(data)
  } catch (error) {
    return responseService.json(`Error al registrar la pelicula.`)
  }
  
  return responseService.json(`La pelicula. ${body.title} fue registrada.`)
};

module.exports.listFilms = async (event) => {
  const offers = await filmService.list()
  return responseService.json(`Lista de peliculas.`, offers)
};

module.exports.findSpecieById = async (event) => {
  const specie = await specieService.findById(event.pathParameters.id)

  if (specie == 404) {
    return responseService.json('Ocurrio un error al realizar la busqueda', {}, 404)
  }

  return responseService.json('Informacion de la peliculas', specie)
};
'use strict';
const responseService = require('./provider/response-service-provider');
const { offerService } = require('./src/services/OfferService')
const { filmService } = require('./src/services/FilmService')

module.exports.films = async (event) => {
  const film = await filmService.findById(event.pathParameters.id)

  if (film == 404) {
    return responseService.json('Ocurrio un error al realizar la busqueda', {}, 404)
  }

  return responseService.json('Informacion de la peliculas', film)
};

module.exports.registerOffer = async (event) => {
  
  const body = JSON.parse(event.body)
  const data = {
    'codigo_usuario': body.user_id,
    'nombre': body.name,
    'precio_base': body.base_amount,
    'precio_venta': body.sales_expectation,
    'fecha_inicio': body.start_date,
    'fecha_fin': body.end_date
  }

  try {
    await offerService.register(data)
  } catch (error) {
    console.error('Error al insertar usuario:', error);
  }
  
  return responseService.json(`La oferta. ${body.name} fue registrada.`)
};

module.exports.offers = async (event) => {
  const offers = await offerService.list()
  return responseService.json(`Lista de ofertas.`, offers)
};

module.exports.findById = async (event) => {
  const offer = await offerService.findById(event.pathParameters.id)
  return responseService.json(`Informacion de la oferta.`, offer)
};
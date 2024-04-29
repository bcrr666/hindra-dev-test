'use strict';
const responseService = require('./provider/response-service-provider');
const { offerService } = require('./src/services/OfferService')
const { filmService } = require('./src/services/FilmService')

module.exports.films = async (event) => {
  const film = await filmService.findById(event.pathParameters.id)
  return responseService.json('Informacion de la peliculas', film)
};

module.exports.registerOffer = async (event) => {
  
  const body = JSON.parse(event.body)
  const data = {
    'user_id': body.user_id,
    'name': body.name,
    'base_amount': body.base_amount,
    'sales_expectation': body.sales_expectation,
    'start_date': body.start_date,
    'end_date': body.end_date
  }

  try {
    const offer = await offerService.register(data)
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
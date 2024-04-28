'use strict';
const axios = require('axios');
const connection = require('./database/connection');
const responseService = require('./provider/response-service-provider');

module.exports.films = async (event) => {

  const response = await axios.get(`https://swapi.py4e.com/api/films`);

  return responseService.json('Lista de peliculas', response.data)
};

module.exports.registerOffer = async (event) => {
  const body = JSON.parse(event.body)

  let query = "INSERT INTO offers (user_id, name, base_amount, sales_expectation, start_date, end_date)VALUES(?, ?, ?, ?, ?, ?)";
  let data =  [
    body.user_id,
    body.name,
    body.base_amount,
    body.sales_expectation,
    body.start_date,
    body.end_date
  ]

  await connection.query(query, data);

  return responseService.json(`La oferta. ${body.name} fue registrada.`)
};

module.exports.offers = async (event) => {

  let query = "select * from offers";

  let [results]  = await connection.query(query);

  return responseService.json(`Lista de ofertas.`, results)
};

module.exports.offerById = async (event) => {

  let query = "select * from offers where id = ?";
  let data = [event.pathParameters.id]

  let [results]  = await connection.query(query, data);
  return responseService.json(`Lista de ofertas.`, results[0])
};
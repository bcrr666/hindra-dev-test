const { Offer } = require('../models/Offer');

class OfferService {

  async register(data) {

    try {

      const offer = await Offer.create(data);
      return offer;

    } catch (error) {

      console.error('Ocurrió un error:', error.message);

    }
  }

  async list() {

    const offers = await Offer.findAll();
    return offers;

  }

  async findById(id) {

    const offer = await Offer.findOne({where: {id: id}});
    return offer;

  }
}

module.exports = { offerService: new OfferService(),  OfferService }

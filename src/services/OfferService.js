const { Offer } = require('../models/Offer');

class OfferService {

  async register(data) {
    const offer = await Offer.create(data);
    return offer;
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

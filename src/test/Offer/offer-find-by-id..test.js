const { describe, test, expect } = require('@jest/globals');
const { offerService } = require('../../services/OfferService.js');

describe('Find offer by id', () => {

  test('should get offer by valid id', async () => {

    const offerId = 1;
    const offer = await offerService.findById(offerId);

    expect(offer).not.toBeNull();
    expect(offer.dataValues.codigo).toBe(offerId);

  });

  test('should not get offer by invalid id', async () => {

    const invalidId = 'hola';
    const offer = await offerService.findById(invalidId);

    expect(offer).toBeNull();
    
  });
});

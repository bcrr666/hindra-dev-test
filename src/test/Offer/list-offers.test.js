const { describe, test, expect } = require('@jest/globals');
const { offerService } = require('../../services/OfferService.js');

describe('List offers', () => {

  test('should get list of offers', async () => {

    const result = await offerService.list();

    expect(result).toBeDefined();

  });
});

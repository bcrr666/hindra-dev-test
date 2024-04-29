const { describe, test, expect, jest: _jest } = require('@jest/globals')
const { offerService } = require('../../services/OfferService.js')
const { mockList } = require('../mocks/list-offers.mock.js')

describe('List offers', () => {

  test('when get list offers', async () => {
    const result = await offerService.list();

    expect(result)
  })
})
const { describe, test, expect, jest: _jest } = require('@jest/globals')
const { offerService } = require('../../services/OfferService.js')

describe('Find offer by id', () => {

  test('when get offer', async () => {

    const offer = await offerService.findById(1);
    expect(offer)

    })

  test('when do not get offer', async () => {

    const offer = await offerService.findById('hola');
    expect(offer).toBe(null)

    })

})
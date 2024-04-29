const { describe, test, expect, jest: _jest } = require('@jest/globals')
const { offerService } = require('../../services/OfferService.js')

describe('Find offer by id', () => {

  test('when register offer', async () => {

    const data = {
      'user_id': 1,
      'name': "Funko goku",
      'base_amount': "10.00",
      'sales_expectation': "70.00",
      'start_date': "2024-04-30 12:00:00",
      'end_date': "2024-05-30 12:00:00"
    }

    const offer = await offerService.register(data);
    expect(offer)

    })
})
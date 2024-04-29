const { describe, test, expect, jest: _jest } = require('@jest/globals')
const { offerService } = require('../../services/OfferService.js')

describe('Find offer by id', () => {

  test('when register offer', async () => {

    const data = {
      'codigo_usuario': 1,
      'nombre': "Funko goku",
      'precio_base': "10.00",
      'precio_venta': "70.00",
      'fecha_inicio': "2024-04-30 12:00:00",
      'fecha_fin': "2024-05-30 12:00:00"
    }

    const offer = await offerService.register(data);
    expect(offer)

    })
})
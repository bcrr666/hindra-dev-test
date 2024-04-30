const { describe, test, expect } = require('@jest/globals'); 
const { offerService } = require('../../services/OfferService.js');

describe('Registering an offer', () => {

  test('should register an offer', async () => {

    const data = {
      'codigo_usuario': 1,
      'nombre': "Funko goku",
      'precio_base': "10.00",
      'precio_venta': "70.00",
      'fecha_inicio': "2024-04-30 12:00:00",
      'fecha_fin': "2024-05-30 12:00:00"
    }

    const offer = await offerService.register(data);
   
    expect(offer).toBeDefined(); 
    expect(offer).toHaveProperty('codigo_usuario', 1);
    expect(offer).toHaveProperty('nombre', 'Funko goku');
    expect(offer).toHaveProperty('precio_base', '10.00');
    expect(offer).toHaveProperty('precio_venta', '70.00');
    expect(offer).toHaveProperty('fecha_inicio');
    expect(offer).toHaveProperty('fecha_fin');

  });

});
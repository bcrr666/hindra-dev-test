const { describe, test, expect } = require('@jest/globals');
const { specieService } = require('../../services/SpecieService.js');

describe('Find film by id', () => {

  test('should get film by valid id', async () => {

    const filmId = 1;
    const film = await specieService.findById(filmId);
    expect(film).not.toBeNull();

  });

  test('should not get film by invalid id', async () => {

    const invalidId = 'hola';
    const film = await specieService.findById(invalidId);

    expect(film).toBe(404);
    
  });
});

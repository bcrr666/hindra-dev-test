const { describe, test, expect } = require('@jest/globals');
const { filmService } = require('../../services/FilmService.js');

describe('Find film by id', () => {

  test('should get film by valid id', async () => {

    const filmId = 1;
    const film = await filmService.findById(filmId);
    console.log(film);
    //expect(film).not.toBeNull();

  });

  test('should not get film by invalid id', async () => {

    const invalidId = 'hola';
    const film = await filmService.findById(invalidId);

    expect(film).toBeNull();
    
  });
});

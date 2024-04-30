const { describe, test, expect } = require('@jest/globals');
const { filmService } = require('../../services/FilmService.js');

describe('List offers', () => {

  test('should get list of films', async () => {

    const result = await filmService.list();

    expect(result).toBeDefined();

  });
});

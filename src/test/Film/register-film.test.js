const { describe, test, expect } = require('@jest/globals'); 
const { filmService } = require('../../services/FilmService.js');

describe('Registering an film', () => {

  test('should register an film', async () => {

    const data = {
      "titulo": "Punku",
      "codigo_episodio": 55,
      "sinopsis": "Punku es un inca que pasa por muchas aventuras junto a sus amigos con mucha valentía.",
      "director": "Son Goku",
      "productor": "Krilin",
      "fecha_lanzamiento": "1977-05-25",
      "personajes": [
          "https://swapi.py4e.com/api/people/1/",
          "https://swapi.py4e.com/api/people/2/",
          "https://swapi.py4e.com/api/people/3/",
          "https://swapi.py4e.com/api/people/4/",
          "https://swapi.py4e.com/api/people/5/",
          "https://swapi.py4e.com/api/people/6/"
      ],
      "planetas": [
          "https://swapi.py4e.com/api/planets/1/",
          "https://swapi.py4e.com/api/planets/2/",
          "https://swapi.py4e.com/api/planets/3/"
      ],
      "naves_estelares": [
          "https://swapi.py4e.com/api/starships/2/",
          "https://swapi.py4e.com/api/starships/3/",
          "https://swapi.py4e.com/api/starships/5/"
      ],
      "vehiculos": [
          "https://swapi.py4e.com/api/vehicles/4/",
          "https://swapi.py4e.com/api/vehicles/6/",
          "https://swapi.py4e.com/api/vehicles/7/",
          "https://swapi.py4e.com/api/vehicles/8/"
      ],
      "especies": [
          "https://swapi.py4e.com/api/species/3/",
          "https://swapi.py4e.com/api/species/4/",
          "https://swapi.py4e.com/api/species/5/"
      ],
      "enlace": "https://swapi.py4e.com/api/films/1/"
    }

    const film = await filmService.register(data);

    expect(film).toBeDefined(); 
    expect(film).toHaveProperty('titulo', 'Punku');
    expect(film).toHaveProperty('codigo_episodio', 55);
    expect(film).toHaveProperty('sinopsis', 'Punku es un inca que pasa por muchas aventuras junto a sus amigos con mucha valentía.');
    expect(film).toHaveProperty('director', 'Son Goku');
    expect(film).toHaveProperty('productor', 'Krilin');
    expect(film).toHaveProperty('fecha_lanzamiento', '1977-05-25');
    expect(film).toHaveProperty('personajes', [
        "https://swapi.py4e.com/api/people/1/",
        "https://swapi.py4e.com/api/people/2/",
        "https://swapi.py4e.com/api/people/3/",
        "https://swapi.py4e.com/api/people/4/",
        "https://swapi.py4e.com/api/people/5/",
        "https://swapi.py4e.com/api/people/6/"
    ]);
    expect(film).toHaveProperty('planetas', [
        "https://swapi.py4e.com/api/planets/1/",
        "https://swapi.py4e.com/api/planets/2/",
        "https://swapi.py4e.com/api/planets/3/"
    ]);
    expect(film).toHaveProperty('naves_estelares', [
        "https://swapi.py4e.com/api/starships/2/",
        "https://swapi.py4e.com/api/starships/3/",
        "https://swapi.py4e.com/api/starships/5/"
    ]);
    expect(film).toHaveProperty('vehiculos', [
        "https://swapi.py4e.com/api/vehicles/4/",
        "https://swapi.py4e.com/api/vehicles/6/",
        "https://swapi.py4e.com/api/vehicles/7/",
        "https://swapi.py4e.com/api/vehicles/8/"
    ]);
    expect(film).toHaveProperty('especies', [
        "https://swapi.py4e.com/api/species/3/",
        "https://swapi.py4e.com/api/species/4/",
        "https://swapi.py4e.com/api/species/5/"
    ]);
    expect(film).toHaveProperty('enlace', 'https://swapi.py4e.com/api/films/1/');


  });

});
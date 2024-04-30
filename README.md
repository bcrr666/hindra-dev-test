# Prueba tecnica

Mediante el uso de serverless podremos realizar el consumo de servicios y hacer uso de recursos  solo en el momento que sea necesario.

## Requerimientos
- Node v20.10.0 o superior
- MSQL 5.7.x o superior

El proyecto esta construido con Serverless en su version 0.5.26 (https://www.serverless.com/framework/docs) que nos ofrece las caracteristicas que necesitamos para trabajar con serverless de una manera practica y sencilla.

#### Instalar dependencias
`npm install`

#### Ejecutar pruebas
`npm run test`

#### Emular servidor local
`serverless offline`

#### Realizar despliegue
`serverless deploy`


## Documentacion - Peliculas

### Busqueda de peliculas
La busqueda consta de 1 campo necesario:

* id

#### Endpoint
`Type: GET`
`/dev/films/{id}`


#### Respuesta
`200 Success`
```js
{
    "message": "Informacion de la peliculas",
    "data": {
        "codigo": 2,
        "titulo": "punku",
        "codigo_episodio": 55,
        "sinopsis": "Punku es un inca que pasa por mill aventuras junto asus amigos con mucha valentia.",
        "director": "Son Goku",
        "productor": "Krilin",
        "fecha_lanzamiento": "1977-05-25",
        "personajes": [
            "https://swapi.py4e.com/api/people/1/",
            "https://swapi.py4e.com/api/people/6/"
        ],
        "planetas": [
            "https://swapi.py4e.com/api/planets/1/",
            "https://swapi.py4e.com/api/planets/3/"
        ],
        "naves_estelares": [
            "https://swapi.py4e.com/api/starships/2/",
            "https://swapi.py4e.com/api/starships/5/"
        ],
        "vehiculos": [
            "https://swapi.py4e.com/api/vehicles/7/",
            "https://swapi.py4e.com/api/vehicles/8/"
        ],
        "especies": [
            "https://swapi.py4e.com/api/species/4/",
            "https://swapi.py4e.com/api/species/5/"
        ],
        "creado_en": "2024-04-30T20:32:59.000Z",
        "editado_en": "2024-04-30T20:32:59.000Z",
        "enlace": "https://swapi.py4e.com/api/films/1/",
        "createdAt": "2024-04-30T20:32:59.000Z",
        "updatedAt": "2024-04-30T20:32:59.000Z"
    }
}
```

`404 Not Found`
```js
{
    "message": "Pelicula no encontrada",
    "data": {}
}
```

### Listar Peliculas

#### Endpoint
`Type: GET`
`/dev/films`


#### Respuesta
`200 Success`
```js
{
    "message": "Lista de peliculas.",
    "data": [
        {
            "codigo": 2,
            "titulo": "punku",
            "codigo_episodio": 55,
            "sinopsis": "Punku es un inca que pasa por mill aventuras junto asus amigos con mucha valentia.",
            "director": "Son Goku",
            "productor": "Krilin",
            "fecha_lanzamiento": "1977-05-25",
            "personajes": [
                "https://swapi.py4e.com/api/people/1/",
                "https://swapi.py4e.com/api/people/5/",
                "https://swapi.py4e.com/api/people/6/"
            ],
            "planetas": [
                "https://swapi.py4e.com/api/planets/1/",
                "https://swapi.py4e.com/api/planets/3/"
            ],
            "naves_estelares": [
                "https://swapi.py4e.com/api/starships/2/",
                "https://swapi.py4e.com/api/starships/5/"
            ],
            "vehiculos": [
                "https://swapi.py4e.com/api/vehicles/4/",
                "https://swapi.py4e.com/api/vehicles/6/",
            ],
            "especies": [
                "https://swapi.py4e.com/api/species/3/",
                "https://swapi.py4e.com/api/species/5/"
            ],
            "creado_en": "2024-04-30T20:32:59.000Z",
            "editado_en": "2024-04-30T20:32:59.000Z",
            "enlace": "https://swapi.py4e.com/api/films/1/",
            "createdAt": "2024-04-30T20:32:59.000Z",
            "updatedAt": "2024-04-30T20:32:59.000Z"
        },
        {
            "codigo": 3,
            "titulo": "Dragon Ball",
            "codigo_episodio": 55,
            "sinopsis": "Disfruta con Goku sus sorprendentes aventuras junt oa sus amigos.",
            "director": "Son Goku",
            "productor": "Krilin",
            "fecha_lanzamiento": "1990-05-25",
            "personajes": [
                "https://swapi.py4e.com/api/people/1/"
            ],
            "planetas": [
                "https://swapi.py4e.com/api/planets/1/",
                "https://swapi.py4e.com/api/planets/3/"
            ],
            "naves_estelares": [
                "https://swapi.py4e.com/api/starships/2/",
                "https://swapi.py4e.com/api/starships/5/"
            ],
            "vehiculos": [
                "https://swapi.py4e.com/api/vehicles/8/"
            ],
            "especies": [
                "https://swapi.py4e.com/api/species/5/"
            ],
            "creado_en": "2024-04-30T20:33:34.000Z",
            "editado_en": "2024-04-30T20:33:34.000Z",
            "enlace": "https://swapi.py4e.com/api/films/1/",
            "createdAt": "2024-04-30T20:33:34.000Z",
            "updatedAt": "2024-04-30T20:33:34.000Z"
        }
    ]
}
```

### Registrar pelicula

#### Endpoint
`Type: POST`
`/message/search-messages`
#### Body
```js
{
    "title": "punku",
    "episode_id": 55,
    "opening_crawl": "Punku es un inca que pasa por mill aventuras junto asus amigos con mucha valentia.",
    "director": "Son Goku",
    "producer": "Krilin",
    "release_date": "1977-05-25",
    "characters": [
        "https://swapi.py4e.com/api/people/1/",
        "https://swapi.py4e.com/api/people/2/",
        "https://swapi.py4e.com/api/people/3/",
        "https://swapi.py4e.com/api/people/4/",
        "https://swapi.py4e.com/api/people/5/",
        "https://swapi.py4e.com/api/people/6/"
    ],
    "planets": [
        "https://swapi.py4e.com/api/planets/1/",
        "https://swapi.py4e.com/api/planets/2/",
        "https://swapi.py4e.com/api/planets/3/"
    ],
    "starships": [
        "https://swapi.py4e.com/api/starships/2/",
        "https://swapi.py4e.com/api/starships/3/",
        "https://swapi.py4e.com/api/starships/5/"
    ],
    "vehicles": [
        "https://swapi.py4e.com/api/vehicles/4/",
        "https://swapi.py4e.com/api/vehicles/6/",
        "https://swapi.py4e.com/api/vehicles/7/",
        "https://swapi.py4e.com/api/vehicles/8/"
    ],
    "species": [
        "https://swapi.py4e.com/api/species/3/",
        "https://swapi.py4e.com/api/species/4/",
        "https://swapi.py4e.com/api/species/5/"
    ],
    "url": "https://swapi.py4e.com/api/films/1/"
}
```

#### Respuesta
`200 Success`
```js
{
    "message": "La oferta. punku fue registrada.",
    "data": {}
}
```

## Documentacion - Especies

### Busqueda de especies
La busqueda consta de 1 campo necesario:

* id

#### Endpoint
`Type: GET`
`/dev/species/{id}`


#### Respuesta
`200 Success`
```js
{
    "message": "Informacion de la especie",
    "data": {
        "altura_promedio": "n/a",
        "promedio_vida": "indefinite",
        "clasificacion": "artificial",
        "creado_en": "2014-12-10T15:16:16.259000Z",
        "designación": "sentient",
        "editado_en": "2014-12-20T21:36:42.139000Z",
        "color_ojos": "n/a",
        "color_pelo": "n/a",
        "mundo_natal": null,
        "idioma": "n/a",
        "gente": [
            "https://swapi.py4e.com/api/people/2/",
            "https://swapi.py4e.com/api/people/3/",
            "https://swapi.py4e.com/api/people/8/",
            "https://swapi.py4e.com/api/people/23/",
            "https://swapi.py4e.com/api/people/87/"
        ],
        "peliculas": [
            "https://swapi.py4e.com/api/films/1/",
            "https://swapi.py4e.com/api/films/2/",
            "https://swapi.py4e.com/api/films/3/",
            "https://swapi.py4e.com/api/films/4/",
            "https://swapi.py4e.com/api/films/5/",
            "https://swapi.py4e.com/api/films/6/",
            "https://swapi.py4e.com/api/films/7/"
        ],
        "color_piel": "n/a",
        "enlace": "https://swapi.py4e.com/api/species/2/"
    }
}
```

`404 Not Found`
```js
{
    "message": "Especie no encontrada",
    "data": {}
}
```
# Prueba tecnica

Mediante el uso de serverless podremos realizar el consumo de servicios y hacer uso de recursos  solo en el momento que sea necesario.

### Requerimientos
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


## Documentacion

### Busqueda de peliculas
La busqueda por id consta de 1 campo necesario:

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
        "title": "A New Hope",
        "episode_id": 4,
        "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        "director": "George Lucas",
        "producer": "Gary Kurtz, Rick McCallum",
        "release_date": "1977-05-25",
        "characters": [
            "https://swapi.py4e.com/api/people/1/",
            "https://swapi.py4e.com/api/people/2/"
        ],
        "planets": [
            "https://swapi.py4e.com/api/planets/1/",
            "https://swapi.py4e.com/api/planets/2/"
        ],
        "starships": [
            "https://swapi.py4e.com/api/starships/2/",
            "https://swapi.py4e.com/api/starships/13/"
        ],
        "vehicles": [
            "https://swapi.py4e.com/api/vehicles/7/",
            "https://swapi.py4e.com/api/vehicles/8/"
        ],
        "species": [
            "https://swapi.py4e.com/api/species/1/",
            "https://swapi.py4e.com/api/species/2/"
        ],
        "created": "2014-12-10T14:23:31.880000Z",
        "edited": "2014-12-20T19:49:45.256000Z",
        "url": "https://swapi.py4e.com/api/films/1/"
    }
}
```

### Listar ofertas

#### Endpoint
`Type: GET`
`/dev/offers`


#### Respuesta
`200 Success`
```js
{
    "message": "Lista de ofertas.",
    "data": [
        {
            "codigo": 1,
            "codigo_usuario": 66,
            "nombre": "Funko Goku",
            "precio_base": "10.00",
            "precio_venta": "55.00",
            "fecha_inicio": "2024-04-30T12:00:00.000Z",
            "fecha_fin": "2024-05-30T12:00:00.000Z",
            "createdAt": null,
            "updatedAt": null
        },
        {
            "codigo": 2,
            "codigo_usuario": 66,
            "nombre": "Funko Krilin",
            "precio_base": "10.00",
            "precio_venta": "55.00",
            "fecha_inicio": "2024-04-30T12:00:00.000Z",
            "fecha_fin": "2024-05-30T12:00:00.000Z",
            "createdAt": null,
            "updatedAt": null
        }      
    ]
}
```

### Busqueda por oferta
La busqueda por id consta de 1 campo necesario:

* id

#### Endpoint
`Type: GET`
`/dev/offers/{id}`

#### Respuesta
`200 Success`
```js
{
    "message": "Informacion de la oferta.",
    "data": {
        "codigo": 2,
        "codigo_usuario": 66,
        "nombre": "Funko Goku",
        "precio_base": "10.00",
        "precio_venta": "55.00",
        "fecha_inicio": "2024-04-30T12:00:00.000Z",
        "fecha_fin": "2024-05-30T12:00:00.000Z",
        "createdAt": null,
        "updatedAt": null
    }
}
```

### Registrar oferta

#### Endpoint
`Type: POST`
`/message/search-messages`
#### Body
```js
{
    "user_id": 66,
    "name": "Funko Goku",
    "base_amount": 10,
    "sales_expectation": 55,
    "start_date": "2024-04-30 12:00:00", 
    "end_date": "2024-05-30 12:00:00"
}
```

#### Respuesta
`200 Success`
```js
{
    "message": "La oferta. Funko Goku fue registrada.",
    "data": {}
}
```

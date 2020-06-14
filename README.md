# 🚀 SWApi Deno

A RESTful API containing Star Wars data!

## 🏆 Acknowledgements

Thanks to [@phalt](https://github.com/phalt) for his work on the original [Swapi](https://github.com/phalt/swapi) and to [@juriy](https://github.com/Juriy) for his work on the current [Swapi.dev](https://swapi.dev).

## 💻 Endpoints

Currently we support the following endpoints.

### 🎥 Films / Movies

+ All (`GET api/films`)
+ Single (`GET api/films/{id}`)

### 🧬 Species

+ All (`GET api/species/`)
+ Single (`GET api/species/{id}`)

### 🚗 Vehicles

+ All (`GET api/vehicles/`)
+ Single (`GET api/vehicles/{id}`)

### 🚀 Starships

+ All (`GET api/starships/`)
+ Single (`GET api/starships/{id}`)

### 🌍 Planets

+ All (`GET api/planets/`)
+ Single (`GET api/planets/{id}`)

### 🤼 People

+ All (`GET api/people/`)
+ Single (`GET api/people/{id}`)

## ⏯ Running

To run the api (as of the latest version) run `deno run --unstable --allow-read --allow-net .\app.ts`.

## 📝 Roadmap

+ [X] Films endpoints
+ [X] People endpoints
+ [X] Planets endpoints
+ [X] Species endpoints
+ [X] Vehicles endpoints
+ [X] Starships endpoints
+ [ ] Route One data
+ [ ] Solo data
+ [ ] Episode VII data
+ [ ] Episode VIII data
+ [ ] Episode IX data
+ [ ] Open API schema generation
+ [ ] Improve data types
+ [ ] Docker Image

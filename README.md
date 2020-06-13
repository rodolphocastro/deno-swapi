# 🚀 SWApi Deno

A RESTful API containing Star Wars data!

## 🏆 Acknowledgements

Thanks to [@phalt](https://github.com/phalt) for his work on the original [Swapi](https://github.com/phalt/swapi) and to [@juriy](https://github.com/Juriy) for his work on the current [Swapi.dev](https://swapi.dev).

## 💻 Endpoints

Currently we support the following endpoints.

### 🎥 Films / Movies

+ All (`GET /films`)
+ Single (`GET /films/{id}`)

### 🧬 Species

+ All (`GET /species/`)
+ Single (`GET /species/{id}`)

### 🚗 Vehicles

+ All (`GET /vehicles/`)
+ Single (`GET /vehicles/1`)

### 🚀 Starships

+ All (`GET /starships/`)
+ Single (`GET /starships/2`)

## ⏯ Running

To run the api (as of the latest version) run `deno run --unstable --allow-read --allow-net .\app.ts`.

## 📝 Roadmap

+ [X] Films endpoints
+ [ ] People endpoints
+ [ ] Planets endpoints
+ [X] Species endpoints
+ [X] Vehicles endpoints
+ [X] Starships endpoints
+ [ ] Episode VII data
+ [ ] Episode VIII data
+ [ ] Episode IX data
+ [ ] Open API schema generation
+ [ ] Improve data types
+ [ ] Docker Image

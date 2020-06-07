# 🚀 SWApi Deno

A RESTful API containing Star Wars data!

## 🏆 Acknowledgements

Thanks to [@phalt](https://github.com/phalt) for his work on the original [Swapi](https://github.com/phalt/swapi) and to [@juriy](https://github.com/Juriy) for his work on the current [Swapi.dev](https://swapi.dev).

## 💻 Endpoints

Currently we support the following endpoints.

### 🎥 Films / Movies

+ All (`GET /films`)
+ Single (`GET /films/{id}`)

## ⏯ Running

To run the api (as of the latest version) run `deno run --unstable --allow-read --allow-net .\app.ts`.

## 📝 Roadmap

+ [X] Films endpoints
+ [ ] People endpoints
+ [ ] Planets
+ [ ] Species
+ [ ] Vehicles
+ [ ] Starships
+ [ ] Episode VII
+ [ ] Episode VIII
+ [ ] Episode IX
+ [ ] Open API schema generation

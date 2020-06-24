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

## 🌌 Portal

Currently we have a portal that presents some information about the API.

This portal is powered by [Svelte](https://github.com/sveltejs/svelte) and its code can be found on the `/portal` subdirectory!

## ⏯ Running

### Requirements

You'll need two things to run this project:

+ Deno (v1.0.0 or greater)
+ NodeJS (v13.7.0 or greated)

### Backend

To run the api (as of the latest version) run `deno run --unstable --allow-read --allow-net .\app.ts`.

This will:

1. Spin up a rest API listening to port `:8000`
2. Serve files from the `portal/public` folder on the `/` route

### Frontend

_From within the `portal` folder_

To build the frontend run `npm run build`. This will serve the required files to the `public` folder.

To run a developer version, with Hot Reload, run `npm run dev`. This will constantly serve files (as you modify components) on the `public` folder.

> Personal note: I'm usually using two terminals to run and debug this application. On one terminal I launch deno (the API itself) and on the other one I launch Svelte's Dev Server. Then I launch Firefox Developer edition and navigate to http://localhost:8000 and test it out.

## 📝 Roadmap

+ [X] Films endpoints
+ [X] People endpoints
+ [X] Planets endpoints
+ [X] Species endpoints
+ [X] Vehicles endpoints
+ [X] Starships endpoints
+ [X] Proper CORS configuration
+ [ ] Rogue One data
+ [ ] Solo data
+ [ ] Episode VII data
+ [ ] Episode VIII data
+ [ ] Episode IX data
+ [ ] Open API schema generation
+ [ ] Improve data types
+ [X] Docker Image
+ [X] SPA to display the data

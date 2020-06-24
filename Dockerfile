FROM hayd/alpine-deno:1.1.1 as base-deno
EXPOSE 8000
WORKDIR /app
COPY ["data/", "./data/"]

FROM node:lts-alpine3.9 as build-portal
WORKDIR /portal
COPY ["portal/package*.json", "./"]
RUN npm install
COPY ["portal/", "./"]
RUN npm run build

FROM hayd/alpine-deno:1.1.1 as build-deno
WORKDIR /src
COPY ["models/", "./models"]
COPY ["*.ts", "./"]
RUN ["deno", "bundle", "--unstable", "./app.ts", "swapi.bundle.js"]

FROM base-deno as final
USER deno
COPY --from=build-deno "src/swapi.bundle.js" "./"
COPY --from=build-portal "portal/public/" "./portal/public/"

CMD [ "run", "--allow-net", "--allow-read", "--unstable", "./swapi.bundle.js" ]

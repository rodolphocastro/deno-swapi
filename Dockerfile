FROM hayd/alpine-deno:1.1.1 as base-deno
WORKDIR /src
COPY ["*.ts", "./"]
COPY ["./models/*.ts", "./models/"]
RUN ["deno", "cache", "--unstable", "./app.ts"]
RUN ["deno", "bundle", "--unstable", "./app.ts", "swapi.bundle.js"]

FROM base-deno as base-npm
USER root
RUN apk add --update npm

FROM base-npm as final
EXPOSE 8000
WORKDIR /app
COPY --from=base-npm ["/src/swapi.bundle.js", "."]
COPY ["./data/", "./data/"]
COPY ["./portal/", "./portal/"]
CMD [ "run", "--allow-net", "--allow-read", "--allow-run", "--unstable", "./swapi.bundle.js" ]

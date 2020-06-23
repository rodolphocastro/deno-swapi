import { info } from "https://deno.land/std@v0.55.0/log/mod.ts";
import {
  Application,
  Router,
  Status,
  send,
  Middleware,
} from "https://deno.land/x/oak@v5.0.0/mod.ts";
import {
  createFilmStateAsync,
  createSpecieStateAsync,
  createVehicleStateAsync,
  createStarshipStateAsync,
  createPlanetsStateAsync,
  createPeopleStateAsync,
} from "./file_utils.ts";

info("Loading data from files");

const filmsState = await createFilmStateAsync();
const speciesState = await createSpecieStateAsync();
const vehiclesState = await createVehicleStateAsync();
const starshipState = await createStarshipStateAsync();
const planetsState = await createPlanetsStateAsync();
const peopleState = await createPeopleStateAsync();

info("Creating the Application");

const app = new Application();

const servePortal: Middleware = async ctx => {
  await send(ctx, ctx.request.url.pathname, {
    root: Deno.cwd()+'/portal/public',
    index: 'index.html'
  })
};

const filmsRouter = new Router({ prefix: "/api/films" });
filmsRouter
  .get("/", ({ response }) => {
    response.body = filmsState.list();
    response.status = Status.OK;
  })
  .get("/:id", ({ response, params }) => {
    const { id } = params;
    const result = filmsState.list().filter((f) =>
      f.url === parseInt(id as string)
    )[0];
    if (result) {
      response.status = Status.OK;
      response.body = result;
      return;
    }

    response.status = Status.NotFound;
  });

const speciesRouter = new Router({ prefix: "/api/species" });
speciesRouter
  .get("/", ({ response }) => {
    response.body = speciesState.list();
    response.status = Status.OK;
  })
  .get("/:id", ({ response, params }) => {
    const { id } = params;
    const result = speciesState.list().filter((f) =>
      f.url === parseInt(id as string)
    )[0];
    if (result) {
      response.status = Status.OK;
      response.body = result;
      return;
    }

    response.status = Status.NotFound;
  });

const vehiclesRouter = new Router({ prefix: "/api/vehicles" });
vehiclesRouter
  .get("/", ({ response }) => {
    response.body = vehiclesState.list();
    response.status = Status.OK;
  })
  .get("/:id", ({ response, params }) => {
    const { id } = params;
    const result = vehiclesState.list().filter((f) =>
      f.url === parseInt(id as string)
    )[0];
    if (result) {
      response.status = Status.OK;
      response.body = result;
      return;
    }

    response.status = Status.NotFound;
  });

const starshipRouter = new Router({ prefix: "/api/starships" });
starshipRouter
  .get("/", ({ response }) => {
    response.body = starshipState.list();
    response.status = Status.OK;
  })
  .get("/:id", ({ response, params }) => {
    const { id } = params;
    const result = starshipState.list().filter((s) =>
      s.url === parseInt(id as string)
    )[0];
    if (result) {
      response.status = Status.OK;
      response.body = result;
      return;
    }

    response.status = Status.NotFound;
  });

const planetsRouter = new Router({ prefix: "/api/planets" });
planetsRouter
  .get("/", ({ response }) => {
    response.body = planetsState.list();
    response.status = Status.OK;
  })
  .get("/:id", ({ response, params }) => {
    const { id } = params;
    const result = planetsState.list().filter((p) =>
      p.url === parseInt(id as string)
    )[0];
    if (result) {
      response.status = Status.OK;
      response.body = result;
      return;
    }
  });

const peopleRouter = new Router({ prefix: "/api/people" });
peopleRouter
  .get("/", ({ response }) => {
    response.body = peopleState.list();
    response.status = Status.OK;
  })
  .get("/:id", ({ response, params }) => {
    const { id } = params;
    const result = peopleState.list().filter((p) =>
      p.url === parseInt(id as string)
    )[0];
    if (result) {
      response.status = Status.OK;
      response.body = result;
      return;
    }
  });

app.use(
  ...[
    filmsRouter.routes(),
    speciesRouter.routes(),
    vehiclesRouter.routes(),
    starshipRouter.routes(),
    planetsRouter.routes(),
    peopleRouter.routes(),
  ],
  servePortal
);

info("Listening to port 8000");
await app.listen({ port: 8000 });

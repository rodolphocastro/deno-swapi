import { info } from "https://deno.land/std@v0.55.0/log/mod.ts";
import {
  Application,
  Router,
  Status,
} from "https://deno.land/x/oak@v5.0.0/mod.ts";
import {
  createFilmStateAsync,
  createSpecieStateAsync,
  createVehicleStateAsync,
} from "./file_utils.ts";

info("Loading data from files");

const filmsState = await createFilmStateAsync();
const speciesState = await createSpecieStateAsync();
const vehiclesState = await createVehicleStateAsync();

info("Creating the Application");

const app = new Application();

const filmsRouter = new Router({ prefix: "/films" });
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

const speciesRouter = new Router({ prefix: "/species" });
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

const vehiclesRouter = new Router({ prefix: "/vehicles" });
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

app.use(
  ...[filmsRouter.routes(), speciesRouter.routes(), vehiclesRouter.routes()],
);

info("Listening to port 8000");
await app.listen({ port: 8000 });

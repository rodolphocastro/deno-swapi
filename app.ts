import { info } from "https://deno.land/std@v0.55.0/log/mod.ts";
import {
  Application,
  Router,
  Status,
} from "https://deno.land/x/oak@v5.0.0/mod.ts";
import { createFilmStateAsync } from "./file_utils.ts";

info("Loading data from files");

const filmsState = await createFilmStateAsync();

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

app.use(filmsRouter.routes());

info("Listening to port 8000");
await app.listen({ port: 8000 });

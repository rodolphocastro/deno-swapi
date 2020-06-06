import { info } from "https://deno.land/std@v0.55.0/log/mod.ts";
import { createFilmStateAsync } from "./file_utils.ts";

info("Loading data from files");

const filmState = await createFilmStateAsync();
console.log(filmState.list().map((f) => f.title));

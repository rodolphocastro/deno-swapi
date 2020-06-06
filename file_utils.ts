// As of v0.55.0 this module requires the --unstable flag to be used
import * as fs from "https://deno.land/std@v0.55.0/fs/mod.ts";
import { Film } from "./models/film.ts";
import { IState, ModelState } from "./state.ts";

/**
 * Loads data and deserializes data from a json file.
 * @param dataDir directory containing the file
 * @param filename filename containing the data, serialized
 */
async function loadDataFromFiles<T>(
  dataDir: string,
  filename: string,
): Promise<T[]> {
  await fs.ensureDir(dataDir);
  const result = await fs.readJson(dataDir + "/" + filename) as { data: T[] };
  return result.data;
}

/**
 * Creates and seeds a ModelState for Films.
 * @param dataDir directory holding the json file, defaults to ./data
 * @param filmFile json file containing films, defaults to films.json
 */
export async function createFilmStateAsync(
  dataDir: string = "./data",
  filmFile: string = "films.json",
): Promise<IState<Film>> {
  const films = await loadDataFromFiles<Film>(dataDir, filmFile);
  return new ModelState<Film>(films);
}

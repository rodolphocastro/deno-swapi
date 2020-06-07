// As of v0.55.0 this module requires the --unstable flag to be used
import * as fs from "https://deno.land/std@v0.55.0/fs/mod.ts";
import { Film } from "./models/film.ts";
import { Specie } from "./models/specie.ts";
import { IState, ModelState } from "./state.ts";

/**
 * Describes the expected structure for a .json storage.
 */
interface JsonStorable<T> {
  data?: T[];
}

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
  const result = await fs.readJson(dataDir + "/" + filename) as JsonStorable<T>;
  return result.data ?? [];
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

/**
 * Creates and seeds a ModelState for Species.
 * @param dataDir directory holding the json file, defaults to ./data
 * @param speciesFile json file containing species, defautls to species.json
 */
export async function createSpecieStateAsync(
  dataDir: string = "./data",
  speciesFile: string = "species.json",
): Promise<IState<Specie>> {
  const species = await loadDataFromFiles<Specie>(dataDir, speciesFile);
  return new ModelState<Specie>(species);
}

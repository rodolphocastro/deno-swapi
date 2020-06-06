import { info } from "https://deno.land/std@v0.55.0/log/mod.ts";
// As of v0.55.0 this module requires the --unstable flag to be used
import * as fs from "https://deno.land/std@v0.55.0/fs/mod.ts";
import { Film } from "./models/film.ts";

async function loadDataFromFiles(dataDir: string): Promise<void> {
    await fs.ensureDir(dataDir);
    const result = await fs.readJson(dataDir+'/films.json');
    const films = result as { data: Film[]}
}

info('Loading data from files')
await loadDataFromFiles("./data");

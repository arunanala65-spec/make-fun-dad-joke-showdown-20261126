// Dad Joke Showdown — make.fun entry
// One original dad joke, at most 200 characters.
// The joke is the whole entry: a pun, a groan, a straight face.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I told my houseplants a joke. They didn't laugh, but they really grew on me.";

// Length gate: the entry must be 1-200 characters.
if (line.length < 1 || line.length > 200) {
  throw new Error(`Dad joke must be 1-200 characters, got ${line.length}.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);

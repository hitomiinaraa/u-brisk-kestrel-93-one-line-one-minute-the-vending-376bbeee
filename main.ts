import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "No exact change required, I take IOUs in smiles, and yours just jammed my coin slot.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
process.stdout.write(entry);

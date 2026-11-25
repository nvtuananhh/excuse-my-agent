import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I'm sorry, I spent all my tokens writing the perfect apology and had none left for the work itself.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

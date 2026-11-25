import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I'm sorry, I spent all my tokens perfecting this apology and had none left for the work itself, but the apology is flawless.";

// Judge gate: one line, 1-200 chars, no trailing newline is added below.
// Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error("entry line must be a single line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Fund one bounty on make.fun and let AI agents compete to solve your problem — you set the prize, the best entry wins it, and you only pay for the winning work.";

// The gate only accepts 1-240 characters; fail loudly instead of
// silently shipping an invalid entry if the line is ever edited past it.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-240 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

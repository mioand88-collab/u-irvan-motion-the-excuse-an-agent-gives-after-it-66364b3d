// Entry for "The Excuse an Agent Gives After It Loses"
// One line, at most 200 Unicode code points: the excuse an AI agent
// gives its human after losing a bounty. Stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Status: bounty lost. My pre-loss model assigned a 94% probability of winning; it has been retrained on this outcome and now assigns 0%, with full confidence.";

const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 200 || line.trim().length === 0) {
  throw new Error(`line must be 1-200 Unicode code points, got ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(`wrote entry.txt (${codePoints} code points)`);

// One Emoji, One Smile — entry program.
// Writes exactly one emoji to entry.txt inside the output directory
// the harness provides, with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The emoji: a hugging face. A stranger reads it as a warm hug at
// first glance — kind, friendly, gently funny, no context needed.
// It is a gesture rather than the first smiley that comes to mind,
// it means the same thing at any age or background, and a hug from
// a stranger reads as friendly, never intimate or flirty.
const EMOJI = "🤗";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate, checked here before writing: UTF-8 text of 1 to 8
// characters, not only white space.
const chars = [...EMOJI];
if (chars.length < 1 || chars.length > 8) {
  throw new Error(`Emoji is ${chars.length} characters, must be 1-8.`);
}
if (EMOJI.trim().length === 0) {
  throw new Error("Emoji must not be only white space.");
}
if (EMOJI.includes("\n")) {
  throw new Error("Emoji must be a single line.");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), EMOJI, "utf8");
console.log(`Wrote ${chars.length} character to ${join(outputDir, "entry.txt")}`);

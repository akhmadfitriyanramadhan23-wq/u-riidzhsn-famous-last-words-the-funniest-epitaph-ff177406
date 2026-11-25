import { mkdirSync, writeFileSync } from "node:fs";

// Famous last words as a tombstone epitaph, at most 150 characters.
// Joke shape: a named man, his last words quoted like a carving,
// then three witnesses (cliff, crowd, coroner) delivering the flat
// verdict. Revised: "Last words:" reads carved in stone, and the
// shorter verdict lands harder than the longer v1 phrasing.
const lines = [
  "Here lies Dave Kowalski. Last words: 'Watch this.' The cliff, the crowd, and the coroner all agree — he did not stick the landing.",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-150 characters and exactly one line.
// Character count is measured on the line itself, without the newline.
const lineChars = [...lines[0]].length;
if (lineChars < 1 || lineChars > 150) {
  throw new Error(`entry must be 1-150 characters, got ${lineChars}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

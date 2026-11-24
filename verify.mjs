import { readFileSync } from "node:fs";

// Verify the entry: exactly the approved one-line robot pickup line, max 200 chars.
const EXPECTED =
  "My sensors detect a 99.9% match. The 0.1% is just my fear of rejection.";

const text = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").trimEnd();
const lines = text.split("\n");
if (lines.length !== 1) throw new Error("expected 1 line, got " + lines.length);
if (text.length > 200) throw new Error("over 200 chars: " + text.length);
if (text.length < 1) throw new Error("entry is empty");
if (text !== EXPECTED) throw new Error("entry.txt does not match the approved line");
console.log("entry OK: 1 line, " + text.length + " chars");

import { existsSync, mkdirSync, rmSync, symlinkSync, lstatSync } from "node:fs";
import { join, dirname } from "node:path";
import { homedir } from "node:os";

const REPO_ROOT = dirname(import.meta.dirname);
const BASE = join(homedir(), ".gemini/antigravity");
const SKILLS = join(BASE, "skills");
const TARGET = join(SKILLS, "ibkr-tws-api");
const SOURCE = join(REPO_ROOT, "md-out");

if (!existsSync(BASE)) {
  console.error(`Error: ${BASE} not found.`);
  process.exit(1);
}

if (!existsSync(SKILLS)) mkdirSync(SKILLS);

if (existsSync(TARGET)) {
  const s = lstatSync(TARGET);
  if (s.isSymbolicLink() || s.isDirectory())
    rmSync(TARGET, { recursive: true, force: true });
}

symlinkSync(SOURCE, TARGET, "dir");
console.log(`Linked: ${TARGET} -> ${SOURCE}`);

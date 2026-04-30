import { existsSync, mkdirSync, rmSync, symlinkSync, lstatSync } from "node:fs";
import { join, dirname } from "node:path";
import { homedir } from "node:os";

const REPO_ROOT = dirname(import.meta.dirname);
const AGY_BASE = join(homedir(), ".gemini/antigravity");
const AGY_SKILLS = join(AGY_BASE, "skills");
const TARGET = join(AGY_SKILLS, "ibkr-tws-api");
const SOURCE = join(REPO_ROOT, "skill");

if (!existsSync(AGY_BASE)) {
  console.error(`Error: ${AGY_BASE} not found.`);
  process.exit(1);
}

if (!existsSync(AGY_SKILLS)) mkdirSync(AGY_SKILLS);

if (existsSync(TARGET)) {
  const s = lstatSync(TARGET);
  if (s.isSymbolicLink() || s.isDirectory())
    rmSync(TARGET, { recursive: true, force: true });
}

symlinkSync(SOURCE, TARGET, "dir");
console.log(`Linked: ${TARGET} -> ${SOURCE}`);

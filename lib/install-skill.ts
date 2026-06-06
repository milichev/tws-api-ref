import { existsSync, mkdirSync, rmSync, symlinkSync, lstatSync } from "node:fs";
import { join, dirname } from "node:path";
import { homedir } from "node:os";

const REPO_ROOT = dirname(import.meta.dirname);
const SOURCE = join(REPO_ROOT, "skill");

// Target folders with their base directories
const TARGETS = [
  { base: join(homedir(), ".gemini/antigravity"), name: "antigravity" },
  { base: join(homedir(), ".gemini/antigravity-ide"), name: "antigravity-ide" },
  { base: join(homedir(), ".kiro"), name: "kiro" },
];

// First pass: check if all base directories exist, skip with message if not
const validTargets = TARGETS.filter((target) => {
  if (!existsSync(target.base)) {
    console.log(`Skipping ${target.name}: ${target.base} not found.`);
    return false;
  }
  return true;
});

// Second pass: create skills directories and symlinks
for (const target of validTargets) {
  const skillsDir = join(target.base, "skills");
  const linkPath = join(skillsDir, "ibkr-tws-api");

  if (!existsSync(skillsDir)) {
    mkdirSync(skillsDir, { recursive: true });
  }

  if (existsSync(linkPath)) {
    const s = lstatSync(linkPath);
    if (s.isSymbolicLink() || s.isDirectory()) {
      rmSync(linkPath, { recursive: true, force: true });
    }
  }

  symlinkSync(SOURCE, linkPath, "dir");
  console.log(`Linked: ${linkPath} -> ${SOURCE}`);
}

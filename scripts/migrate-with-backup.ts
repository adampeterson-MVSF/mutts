import { execSync } from "node:child_process";

const DB_URL = process.env.DATABASE_URL;
if (!DB_URL) throw new Error("DATABASE_URL missing");

const ts = new Date().toISOString().replace(/[:.]/g, "-");
const file = `./db-backups/backup-${ts}.sql`;

console.log("→ Dumping database…", file);
execSync(`mkdir -p db-backups && pg_dump --no-owner --no-privileges --file=${file} ${DB_URL}`, { stdio: "inherit" });

console.log("→ Running prisma migrate deploy…");
execSync(`npx prisma migrate deploy`, { stdio: "inherit" });

console.log("→ Verifying schema…");
execSync(`npx prisma db pull --force-reset`, { stdio: "inherit" });

console.log("✅ Done. Backup:", file);

// Copies the web app into www/ so Capacitor can bundle it into the Android app.
// Run automatically by the npm scripts (build:web). Manual: node prepare-www.mjs
import { cpSync, rmSync, mkdirSync, existsSync } from 'fs';

rmSync('www', { recursive: true, force: true });
mkdirSync('www');

const files = ['index.html', 'app.js', 'manifest.webmanifest', 'service-worker.js'];
const dirs  = ['icons', 'itineraries', 'illustrations'];

for (const f of files) if (existsSync(f)) cpSync(f, 'www/' + f);
for (const d of dirs)  if (existsSync(d)) cpSync(d, 'www/' + d, { recursive: true });

console.log('✓ www/ is ready for Capacitor (cap sync / build).');

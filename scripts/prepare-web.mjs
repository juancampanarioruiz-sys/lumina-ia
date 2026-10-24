import { mkdir, copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const root=process.cwd();const out=resolve(root,'www');await mkdir(out,{recursive:true});for(const file of ['index.html','manifest.webmanifest','sw.js','app-icon.svg'])await copyFile(resolve(root,file),resolve(out,file));console.log('Web assets copied to www/.');

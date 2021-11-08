import * as assert from 'node:assert/strict';
import { promises as fs } from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

import { addExportsFields } from './transformer/add_exports_field/main.mjs';
import { loadJSON } from './json.mjs';

const THIS_FILENAME = fileURLToPath(import.meta.url);
const THIS_DIRNAME = path.dirname(THIS_FILENAME);

const BASE_DIR = THIS_DIRNAME;

async function writePackageJSON(baseDir, outputPath, content) {
    assert.strictEqual(outputPath.endsWith('/'), false, 'outputPath should not be end with `/`');
    const outputDir = path.resolve(baseDir, outputPath);
    const p = path.resolve(baseDir, outputPath + '/package.json');

    const INDENT = 4;
    const text = JSON.stringify(content, null, INDENT);

    await fs.mkdir(outputDir, {
        recursive: true,
    });

    await fs.appendFile(p, text, {
        encoding: 'utf8',
    });
}

(async function main() {
    console.log('====== This script generates `exports` field for `package.json` ======');

    const OUTDIR = process.env.OUTDIR;
    assert.strictEqual(typeof OUTDIR, 'string', '$OUTDIR envvar should be string');

    const INPUT_MANIFEST_PATH = process.env.INPUT_MANIFEST_PATH;
    assert.strictEqual(typeof INPUT_MANIFEST_PATH, 'string', '$MANIFEST_PATH envvar should be string');

    const json = await loadJSON(BASE_DIR, INPUT_MANIFEST_PATH);
    assert.notStrictEqual(json, null, 'Fail to parse the file list snapshot');

    const TRANSFORMERS = [
        addExportsFields,
    ];
    for (const transforer of TRANSFORMERS) {
        // eslint-disable-next-line no-await-in-loop
        await transforer(json);
    }

    await writePackageJSON(BASE_DIR, OUTDIR, json);
})().catch((e) => {
    console.error(e);
    process.exit(1);
});

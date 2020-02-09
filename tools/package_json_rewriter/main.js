'use strict';

const assert = require('assert');
const fs = require('fs').promises;
const path = require('path');

const { loadJSON } = require('./json');

const BASE_DIR = __dirname;

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
    const OUTDIR = process.env.OUTDIR;
    assert.strictEqual(typeof OUTDIR, 'string', '$OUTDIR envvar should be string');

    const INPUT_MANIFEST_PATH = process.env.INPUT_MANIFEST_PATH;
    assert.strictEqual(typeof INPUT_MANIFEST_PATH, 'string', '$MANIFEST_PATH envvar should be string');

    const json = await loadJSON(BASE_DIR, INPUT_MANIFEST_PATH);
    assert.notStrictEqual(json, null, 'Fail to parse the file list snapshot');

    const TRANSFORMERS = [];
    for (const transforer of TRANSFORMERS) {
        // eslint-disable-next-line no-await-in-loop
        await transforer(json);
    }

    await writePackageJSON(BASE_DIR, OUTDIR, json);
})().catch((e) => {
    console.error(e);
    process.exit(1);
});

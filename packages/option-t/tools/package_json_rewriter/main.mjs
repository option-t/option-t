import * as assert from 'node:assert/strict';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { parseArgs } from 'node:util';

import { loadJSON } from './json.mjs';
import { addExportsFields } from './transformer/add_exports_field/main.mjs';

const THIS_DIRNAME = import.meta.dirname;

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

    await fs.writeFile(p, text + `\n`, {
        encoding: 'utf8',
    });
}

function parseCliOptions() {
    const CLI_OPTIONS_INPUT_MANIFEST_PATH = 'input-manifest-path';

    const options = {
        [CLI_OPTIONS_INPUT_MANIFEST_PATH]: {
            type: 'string',
        },
        destination: {
            type: 'string',
        },
    };

    const { values } = parseArgs({
        options,
        strict: true,
    });

    const sourceManifestPath = values[CLI_OPTIONS_INPUT_MANIFEST_PATH];
    assert.ok(!!sourceManifestPath, 'no source');

    const destinationDir = values.destination;
    assert.ok(!!destinationDir, 'no destinationDir');

    return {
        sourceManifestPath,
        destinationDir,
    };
}

(async function main() {
    console.log('====== This script generates `exports` field for `package.json` ======');

    const {
        // @prettier-ignore
        sourceManifestPath: INPUT_MANIFEST_PATH,
        destinationDir: OUTDIR,
    } = parseCliOptions();

    const json = await loadJSON(BASE_DIR, INPUT_MANIFEST_PATH);
    assert.notStrictEqual(json, null, 'Fail to parse the file list snapshot');

    const TRANSFORMERS = [addExportsFields];
    for (const transforer of TRANSFORMERS) {
        // eslint-disable-next-line no-await-in-loop
        await transforer(json);
    }

    await writePackageJSON(BASE_DIR, OUTDIR, json);
})().catch((e) => {
    console.error(e);
    process.exit(1);
});

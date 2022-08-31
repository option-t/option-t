import * as assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const THIS_FILENAME = fileURLToPath(import.meta.url);
const THIS_DIRNAME = path.dirname(THIS_FILENAME);

function parseJSON(text) {
    try {
        const o = JSON.parse(text);
        return o;
    }
    catch (_e) {
        return null;
    }
}

async function testAllowToLoadFileAsESM(expectedSet) {
    const hasError = [];
    const susccess = [];
    for await (const filename of expectedSet) {
        try {
            await import(filename);
            expectedSet.delete(filename);
        }
        catch (e) {
            hasError.push(filename);
            console.error(e);
        }
    }

    assert.deepStrictEqual([], susccess, 'Should be success to load all ES Modules');
    assert.deepStrictEqual([], hasError, 'Unexpected files which could not load as ES Module');
}

async function testAllowToLoadFileAsCommonJs(expectedSet) {
    const require = createRequire(THIS_FILENAME);

    const hasError = [];
    const susccess = [];
    for (const filename of expectedSet) {
        try {
            require(filename);
            expectedSet.delete(filename);
        }
        catch (e) {
            hasError.push(filename);
            console.error(e);
        }
    }

    assert.deepStrictEqual([], susccess, 'Should be success to load all CommonJS');
    assert.deepStrictEqual([], hasError, 'Unexpected files which could not load as CommonJS');
}

function parseCliOptions() {
    const options = {
        target: {
            type: 'string',
        },
    };

    const { values } = parseArgs({
        options,
        strict: true,
    });

    const targetDir = values.target;
    assert.ok(!!targetDir, 'no targetDir');

    return {
        targetDir,
    };
}

(async function main() {
    console.log(`====== This script tests whether the mjs' import path is correctly ======`);

    const { targetDir: OUTDIR } = parseCliOptions();

    const json = await fs.readFile(path.resolve(THIS_DIRNAME, './pkg_files.json'), {
        encoding: 'utf8',
        flag: 'r',
    });
    const files = parseJSON(json);
    assert.notStrictEqual(files, null, 'Fail to parse the file list snapshot');

    {
        const mjsInEsmDir = Object.keys(files).filter((filename) => {
            return filename.endsWith('.mjs') && filename.startsWith('esm/');
        });

        const EXPECTED_FILE_SET = new Set(mjsInEsmDir.map((filename) => {
            const fullpath = path.resolve(OUTDIR, filename);
            return fullpath;
        }));
        assert.notStrictEqual(EXPECTED_FILE_SET.size, 0, 'The expected file list must not be empty');

        await testAllowToLoadFileAsESM(EXPECTED_FILE_SET);
    }

    {
        const cjsInCjsDir = Object.keys(files).filter((filename) => {
            return filename.endsWith('.cjs') && filename.startsWith('cjs/');
        });

        const EXPECTED_FILE_SET = new Set(cjsInCjsDir.map((filename) => {
            const fullpath = path.resolve(OUTDIR, filename);
            return fullpath;
        }));
        assert.notStrictEqual(EXPECTED_FILE_SET.size, 0, 'The expected file list must not be empty');

        await testAllowToLoadFileAsCommonJs(EXPECTED_FILE_SET);
    }

})().catch((e) => {
    console.error(e);
    process.exit(1);
});

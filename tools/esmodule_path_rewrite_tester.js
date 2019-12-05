'use strict';

const assert = require('assert');
const fs = require('fs').promises;
const path = require('path');

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

(async function main() {
    // XXX: Node v12 does not support `import()` by default
    if (/^v12\.\d+\.\d+$/u.test(process.version)) {
        return;
    }

    const OUTDIR = process.env.OUTDIR;
    assert.strictEqual(typeof OUTDIR, 'string', '$OUTDIR envvar should be string');

    const json = await fs.readFile(path.resolve(__dirname, './pkg_files.json'), {
        encoding: 'utf8',
        flag: 'r',
    });
    const files = parseJSON(json);
    assert.notStrictEqual(files, null, 'Fail to parse the file list snapshot');

    const mjsInEsmDir = files.filter((filename) => {
        return filename.endsWith('.mjs') && (filename.startsWith('esm/') || filename.startsWith('lib/'));
    });

    const EXPECTED_FILE_SET = new Set(mjsInEsmDir.map((filename) => {
        const fullpath = path.resolve(OUTDIR, filename);
        return fullpath;
    }));
    assert.notStrictEqual(EXPECTED_FILE_SET.size, 0, 'The expected file list must not be empty');

    await testAllowToLoadFileAsESM(EXPECTED_FILE_SET);
})().catch((e) => {
    console.error(e);
    process.exit(1);
});

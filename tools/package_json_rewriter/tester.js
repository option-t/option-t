'use strict';

const assert = require('assert');

const { loadJSON } = require('./json');

const BASE_DIR = __dirname;

function loadCJS(outDir, file) {
    const modulepath = `${outDir}/${file}`;
    // eslint-disable-next-line global-require
    require(modulepath);
}

async function loadESM(outDir, file) {
    // XXX: Node v12 does not support `import()` by default
    if (/^v12\.\d+\.\d+$/u.test(process.version)) {
        return;
    }

    const modulepath = `${outDir}/${file}`;
    await import(modulepath);
}

async function loadJSFileAsModule(outDir, file) {
    if (file.endsWith('.js')) {
        loadCJS(outDir, file);
    }
    else if (file.endsWith('.mjs')) {
        await loadESM(outDir, file);
    }
    else {
        throw Error(`${file} is not unknown module type`);
    }
}

(async function main() {
    const OUTDIR = process.env.OUTDIR;
    assert.strictEqual(typeof OUTDIR, 'string', '$OUTDIR envvar should be string');

    const json = await loadJSON(BASE_DIR, '../pkg_files.json');
    assert.strictEqual(Array.isArray(json), true, '`json` should be Array');

    const cjsFileList = [];
    const esmFileList = [];
    const libFileList = [];
    for (const file of json) {
        if (file.endsWith('.d.ts')) {
            continue;
        }

        if (file.startsWith('cjs/')) {
            cjsFileList.push(file);
        }
        else if (file.startsWith('esm/')) {
            esmFileList.push(file);
        }
        else if (file.startsWith('lib/')) {
            libFileList.push(file);
        }
        else {
            continue;
        }
    }

    for (const file of cjsFileList) {
        loadCJS(OUTDIR, file);
    }

    for (const file of esmFileList) {
        // eslint-disable-next-line no-await-in-loop
        await loadESM(OUTDIR, file);
    }

    for (const file of libFileList) {
        // eslint-disable-next-line no-await-in-loop
        await loadJSFileAsModule(OUTDIR, file);
    }
})().catch((e) => {
    console.error(e);
    process.exit(1);
});

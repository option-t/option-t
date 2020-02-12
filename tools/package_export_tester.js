'use strict';

const assert = require('assert');

const { loadJSON } = require('./package_json_rewriter/json');

const BASE_DIR = __dirname;
const PACKAGE_NAME = 'option-t';

function loadCJS(file) {
    const modulepath = (file === '.') ? PACKAGE_NAME : `${PACKAGE_NAME}/${file}`;
    // eslint-disable-next-line global-require
    require(modulepath);
}

async function loadESM(file) {
    const modulepath = (file === '.') ? PACKAGE_NAME : `${PACKAGE_NAME}/${file}`;
    await import(modulepath);
}

async function loadJSFileAsModule(file) {
    if (file.endsWith('.js')) {
        loadCJS(file);
    }
    else if (file.endsWith('.mjs')) {
        await loadESM(file);
    }
    else {
        throw Error(`${file} is not unknown module type`);
    }
}

(async function main() {
    const json = await loadJSON(BASE_DIR, './pkg_files.json');
    assert.strictEqual(Array.isArray(json), true, '`json` should be Array');

    const cjsFileList = [
        '.',
    ];
    const esmFileList = [
        '.',
    ];
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
        loadCJS(file);
    }

    for (const file of esmFileList) {
        // eslint-disable-next-line no-await-in-loop
        await loadESM(file);
    }

    for (const file of libFileList) {
        // eslint-disable-next-line no-await-in-loop
        await loadJSFileAsModule(file);
    }
})().catch((e) => {
    console.error(e);
    process.exit(1);
});

'use strict';

const assert = require('assert');

const { loadJSON } = require('./package_json_rewriter/json');

const BASE_DIR = __dirname;
const PACKAGE_NAME = 'option-t';

function loadCJS(file) {
    const modulepath = (file === '.') ? PACKAGE_NAME : `${PACKAGE_NAME}/${file}`;
    // eslint-disable-next-line global-require
    const mod = require(modulepath);
    return mod;
}

async function loadESM(file) {
    const modulepath = (file === '.') ? PACKAGE_NAME : `${PACKAGE_NAME}/${file}`;
    const mod = await import(modulepath);
    return mod;
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

async function testSpecialCaseLoadIndexJS(installedPackageJSON) {
    const DIR_SUBPATH = [
        'Maybe',
        'Nullable',
        'PlainOption',
        'PlainResult',
        'Undefinable',
    ];
    const NODE_MODULE_RESOLUTION_SPECIAL_CASE_CJS = [
        ...DIR_SUBPATH.map((path) => `cjs/${path}`),
        ...DIR_SUBPATH.map((path) => `lib/${path}`),
    ];

    // `require()` can load `./index.js` with a parent directry name.
    // This behavior is not supported by Node.js' ESM implementation.
    // But it might be supported by webpack or other bundlers. It's sad for package developer.

    for (const file of NODE_MODULE_RESOLUTION_SPECIAL_CASE_CJS) {
        loadCJS(file);
    }

    const NODE_MODULE_RESOLUTION_SPECIAL_CASE_ESM = DIR_SUBPATH.map((path) => `./esm/${path}`);
    for (const name of NODE_MODULE_RESOLUTION_SPECIAL_CASE_ESM) {
        const filename = `${name}/index.mjs`;
        testPackageJSONHasExportsEntry(installedPackageJSON, name, filename);
    }
}

function testPackageJSONHasExportsEntry(pkgObj, entryName, entryFileName) {
    const exports = pkgObj.exports;
    const actual = exports[entryName];

    assert.strictEqual(actual, entryFileName, `${entryName} should specify ${entryFileName}, but ${actual}`);
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

    const installedPackageJSON = await loadJSON(BASE_DIR, `../node_modules/${PACKAGE_NAME}/package.json`);

    const EXTENSION_PATTERN = /\.(js|mjs|cjs)$/u;

    for (const file of cjsFileList) {
        loadCJS(file);

        // With classic Node.js Module resolution support without extension.
        loadCJS(file.replace(EXTENSION_PATTERN, ''));
    }

    const testSpecialCaseESMWithoutExtension = (file) => {
        // Out package type is not module. Let's return.
        if (file === '.') {
            return;
        }

        // With classic Node.js Module resolution support without extension.
        // It's supported by various bundlers (webpack, rollup, and more).
        // But Node.js does not support its style.
        // Instead of loading a module, we'll test by checking a value in package.json.

        const fileValue = `./${file}`;
        const classicPath = fileValue.replace(EXTENSION_PATTERN, '');
        testPackageJSONHasExportsEntry(installedPackageJSON, classicPath, fileValue);
    };

    for (const file of esmFileList) {
        // eslint-disable-next-line no-await-in-loop
        await loadESM(file);

        testSpecialCaseESMWithoutExtension(file);
    }

    for (const file of libFileList) {
        // eslint-disable-next-line no-await-in-loop
        await loadJSFileAsModule(file);
        loadCJS(file.replace(EXTENSION_PATTERN, ''));
    }

    await testSpecialCaseLoadIndexJS(installedPackageJSON);

    const publicApiTestCases = await import(`${__dirname}/public_api.mjs`).then((obj) => obj.default);

    const matcher = (packagePath, recods, list) => {
        const actual = Object.keys(recods).sort();
        const expected = list.sort();
        assert.deepStrictEqual(actual, expected, `all exported symbols should be actual exported: ${packagePath}`);
    };

    for (const [key, { exports: expected }] of Object.entries(publicApiTestCases)) {
        // eslint-disable-next-line no-await-in-loop
        const importESMObj = await loadESM(key);
        matcher(`mjs:${key}`, importESMObj, expected);

        const importCJSObj = loadCJS(key);
        matcher(`cjs:${key}`, importCJSObj, expected);
    }
})().catch((e) => {
    console.error(e);
    process.exit(1);
});

import * as assert from 'assert';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const require = createRequire(import.meta.url);

import { loadJSON } from './package_json_rewriter/json.mjs';

const THIS_FILENAME = fileURLToPath(import.meta.url);
const THIS_DIRNAME = dirname(THIS_FILENAME);

const BASE_DIR = THIS_DIRNAME;
const PACKAGE_NAME = 'option-t';

const SHOULD_EXPOSE_LIB = true;

function testLoadCJS(file) {
    const modulepath = (file === '.') ? PACKAGE_NAME : `${PACKAGE_NAME}/${file}`;
    const mod = require(modulepath);
    return mod;
}

async function testLoadESM(file) {
    const modulepath = (file === '.') ? PACKAGE_NAME : `${PACKAGE_NAME}/${file}`;
    const mod = await import(modulepath);
    return mod;
}

async function testLoadJSFileAsModule(file) {
    if (file.endsWith('.js')) {
        testLoadCJS(file);
    }
    else if (file.endsWith('.mjs')) {
        await testLoadESM(file);
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
    let NODE_MODULE_RESOLUTION_SPECIAL_CASE_CJS = [
        ...DIR_SUBPATH.map((path) => `cjs/${path}`),
    ];

    if (SHOULD_EXPOSE_LIB) {
        NODE_MODULE_RESOLUTION_SPECIAL_CASE_CJS = [
            ...NODE_MODULE_RESOLUTION_SPECIAL_CASE_CJS,
            ...DIR_SUBPATH.map((path) => `lib/${path}`),
        ];
    }

    // `require()` can load `./index.js` with a parent directry name.
    // This behavior is not supported by Node.js' ESM implementation.
    // But it might be supported by webpack or other bundlers. It's sad for package developer.

    for (const file of NODE_MODULE_RESOLUTION_SPECIAL_CASE_CJS) {
        testLoadCJS(file);
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
    console.log('====== This script tests whether the path is exported or not by the list ======');

    const json = await loadJSON(BASE_DIR, './pkg_files.json');
    const fileList = new Map(Object.entries(json));

    const cjsFileSet = new Map([
        ['.', null],
    ]);
    const esmFileSet = new Map([
        ['.', null],
    ]);
    const libFileSet = new Map();
    for (const [file] of fileList) {
        if (file.endsWith('.d.ts')) {
            continue;
        }

        if (file.startsWith('cjs/')) {
            cjsFileSet.set(file, null);
        }
        else if (file.startsWith('esm/')) {
            esmFileSet.set(file, null);
        }
        else if (SHOULD_EXPOSE_LIB && file.startsWith('lib/')) {
            libFileSet.set(file, null);
        }
        else {
            continue;
        }
    }

    const installedPackageJSON = await loadJSON(BASE_DIR, `../node_modules/${PACKAGE_NAME}/package.json`);

    const EXTENSION_PATTERN = /\.(js|mjs|cjs)$/u;

    for (const [file] of cjsFileSet) {
        testLoadCJS(file);

        // With classic Node.js Module resolution support without extension.
        testLoadCJS(file.replace(EXTENSION_PATTERN, ''));
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

    for (const [file] of esmFileSet) {
        // eslint-disable-next-line no-await-in-loop
        await testLoadESM(file);

        testSpecialCaseESMWithoutExtension(file);
    }

    for (const [file] of libFileSet) {
        // eslint-disable-next-line no-await-in-loop
        await testLoadJSFileAsModule(file);
        testLoadCJS(file.replace(EXTENSION_PATTERN, ''));
    }

    await testSpecialCaseLoadIndexJS(installedPackageJSON);

    const publicApiTestCases = await import(`${THIS_DIRNAME}/public_api.mjs`).then((obj) => obj.default);

    const matcher = (packagePath, recods, list) => {
        const actual = Object.keys(recods).sort();
        const expected = list.sort();
        assert.deepStrictEqual(actual, expected, `all exported symbols should be actual exported: ${packagePath}`);
    };

    for (const [key, { exports: expected }] of Object.entries(publicApiTestCases)) {
        // eslint-disable-next-line no-await-in-loop
        const importESMObj = await testLoadESM(key);
        matcher(`mjs:${key}`, importESMObj, expected);

        const importCJSObj = testLoadCJS(key);
        matcher(`cjs:${key}`, importCJSObj, expected);
    }
})().catch((e) => {
    console.error(e);
    process.exit(1);
});

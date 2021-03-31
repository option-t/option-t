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

function calcModulePath(file) {
    return (file === '.') ? PACKAGE_NAME : `${PACKAGE_NAME}/${file}`;
}

function tryLoadCJS(file) {
    const modulepath = calcModulePath(file);
    const mod = require(modulepath);
    return mod;
}

function assertLoadCJS(file, condition) {
    assert.notStrictEqual(condition, undefined);
    const modulepath = calcModulePath(file);

    const isPrivate = !!condition && condition.private;
    const tester = () => {
        require(modulepath);
    };

    if (!isPrivate) {
        assert.doesNotThrow(tester, `\`${modulepath}\` should not be exposed`);
    }
    else {
        assert.throws(tester, `\`${modulepath}\` should not be exposed, but there is!`);
    }
}

async function tryLoadESM(file) {
    const modulepath = calcModulePath(file);
    const mod = await import(modulepath);
    return mod;
}

async function assertLoadESM(file, condition) {
    assert.notStrictEqual(condition, undefined);
    const modulepath = calcModulePath(file);
    const tester = async () => {
        await import(modulepath);
    };

    const isPrivate = !!condition && condition.private;
    if (!isPrivate) {
        await assert.doesNotReject(tester, `\`${modulepath}\` should not be exposed`);
    }
    else {
        await assert.rejects(tester, `\`${modulepath}\` should not be exposed, but there is!`);
    }
}


async function assertLoadJSFileAsModule(file, condition) {
    if (file.endsWith('.js')) {
        assertLoadCJS(file, condition);
    }
    else if (file.endsWith('.mjs')) {
        await assertLoadESM(file, condition);
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
        assertLoadCJS(file, null);
    }

    const NODE_MODULE_RESOLUTION_SPECIAL_CASE_ESM = DIR_SUBPATH.map((path) => `./esm/${path}`);
    for (const name of NODE_MODULE_RESOLUTION_SPECIAL_CASE_ESM) {
        const filename = `${name}/index.mjs`;
        testPackageJSONHasExportsEntry(installedPackageJSON, name, filename, null);
    }
}

function testPackageJSONHasExportsEntry(pkgObj, entryName, entryFileName, condition) {
    const exports = pkgObj.exports;
    const actual = exports[entryName];

    const isPrivate = !!condition && condition.private;
    if (isPrivate) {
        assert.strictEqual(actual, undefined, `${entryName} should not specify ${entryFileName}, but ${actual}`);
    }
    else {
        assert.strictEqual(actual, entryFileName, `${entryName} should specify ${entryFileName}, but ${actual}`);
    }
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
    for (const [file, info] of fileList) {
        if (file.endsWith('.d.ts')) {
            continue;
        }

        if (file.startsWith('cjs/')) {
            cjsFileSet.set(file, info);
        }
        else if (file.startsWith('esm/')) {
            esmFileSet.set(file, info);
        }
        else if (SHOULD_EXPOSE_LIB && file.startsWith('lib/')) {
            libFileSet.set(file, info);
        }
        else {
            continue;
        }
    }

    const installedPackageJSON = await loadJSON(BASE_DIR, `../node_modules/${PACKAGE_NAME}/package.json`);

    const EXTENSION_PATTERN = /\.(js|mjs|cjs)$/u;

    for (const [file, condition] of cjsFileSet) {
        assertLoadCJS(file, condition);

        // With classic Node.js Module resolution support without extension.
        assertLoadCJS(file.replace(EXTENSION_PATTERN, ''), condition);
    }

    const testSpecialCaseESMWithoutExtension = (file, condition) => {
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
        testPackageJSONHasExportsEntry(installedPackageJSON, classicPath, fileValue, condition);
    };

    for (const [file, condition] of esmFileSet) {
        // eslint-disable-next-line no-await-in-loop
        await assertLoadESM(file, condition);

        testSpecialCaseESMWithoutExtension(file, condition);
    }

    for (const [file, condition] of libFileSet) {
        // eslint-disable-next-line no-await-in-loop
        await assertLoadJSFileAsModule(file, condition);
        assertLoadCJS(file.replace(EXTENSION_PATTERN, ''), condition);
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
        const importESMObj = await tryLoadESM(key);
        matcher(`mjs:${key}`, importESMObj, expected);

        const importCJSObj = tryLoadCJS(key);
        matcher(`cjs:${key}`, importCJSObj, expected);
    }
})().catch((e) => {
    console.error(e);
    process.exit(1);
});

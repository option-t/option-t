'use strict';

const assert = require('assert');

const {
    loadHistoricalPathInfo,
    addHistoricalPathToExportsFields,
} = require('./compatibility');

const BASE_DIR = __dirname;

function addMainFieldFromPackageJSON(targetObject, manifestInfo) {
    const mainPath = manifestInfo.main;
    assert.strictEqual(typeof mainPath, 'string', `package.json's 'main' field is not string`);
    assert.ok(mainPath.startsWith('./'), `package.json's 'main' field should start with ./`);

    // eslint-disable-next-line no-param-reassign
    targetObject['.'] = mainPath;
}

async function addExportsFields(json) {
    const o = Object.create(null);

    const histricalJSPathList = await loadHistoricalPathInfo(BASE_DIR, '../../../pkg_files.json');
    addHistoricalPathToExportsFields(o, histricalJSPathList);

    // For the future, we may have a chance to remove this
    // when https://github.com/nodejs/node/issues/32107/ has been fixed.
    addMainFieldFromPackageJSON(o, json);

    // eslint-disable-next-line no-param-reassign
    json.exports = o;
}

module.exports = Object.freeze({
    addExportsFields,
});

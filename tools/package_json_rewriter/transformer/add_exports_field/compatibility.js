'use strict';

const assert = require('assert');

const { loadJSON } = require('../../json');

function filterJSDir(histricalPathInfo) {
    assert.ok(Array.isArray(histricalPathInfo));

    const jsDir = histricalPathInfo.filter((filepath) => {
        if (!(/^(cjs|esm|lib)\//u).test(filepath)) {
            return false;
        }

        if (!(/^.+\.(js|mjs|cjs)$/u).test(filepath)) {
            return false;
        }

        return true;
    });
    return jsDir;
}

async function loadHistoricalPathInfo(baseDir, filename) {
    const histricalPathInfo = await loadJSON(baseDir, filename);
    const histricalJSPathList = filterJSDir(histricalPathInfo);
    return histricalJSPathList;
}

function addHistoricalPathToExportsFields(o, histricalJSPathList) {
    // https://nodejs.org/api/esm.html
    for (const file of histricalJSPathList) {
        const filepath = `./${file}`;
        // eslint-disable-next-line no-param-reassign
        o[filepath] = filepath;

        const filepathWithoutExtension = filepath.replace(/\.(js|mjs|cjs)$/u, '');
        // eslint-disable-next-line no-param-reassign
        o[filepathWithoutExtension] = filepathWithoutExtension;
    }
}

module.exports = Object.freeze({
    loadHistoricalPathInfo,
    addHistoricalPathToExportsFields,
});

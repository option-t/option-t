'use strict';

const { loadHistoricalPathInfo, addHistoricalPathToExportsFields } = require('./compatibility');

const BASE_DIR = __dirname;

async function addExportsFields(json) {
    const o = Object.create(null);

    const histricalJSPathList = await loadHistoricalPathInfo(BASE_DIR, '../../../pkg_files.json');
    addHistoricalPathToExportsFields(o, histricalJSPathList);

    // eslint-disable-next-line no-param-reassign
    json.exports = o;
}

module.exports = Object.freeze({
    addExportsFields,
});

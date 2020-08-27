import * as assert from 'assert';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import {
    loadHistoricalPathInfo,
    addHistoricalPathToExportsFields,
} from './compatibility.mjs';
import {
    loadPublicAPIDefinitions,
    addPublicAPIToExportsFields,
} from './public_api.mjs';

const THIS_FILENAME = fileURLToPath(import.meta.url);
const THIS_DIRNAME = dirname(THIS_FILENAME);

const BASE_DIR = THIS_DIRNAME;

function addMainFieldFromPackageJSON(targetObject, manifestInfo) {
    const mainPath = manifestInfo.main;
    assert.strictEqual(typeof mainPath, 'string', `package.json's 'main' field is not string`);
    assert.ok(mainPath.startsWith('./'), `package.json's 'main' field should start with ./`);

    // eslint-disable-next-line no-param-reassign
    targetObject['.'] = mainPath;
}

export async function addExportsFields(json) {
    const o = Object.create(null);

    const histricalJSPathList = await loadHistoricalPathInfo(BASE_DIR, '../../../pkg_files.json');
    addHistoricalPathToExportsFields(o, histricalJSPathList);

    const publicApiList = await loadPublicAPIDefinitions(BASE_DIR, '../../../public_api.mjs');
    await addPublicAPIToExportsFields(o, publicApiList);

    // For the future, we may have a chance to remove this
    // when https://github.com/nodejs/node/issues/32107/ has been fixed.
    addMainFieldFromPackageJSON(o, json);

    // eslint-disable-next-line no-param-reassign
    json.exports = o;
}

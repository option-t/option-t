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

export async function addExportsFields(json) {
    const o = Object.create(null);

    const histricalJSPathList = await loadHistoricalPathInfo(BASE_DIR, '../../../pkg_files.json');
    addHistoricalPathToExportsFields(o, histricalJSPathList);

    const publicApiList = await loadPublicAPIDefinitions(BASE_DIR, '../../../public_api.mjs');
    await addPublicAPIToExportsFields(o, publicApiList);

    // eslint-disable-next-line no-param-reassign
    json.exports = o;
}

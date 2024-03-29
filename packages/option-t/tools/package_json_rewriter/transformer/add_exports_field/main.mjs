import { generateExposedPathSequence } from '../../../public_api/mod.mjs';

import { loadPublicAPIDefinitions, addPublicAPIToExportsFields } from './public_api.mjs';

export async function addExportsFields(json) {
    const o = Object.create(null);

    const publicApiSourceSeq = generateExposedPathSequence();
    const publicApiList = loadPublicAPIDefinitions(publicApiSourceSeq);
    await addPublicAPIToExportsFields(o, publicApiList);

    // eslint-disable-next-line no-param-reassign
    json.exports = o;
}

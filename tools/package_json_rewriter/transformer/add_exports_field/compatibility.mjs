import * as assert from 'assert';

import { CompatExportEntry, constructDualPackagePathValue } from './ExportEntry.mjs';

const SHOULD_EXPOSE_LIB = true;

export function addHistoricalPathToExportsFields(o, histricalJSPathSeq) {
    // https://nodejs.org/api/esm.html
    for (const original of histricalJSPathSeq) {
        assert.ok(original.isForCompat());
        if (original.isLib()) {
            if (!SHOULD_EXPOSE_LIB) {
                continue;
            }
        }

        const entry = new CompatExportEntry(original);
        const key = entry.key();
        const filepath = entry.filepath();
        // eslint-disable-next-line no-param-reassign
        o[key] = filepath;
    }

    const DIR_SUBPATH = [
        'Maybe',
        'Nullable',
        'PlainOption',
        'PlainResult',
        'Undefinable',
    ];

    const handleSpecialCaseOfNodeModuleResolution = (list, extension) => {
        for (const dirpath of list) {
            const key = `./${dirpath}`;

            // eslint-disable-next-line no-param-reassign
            o[key] = `${key}/index.${extension}`;
        }
    };

    handleSpecialCaseOfNodeModuleResolution(DIR_SUBPATH.map((path) => `cjs/${path}`), 'js');
    handleSpecialCaseOfNodeModuleResolution(DIR_SUBPATH.map((path) => `esm/${path}`), 'mjs');
    // Our defult is still commonjs. For lib/, we should use `.js`.
    if (SHOULD_EXPOSE_LIB) {
        const list = DIR_SUBPATH.map((path) => `lib/${path}`);
        for (const dirpath of list) {
            const key = `./${dirpath}`;
            const actualPath = `${key}/index`;
            const cjs = `${actualPath}.js`;
            const mjs = `${actualPath}.mjs`;
            const value = constructDualPackagePathValue({
                cjs,
                esm: mjs,
            });
            // eslint-disable-next-line no-param-reassign
            o[key] = value;
        }
    }
}

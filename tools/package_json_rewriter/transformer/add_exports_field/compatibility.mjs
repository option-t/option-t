import * as assert from 'assert';

import {
    CompatExportEntry,
    CommonJSCompatDirExport,
    ESModuleCompatDirExport,
    LibCompatDirExport,
} from './ExportEntry.mjs';

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
        // eslint-disable-next-line no-param-reassign
        o[key] = entry;
    }

    const DIR_SUBPATH = [
        'Maybe',
        'Nullable',
        'PlainOption',
        'PlainResult',
        'Undefinable',
    ];

    const handleSpecialCaseOfNodeModuleResolution = (list, aCtor) => {
        for (const item of list) {
            // eslint-disable-next-line new-cap
            const entry = new aCtor(item);
            const key = entry.key();
            // eslint-disable-next-line no-param-reassign
            o[key] = entry;
        }
    };

    handleSpecialCaseOfNodeModuleResolution(DIR_SUBPATH, CommonJSCompatDirExport);
    handleSpecialCaseOfNodeModuleResolution(DIR_SUBPATH, ESModuleCompatDirExport);
    // Our defult is still commonjs. For lib/, we should use `.js`.
    if (SHOULD_EXPOSE_LIB) {
        for (const dirpath of DIR_SUBPATH) {
            const entry = new LibCompatDirExport(dirpath);
            const key = entry.key();
            // eslint-disable-next-line no-param-reassign
            o[key] = entry;
        }
    }
}

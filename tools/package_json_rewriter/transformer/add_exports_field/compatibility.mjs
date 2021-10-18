import * as assert from 'assert';

import {
    CompatExportEntry,
    CommonJSCompatDirExport,
    ESModuleCompatDirExport,
    LibCompatDirExport,
} from './ExportEntry.mjs';

export function addHistoricalPathToExportsFields(o, histricalJSPathSeq) {
    // https://nodejs.org/api/esm.html
    for (const original of histricalJSPathSeq) {
        assert.ok(original.isForCompat());

        const entry = CompatExportEntry.create(original);
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
    for (const dirpath of DIR_SUBPATH) {
        const entry = new LibCompatDirExport(dirpath);
        const key = entry.key();
        // eslint-disable-next-line no-param-reassign
        o[key] = entry;
    }
}

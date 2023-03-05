import * as assert from 'node:assert/strict';

import {
    CompatExportEntry,
} from './export_entry.mjs';

export function addHistoricalPathToExportsFields(o, histricalJSPathSeq) {
    // https://nodejs.org/api/esm.html
    for (const original of histricalJSPathSeq) {
        assert.ok(original.isForCompat());

        const entry = CompatExportEntry.create(original);
        const key = entry.key();
        // eslint-disable-next-line no-param-reassign
        o[key] = entry;
    }
}

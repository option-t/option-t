import * as assert from 'assert';

class ExportEntity {
    constructor(key, path) {
        assert.strictEqual(key.startsWith('/'), false, `key (${key}) should not start with /`);
        assert.strictEqual(key.endsWith('/'), false, `key (${key}) should not end with /`);

        this._key = key;
        this._path = path;
    }

    key() {
        const key = this._key;
        // For `main` field
        if (key === '.') {
            return key;
        }

        const k = `./${this._key}`;
        return k;
    }

    toJSON() {
        const p = this._path !== null ? this._path : this._key;

        const esm = `./esm/${p}.mjs`;
        const cjs = `./cjs/${p}.js`;

        // [By the document of Node.js v14.2](https://nodejs.org/api/esm.html#esm_resolution_algorithm),
        //  * Condition matching is applied in object order from first to last within the "exports" object.
        //  * `["node", "import"]` is used as _defaultEnv_ for its ES Module resolver.
        //
        // see also https://nodejs.org/api/esm.html#esm_conditional_exports
        return {
            'import': esm,
            'require': cjs,
            // 'default'
        };
    }
}

export function loadPublicAPIDefinitions(seq) {
    const EXPORT_ENTRIES = [];
    for (const item of seq) {
        assert.ok(!item.isForCompat());

        const name = item.name();
        const path = item.path();
        const entry = new ExportEntity(name, path);
        EXPORT_ENTRIES.push(entry);
    }

    return EXPORT_ENTRIES;
}

export async function addPublicAPIToExportsFields(o, publicApiList) {
    // https://nodejs.org/api/esm.html
    for (const entry of publicApiList) {
        const key = entry.key();

        // eslint-disable-next-line no-param-reassign
        o[key] = entry;
    }
}

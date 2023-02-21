import * as assert from 'node:assert/strict';

import {
    QuirksLegacyExposedPath
} from '../../../public_api/mod.mjs';

class AbstractExportEntry {
    key() {
        throw new EvalError(`please override on ${this.constructor.name}`);
    }
    toJSON() {
        throw new EvalError(`please override on ${this.constructor.name}`);
    }
}

const EXTENSION_CJS = 'cjs';
const EXTENSION_MJS = 'js';
const EXTENSION_DMTS = 'd.ts';
const EXTENSION_DCTS = 'd.cts';

export class ExportEntry extends AbstractExportEntry {
    #key;
    #path;

    constructor(key, path) {
        super();

        assert.strictEqual(key.startsWith('/'), false, `key (${key}) should not start with /`);
        assert.strictEqual(key.endsWith('/'), false, `key (${key}) should not end with /`);

        this.#key = key;
        this.#path = path;
        Object.freeze(this);
    }

    key() {
        const key = this.#key;
        // For `main` field
        if (key === '.') {
            return key;
        }

        const k = `./${this.#key}`;
        return k;
    }

    toJSON() {
        const p = this.#path !== null ? this.#path : this.#key;

        const esm = `./esm/${p}.${EXTENSION_MJS}`;
        const cjs = `./cjs/${p}.${EXTENSION_CJS}`;
        const dmts = `./esm/${p}.${EXTENSION_DMTS}`;
        const dcts = `./cjs/${p}.${EXTENSION_DCTS}`;
        const entry = constructDualPackagePathValue({
            esm,
            cjs,
            dmts,
            dcts,
        });
        return entry;
    }
}

export class CompatExportEntry extends AbstractExportEntry {
    static create(entry) {
        assert.ok(entry instanceof QuirksLegacyExposedPath);
        if (entry.isCJS()) {
            // eslint-disable-next-line no-use-before-define
            return new CommonJSCompatFileExport(entry);
        }

        if (entry.isESM()) {
            // eslint-disable-next-line no-use-before-define
            return new ESModuleCompatFileExport(entry);
        }

        if (entry.isLib()) {
            // eslint-disable-next-line no-use-before-define
            return new LibCompatFileExport(entry);
        }

        throw new RangeError('not here');
    }

    #original;

    constructor(entry) {
        super();
        assert.ok(entry instanceof QuirksLegacyExposedPath);

        this.#original = entry;
    }

    key() {
        const key = this.#original.name();
        const k = `./${key}`;
        return k;
    }

    pathValue() {
        const original = this.#original;
        if (original.hasPathOverride()) {
            const p = original.filepath();
            const k = `./${p}`;
            return k;
        }

        const k = this.key();
        return k;
    }

    _toExportEntry() {
        throw new EvalError(`please override on ${this.constructor.name}`);
    }

    toJSON() {
        return this._toExportEntry();
    }
}

class CommonJSCompatFileExport extends CompatExportEntry {
    constructor(entry) {
        super(entry);

        Object.freeze(this);
        assert.ok(entry.isCJS());
    }

    _toExportEntry() {
        const key = this.pathValue();
        const dts = `${key}.${EXTENSION_DCTS}`;

        const p = `${key}.${EXTENSION_CJS}`;
        const value = constructPathValue({
            dts,
            filepath: p,
        });
        return value;
    }
}

class ESModuleCompatFileExport extends CompatExportEntry {
    constructor(entry) {
        super(entry);

        Object.freeze(this);
        assert.ok(entry.isESM());
    }

    _toExportEntry() {
        const key = this.pathValue();
        const dts = `${key}.${EXTENSION_DMTS}`;

        const p = `${key}.${EXTENSION_MJS}`;
        const value = constructPathValue({
            dts,
            filepath: p,
        });
        return value;
    }
}

const LIB_PATH_PREFIX = './lib/';
const ESM_PATH_PREFIX = './esm/';
const CJS_PATH_PREFIX = './cjs/';

class LibCompatFileExport extends CompatExportEntry {
    constructor(entry) {
        super(entry);

        Object.freeze(this);
        assert.ok(entry.isLib());
    }

    _toExportEntry() {
        const key = this.pathValue();

        const esmKey = key.replace(LIB_PATH_PREFIX, ESM_PATH_PREFIX);
        assert.ok(esmKey.startsWith(ESM_PATH_PREFIX));
        const esm = `${esmKey}.${EXTENSION_MJS}`;
        const dmts = `${esmKey}.${EXTENSION_DMTS}`;

        const cjsKey = key.replace(LIB_PATH_PREFIX, CJS_PATH_PREFIX);
        assert.ok(cjsKey.startsWith(CJS_PATH_PREFIX));
        const cjs = `${cjsKey}.cjs`;
        const dcts = `${cjsKey}.${EXTENSION_DCTS}`;

        const p = constructDualPackagePathValue({
            cjs,
            esm,
            dmts,
            dcts,
        });
        return p;
    }
}

function constructDualPackagePathValue({ cjs, esm, dmts, dcts }) {
    assert.strictEqual(typeof cjs, 'string', 'cjs should be string');
    assert.strictEqual(typeof esm, 'string', 'esm should be string');
    assert.strictEqual(typeof dmts, 'string', 'dmts should be string');
    assert.strictEqual(typeof dcts, 'string', 'dcts should be string');

    const importCondition = constructPathValue({
        filepath: esm,
        dts: dmts,
    });

    const requireCondition = constructPathValue({
        filepath: cjs,
        dts: dcts,
    });

    // [By the document of Node.js v14.2](https://nodejs.org/api/esm.html#esm_resolution_algorithm),
    //  * Condition matching is applied in object order from first to last within the "exports" object.
    //  * `["node", "import"]` is used as _defaultEnv_ for its ES Module resolver.
    //
    // see also https://nodejs.org/api/packages.html#conditional-exports
    return Object.freeze({
        // By observing some behaviors, if we add `types` to here, tsc (at least 4.7 ~ 4.9) use its `types` field
        // to determine a module type for this entry point.
        // For example, if we set `d.ts` for ES Module, tsc will think this entrypoint is ESM.

        'require':  requireCondition,
        // _default_ should be placed to the last.
        // https://nodejs.org/api/packages.html#conditional-exports
        'default': importCondition,
    });
}

function constructPathValue({ filepath, dts }) {
    assert.strictEqual(typeof filepath, 'string', 'filepath should be string');
    assert.strictEqual(typeof dts, 'string', 'dts should be string');

    // [By the document of Node.js v14.2](https://nodejs.org/api/esm.html#esm_resolution_algorithm),
    //  * Condition matching is applied in object order from first to last within the "exports" object.
    //  * `["node", "import"]` is used as _defaultEnv_ for its ES Module resolver.
    //
    // see also https://nodejs.org/api/packages.html#conditional-exports
    return Object.freeze({
        // > Note that the "types" condition should always come first in "exports".
        // https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#package-json-exports-imports-and-self-referencing
        'types': dts,
        // _default_ should be placed to the last.
        // https://nodejs.org/api/packages.html#conditional-exports
        'default': filepath,
    });
}

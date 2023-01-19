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
const EXTENSION_DTS = 'd.ts';
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
        const dts = `./esm/${p}.${EXTENSION_DTS}`;
        const entry = constructDualPackagePathValue({
            esm,
            cjs,
            dts,
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
        const key = this.key();
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
        const key = this.key();
        const dts = `${key}.${EXTENSION_DTS}`;

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
        const key = this.key();

        const esmKey = key.replace(LIB_PATH_PREFIX, ESM_PATH_PREFIX);
        assert.ok(esmKey.startsWith(ESM_PATH_PREFIX));
        const esm = `${esmKey}.${EXTENSION_MJS}`;
        const dts = `${esmKey}.${EXTENSION_DTS}`;

        const cjsKey = key.replace(LIB_PATH_PREFIX, CJS_PATH_PREFIX);
        assert.ok(cjsKey.startsWith(CJS_PATH_PREFIX));
        const cjs = `${cjsKey}.cjs`;

        const p = constructDualPackagePathValue({
            cjs,
            esm,
            dts,
        });
        return p;
    }
}

class AbstractCompatDirExport extends AbstractExportEntry {
    #dirpath;
    #extension;
    #dtsExtension;

    constructor(dirpath, ext, dtsExt) {
        super();
        this.#dirpath = dirpath;
        this.#extension = ext;
        this.#dtsExtension = dtsExt;
    }

    key() {
        const key = `./${this.#dirpath}`;
        return key;
    }

    #toExportEntry() {
        const key = this.key();
        const filepath = `${key}/index`;
        const ext = this.#extension;
        const fullpath = `${filepath}.${ext}`;
        const dtsExt = this.#dtsExtension;
        const dts = `${filepath}.${dtsExt}`;

        const value = constructPathValue({
            dts,
            filepath: fullpath,
        });
        return value;
    }

    toJSON() {
        return this.#toExportEntry();
    }
}

export class CommonJSCompatDirExport extends AbstractCompatDirExport {
    constructor(dirpath) {
        const p = `cjs/${dirpath}`;
        super(p, EXTENSION_CJS, EXTENSION_DCTS);
        Object.freeze(this);
    }
}

export class ESModuleCompatDirExport extends AbstractCompatDirExport {
    constructor(dirpath) {
        const p = `esm/${dirpath}`;
        super(p, EXTENSION_MJS, EXTENSION_DTS);
        Object.freeze(this);
    }
}

export class LibCompatDirExport extends AbstractExportEntry {
    #dirpath;

    constructor(path) {
        super();
        const dirpath = `lib/${path}`;
        this.#dirpath = dirpath;

        Object.freeze(this);
    }

    key() {
        const key = `./${this.#dirpath}`;
        return key;
    }

    #toExportEntry() {
        const key = this.key();
        const actualPath = `${key}/index`;

        const esmKey = actualPath.replace(LIB_PATH_PREFIX, ESM_PATH_PREFIX);
        assert.ok(esmKey.startsWith(ESM_PATH_PREFIX));
        const mjs = `${esmKey}.${EXTENSION_MJS}`;
        const dts = `${esmKey}.${EXTENSION_DTS}`;

        const cjsKey = actualPath.replace(LIB_PATH_PREFIX, CJS_PATH_PREFIX);
        assert.ok(cjsKey.startsWith(CJS_PATH_PREFIX));
        const cjs = `${cjsKey}.${EXTENSION_CJS}`;

        const value = constructDualPackagePathValue({
            cjs,
            esm: mjs,
            dts,
        });
        return value;
    }

    toJSON() {
        return this.#toExportEntry();
    }
}

function constructDualPackagePathValue({ cjs, esm, dts }) {
    assert.strictEqual(typeof cjs, 'string', 'cjs should be string');
    assert.strictEqual(typeof esm, 'string', 'esm should be string');
    assert.strictEqual(typeof dts, 'string', 'dts should be string');

    // [By the document of Node.js v14.2](https://nodejs.org/api/esm.html#esm_resolution_algorithm),
    //  * Condition matching is applied in object order from first to last within the "exports" object.
    //  * `["node", "import"]` is used as _defaultEnv_ for its ES Module resolver.
    //
    // see also https://nodejs.org/api/esm.html#esm_conditional_exports
    return Object.freeze({
        'import': esm,
        'require': cjs,
        // https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#packagejson-exports-imports-and-self-referencing
        'types': dts,
        // _default_ should be placed to the last.
        // https://nodejs.org/api/esm.html#esm_conditional_exports
        'default': esm,
    });
}

function constructPathValue({ filepath, dts }) {
    assert.strictEqual(typeof filepath, 'string', 'filepath should be string');
    assert.strictEqual(typeof dts, 'string', 'dts should be string');

    // [By the document of Node.js v14.2](https://nodejs.org/api/esm.html#esm_resolution_algorithm),
    //  * Condition matching is applied in object order from first to last within the "exports" object.
    //  * `["node", "import"]` is used as _defaultEnv_ for its ES Module resolver.
    //
    // see also https://nodejs.org/api/esm.html#esm_conditional_exports
    return Object.freeze({
        // https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#packagejson-exports-imports-and-self-referencing
        'types': dts,
        // _default_ should be placed to the last.
        // https://nodejs.org/api/esm.html#esm_conditional_exports
        'default': filepath,
    });
}

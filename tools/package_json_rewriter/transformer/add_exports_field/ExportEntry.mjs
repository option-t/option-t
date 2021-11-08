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

        const esm = `./esm/${p}.mjs`;
        const cjs = `./cjs/${p}.js`;
        const dts = `./esm/${p}.d.ts`;
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
        const dts = `${key}.d.ts`;

        const p = `${key}.js`;
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
        const dts = `${key}.d.ts`;

        const p = `${key}.mjs`;
        const value = constructPathValue({
            dts,
            filepath: p,
        });
        return value;
    }
}

class LibCompatFileExport extends CompatExportEntry {
    constructor(entry) {
        super(entry);

        Object.freeze(this);
        assert.ok(entry.isLib());
    }

    _toExportEntry() {
        const key = this.key();
        const dts = `${key}.d.ts`;

        const esm = `${key}.mjs`;
        const cjs = `${key}.js`;
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

    constructor(dirpath, ext) {
        super();
        this.#dirpath = dirpath;
        this.#extension = ext;
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
        const dts = `${filepath}.d.ts`;

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
        super(p, 'js');
        Object.freeze(this);
    }
}

export class ESModuleCompatDirExport extends AbstractCompatDirExport {
    constructor(dirpath) {
        const p = `esm/${dirpath}`;
        super(p, 'mjs');
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
        const cjs = `${actualPath}.js`;
        const mjs = `${actualPath}.mjs`;
        const dts = `${actualPath}.d.ts`;
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
    return {
        'import': esm,
        'require': cjs,
        // https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#packagejson-exports-imports-and-self-referencing
        'types': dts,
    };
}

function constructPathValue({ filepath, dts }) {
    assert.strictEqual(typeof filepath, 'string', 'filepath should be string');
    assert.strictEqual(typeof dts, 'string', 'dts should be string');

    // [By the document of Node.js v14.2](https://nodejs.org/api/esm.html#esm_resolution_algorithm),
    //  * Condition matching is applied in object order from first to last within the "exports" object.
    //  * `["node", "import"]` is used as _defaultEnv_ for its ES Module resolver.
    //
    // see also https://nodejs.org/api/esm.html#esm_conditional_exports
    return {
        // https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#packagejson-exports-imports-and-self-referencing
        'types': dts,
        // _default_ should be placed to the last.
        // https://nodejs.org/api/esm.html#esm_conditional_exports
        'default': filepath,
    };
}

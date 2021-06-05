import * as assert from 'assert';

import ApiTable from './table.mjs';

const PKG_NAME = 'option-t';

export class ExposedPath {
    constructor(key, raw) {
        this._key = key;
        this._raw = raw;
        Object.freeze(this);
    }

    name() {
        return this._key;
    }

    getCalcPath() {
        const raw = this.name();
        if (raw === '.') {
            return PKG_NAME;
        }

        const concat = `${PKG_NAME}/${raw}`;
        return concat;
    }

    exports() {
        return this._raw.exports ?? null;
    }

    isForCompat() {
        return this._raw.isForCompat ?? false;
    }

    isESM() {
        assert.ok(this.isForCompat(), `don't call this for non quirks path`);

        const name = this.name();
        const isESM = /^esm/u.test(name) || /\.mjs$/u.test(name);
        return isESM;
    }

    isCJS() {
        assert.ok(this.isForCompat(), `don't call this for non quirks path`);

        const name = this.name();
        const isCJS = /^cjs/u.test(name) || /\.js$/u.test(name);
        return isCJS;
    }

    isLibButWithoutExtension() {
        assert.ok(this.isForCompat(), `don't call this for non quirks path`);
        const name = this.name();
        const ok = /^lib/u.test(name);
        return ok;
    }
}

export async function buildExposedPathList() {
    const raw = ApiTable;
    const list = [];
    for (const [key, value] of Object.entries(raw)) {
        const o = new ExposedPath(key, value);
        list.push(o);
    }
    return list;
}

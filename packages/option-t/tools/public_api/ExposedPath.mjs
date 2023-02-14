import { apiTable, legacyApiTable } from './table.mjs';

const PKG_NAME = 'option-t';

export class ExposedPath {
    #key;
    #raw;

    constructor(key, raw) {
        this.#key = key;
        this.#raw = raw;
        Object.freeze(this);
    }

    _rawKey() {
        return this.#key;
    }

    _raw() {
        return this.#raw;
    }

    name() {
        return this.#key;
    }

    filepath() {
        return this.#raw.actualFilePath ?? null;
    }

    hasPathOverride() {
        const ok = this.filepath() !== null;
        return ok;
    }

    resolvedName() {
        const raw = this.name();
        if (raw === '.') {
            return PKG_NAME;
        }

        const concat = `${PKG_NAME}/${raw}`;
        return concat;
    }

    isForCompat() {
        return false;
    }
}

class SnakeCaseExposedPath extends ExposedPath {
    name() {
        const key = this._rawKey();
        const snake = camelToSnakeCase(key);
        return snake;
    }

    filepath() {
        const raw = this._raw();
        const actualFilePath = raw.actualFilePath;
        if (!actualFilePath) {
            const key = this._rawKey();
            return key;
        }

        return actualFilePath;
    }
}

function camelToSnakeCase(str) {
    const result = str.replace(/[A-Z]/gu, (letter) => {
        return `_${letter.toLowerCase()}`;
    }).replace(/\/_/gu, '/').replace(/^_/gu, '');
    return result;
}

export class QuirksLegacyExposedPath extends ExposedPath {
    isForCompat() {
        return true;
    }

    isESM() {
        const name = this.name();
        const isESM = /^esm\//u.test(name);
        return isESM;
    }

    isCJS() {
        const name = this.name();
        const isCJS = /^cjs\//u.test(name);
        return isCJS;
    }

    isLib() {
        const name = this.name();
        const ok = /^lib\//u.test(name);
        return ok;
    }
}

export function* generateExposedPathSequence() {
    for (const [key, value] of Object.entries(apiTable)) {
        const o = new ExposedPath(key, value);
        yield o;
    }
}

export function* generateSnakeCaseExposedPathSequence() {
    for (const [key, value] of Object.entries(apiTable)) {
        const o = new SnakeCaseExposedPath(key, value);
        yield o;
    }
}

export function* generateLegacyExposedPathSequence() {
    for (const [key, value] of Object.entries(legacyApiTable)) {
        const o = new QuirksLegacyExposedPath(key, value);
        yield o;
    }
}

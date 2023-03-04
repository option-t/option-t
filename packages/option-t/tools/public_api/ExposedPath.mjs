import { apiTable, legacyApiTable } from './table.mjs';

const PKG_NAME = 'option-t';

export class ExposedPath {
    #key;
    #descriptor;

    constructor(key, descriptor) {
        this.#key = key;
        this.#descriptor = descriptor;
        Object.freeze(this);
    }

    name() {
        return this.#key;
    }

    filepath() {
        return this.#descriptor.actualFilePath ?? null;
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

    shouldHideInDoc() {
        const ok = !!this.#descriptor.shouldHideInDoc;
        return ok;
    }
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
}

export function* generateExposedPathSequence() {
    for (const [key, value] of Object.entries(apiTable)) {
        const o = new ExposedPath(key, value);
        yield o;
    }
}

export function* generateLegacyExposedPathSequence() {
    for (const [key, value] of Object.entries(legacyApiTable)) {
        const o = new QuirksLegacyExposedPath(key, value);
        yield o;
    }
}

export function* generateAllExposedPathSequence() {
    yield* generateExposedPathSequence();
    yield* generateLegacyExposedPathSequence();
}

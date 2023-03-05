import * as assert from 'node:assert/strict';

import { ApiPathDescriptor, modifyDescriptor } from './api_path_descriptor.mjs';
import { apiTable } from './table.mjs';

const PKG_NAME = 'option-t';

export class ExposedPath {
    #key;
    #descriptor;

    constructor(key, descriptor) {
        assert.ok(typeof key === 'string');
        assert.ok(descriptor instanceof ApiPathDescriptor);

        this.#key = key;
        this.#descriptor = descriptor;
        Object.freeze(this);
    }

    name() {
        return this.#key;
    }

    descriptor() {
        return this.#descriptor;
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

    shouldCreateCompat() {
        const createCompat = this.#descriptor.createCompat;
        const ok = !!createCompat;
        return ok;
    }
}

export class QuirksLegacyExposedPath extends ExposedPath {
    constructor(moduleType, key, descriptor) {
        const compatKey = `${moduleType}/${key}`;
        const desc = modifyDescriptor(descriptor, moduleType);
        super(compatKey, desc);
    }

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

const CJS_DIR_PREFIX = 'cjs';
const ESM_DIR_PREFIX = 'esm';

export function* generateLegacyExposedPathSequence() {
    for (const item of generateExposedPathSequence()) {
        if (!item.shouldCreateCompat()) {
            continue;
        }

        const key = item.name();
        const descriptor = item.descriptor();

        const o = new QuirksLegacyExposedPath(CJS_DIR_PREFIX, key, descriptor);
        yield o;
    }

    for (const item of generateExposedPathSequence()) {
        if (!item.shouldCreateCompat()) {
            continue;
        }

        const key = item.name();
        const descriptor = item.descriptor();
        const o = new QuirksLegacyExposedPath(ESM_DIR_PREFIX, key, descriptor);
        yield o;
    }
}

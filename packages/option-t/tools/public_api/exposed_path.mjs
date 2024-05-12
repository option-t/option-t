import * as assert from 'node:assert/strict';

import { ApiPathDescriptor } from './api_path_descriptor.mjs';
import { apiTable } from './table.mjs';

const PKG_NAME = 'option-t';

class ExposedPath {
    #key;
    #descriptor;

    constructor(key, descriptor) {
        assert.ok(typeof key === 'string');
        assert.ok(descriptor instanceof ApiPathDescriptor);

        this.#key = key;
        this.#descriptor = descriptor;
        Object.seal(this);
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

    resolvedName() {
        const raw = this.name();
        if (raw === '.') {
            return PKG_NAME;
        }

        const concat = `${PKG_NAME}/${raw}`;
        return concat;
    }

    isDeprecated() {
        const ok = this.#descriptor.isDeprecatedPath;
        return ok;
    }

    deprecatedPathMessage() {
        const ok = this.#descriptor.deprecatedPathMessage;
        return ok;
    }

    shouldHideInDoc() {
        const ok = !!this.#descriptor.shouldHideInDoc;
        return ok;
    }
}

export function* generateExposedPathSequence() {
    for (const [key, value] of Object.entries(apiTable)) {
        const o = new ExposedPath(key, value);
        yield o;
    }
}

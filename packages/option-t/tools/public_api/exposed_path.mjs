import * as assert from 'node:assert/strict';

import { ApiPathDescriptor } from './api_path_descriptor.mjs';
import { apiTable } from './table.mjs';

const PKG_NAME = 'option-t';
const RELATIVE_PATH_TO_SRC_DIR_IN_MONOREPO = `../packages/${PKG_NAME}/src`;

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
        return this.#descriptor.actualFilePath;
    }

    hrefFromDocsDir() {
        const subpath = this.filepath();
        const href = `${RELATIVE_PATH_TO_SRC_DIR_IN_MONOREPO}/${subpath}.ts`;
        return href;
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

    message() {
        const ok = this.#descriptor.message;
        return ok;
    }

    shouldHideInDoc() {
        const ok = !!this.#descriptor.shouldHideInDoc;
        return ok;
    }

    isExperimental() {
        const ok = !!this.#descriptor.isExperimental;
        return ok;
    }

    isTypeRootPath() {
        const ok = !!this.#descriptor.isTypeRootPath;
        return ok;
    }

    isCorePrimitive() {
        const ok = !!this.#descriptor.isCorePrimitive;
        return ok;
    }
}

export function* generateExposedPathSequence() {
    for (const [key, value] of Object.entries(apiTable)) {
        const o = new ExposedPath(key, value);
        yield o;
    }
}

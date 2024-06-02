import * as assert from 'node:assert/strict';

const RELATIVE_PATH_TO_SRC_DIR_IN_MONOREPO = '../packages/option-t/src';

const PKG_NAME = 'option-t';

export class MarkdownListItem {
    #key;
    #subpath;
    #isDeprecated;
    #message;
    #isExperimental;
    #isTypeRootPath;

    constructor(key, subpath, isDeprecated, message, isExperimental, isTypeRootPath) {
        assert.ok(typeof key === 'string');
        assert.ok(typeof subpath === 'string');
        assert.ok(typeof isDeprecated === 'boolean');
        assert.ok(typeof isExperimental === 'boolean');
        assert.ok(typeof isTypeRootPath === 'boolean');

        this.#key = key;
        this.#subpath = subpath;
        this.#isDeprecated = isDeprecated;
        this.#message = message;
        this.#isExperimental = isExperimental;
        this.#isTypeRootPath = isTypeRootPath;
        Object.freeze(this);
    }

    get isExperimental() {
        return this.#isExperimental;
    }

    get isTypeRootPath() {
        return this.#isTypeRootPath;
    }

    key() {
        return this.#key;
    }

    href() {
        const subpath = this.#subpath;
        if (!subpath) {
            return this.#key;
        }

        return subpath;
    }

    #pathname() {
        const key = this.#key;
        if (key === '.') {
            return PKG_NAME;
        }

        return `${PKG_NAME}/${key}`;
    }

    toString() {
        const name = this.#pathname();
        const href = `${RELATIVE_PATH_TO_SRC_DIR_IN_MONOREPO}/${this.href()}.ts`;

        const anchor = `[${name}](${href})`;
        let link = '';
        const message = this.#message;
        if (message !== null) {
            link = this.#buildLinkTextWithMessage(anchor, message);
        } else {
            link = this.#buildLinkTextWithoutMessage(anchor);
        }

        return `- ${link}`;
    }

    #buildLinkTextWithMessage(anchor, message) {
        const isDeprecated = this.#isDeprecated;
        const isExperimental = this.#isExperimental;

        if (isDeprecated) {
            return `${anchor} (__deprecated__. ${message})`;
        }

        if (isExperimental) {
            return `${anchor} (__experimental__. ${message})`;
        }

        return `${anchor}: ${message}`;
    }

    #buildLinkTextWithoutMessage(anchor) {
        const isDeprecated = this.#isDeprecated;
        const isExperimental = this.#isExperimental;

        if (isDeprecated) {
            return `${anchor} (__deprecated__)`;
        }

        if (isExperimental) {
            return `${anchor} (__experimental__)`;
        }

        return anchor;
    }
}

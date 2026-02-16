import * as assert from 'node:assert/strict';

export class MarkdownListItem {
    #key;
    #publicApiPath;
    #hrefFromDocsDir;
    #isDeprecated;
    #message;
    #isExperimental;
    #isTypeRootPath;
    #isCorePrimitive;

    constructor(
        key,
        publicApiPath,
        hrefFromDocsDir,
        isDeprecated,
        message,
        isExperimental,
        isTypeRootPath,
        isCorePrimitive,
    ) {
        assert.ok(typeof key === 'string');
        assert.ok(typeof publicApiPath === 'string');
        assert.ok(typeof hrefFromDocsDir === 'string');
        assert.ok(typeof isDeprecated === 'boolean');
        assert.ok(typeof isExperimental === 'boolean');
        assert.ok(typeof isTypeRootPath === 'boolean');
        assert.ok(typeof isCorePrimitive === 'boolean');

        this.#key = key;
        this.#publicApiPath = publicApiPath;
        this.#hrefFromDocsDir = hrefFromDocsDir;
        this.#isDeprecated = isDeprecated;
        this.#message = message;
        this.#isExperimental = isExperimental;
        this.#isTypeRootPath = isTypeRootPath;
        this.#isCorePrimitive = isCorePrimitive;
        Object.freeze(this);
    }

    get isExperimental() {
        return this.#isExperimental;
    }

    get isTypeRootPath() {
        return this.#isTypeRootPath;
    }

    get isCorePrimitive() {
        return this.#isCorePrimitive;
    }

    key() {
        return this.#key;
    }

    toString() {
        const name = this.#publicApiPath;
        const href = this.#hrefFromDocsDir;

        const anchor = `[\`${name}\`](${href})`;
        /** @type {string} */
        let link;
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

        return `${anchor} (${message})`;
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

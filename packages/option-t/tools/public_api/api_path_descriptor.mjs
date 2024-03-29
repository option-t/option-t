import * as assert from 'node:assert/strict';

export class ApiPathDescriptor {
    #actualFilePath = null;
    #shouldHideInDoc = false;
    #createCompat = true;
    #isDeprecatedPath = false;

    constructor(actualFilePath) {
        this.#actualFilePath = actualFilePath;
        Object.seal(this);
    }

    get actualFilePath() {
        return this.#actualFilePath;
    }

    setActualFilePath(val) {
        assert.strictEqual(typeof val, 'string');
        this.#actualFilePath = val;
    }

    get shouldHideInDoc() {
        return this.#shouldHideInDoc;
    }

    setShouldHideInDoc(val) {
        assert.strictEqual(typeof val, 'boolean');
        this.#shouldHideInDoc = val;
    }

    get createCompat() {
        return this.#createCompat;
    }

    setCreateCompat(val) {
        assert.strictEqual(typeof val, 'boolean');
        this.#createCompat = val;
    }

    get isDeprecatedPath() {
        return this.#isDeprecatedPath;
    }

    setIsDeprecatedPath(val) {
        assert.strictEqual(typeof val, 'boolean');
        this.#isDeprecatedPath = val;
    }

    clone() {
        const newly = new ApiPathDescriptor();
        newly.#actualFilePath = this.#actualFilePath;
        newly.#shouldHideInDoc = this.#shouldHideInDoc;
        newly.#createCompat = this.#createCompat;
        return newly;
    }
}

export function pathRedirectionTo(actualFilePath) {
    const desc = new ApiPathDescriptor(actualFilePath);
    return Object.freeze(desc);
}

export function pathRedirectionForLegacy(actualFilePath) {
    const desc = new ApiPathDescriptor(actualFilePath);
    desc.setShouldHideInDoc(true);
    return Object.freeze(desc);
}

export function pathRedirectionMarkedAsDeprecated(actualFilePath) {
    const desc = new ApiPathDescriptor(actualFilePath);
    desc.setIsDeprecatedPath(true);
    return Object.freeze(desc);
}

export function pathRedirectionForRoot(actualFilePath) {
    const desc = new ApiPathDescriptor(actualFilePath);
    desc.setShouldHideInDoc(true);
    desc.setCreateCompat(false);
    return Object.freeze(desc);
}

export function modifyDescriptor(descriptor, moduleType) {
    const actualFilePath = descriptor.actualFilePath;
    if (!actualFilePath) {
        return descriptor;
    }

    const newDescriptor = descriptor.clone();
    newDescriptor.setActualFilePath(`${moduleType}/${actualFilePath}`);

    return Object.freeze(newDescriptor);
}

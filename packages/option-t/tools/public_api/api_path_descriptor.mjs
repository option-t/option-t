import * as assert from 'node:assert/strict';

export class ApiPathDescriptor {
    #actualFilePath = null;
    #isTypeRootPath = false;
    #shouldHideInDoc = false;
    #isDeprecatedPath = false;
    #isExperimental = false;
    #message = null;

    constructor(actualFilePath) {
        this.#actualFilePath = actualFilePath;
        Object.seal(this);
    }

    get actualFilePath() {
        return this.#actualFilePath;
    }

    get shouldHideInDoc() {
        return this.#shouldHideInDoc;
    }

    setShouldHideInDoc(val) {
        assert.strictEqual(typeof val, 'boolean');
        this.#shouldHideInDoc = val;
    }

    get isDeprecatedPath() {
        return this.#isDeprecatedPath;
    }

    setIsDeprecatedPath(val) {
        assert.strictEqual(typeof val, 'boolean');
        this.#isDeprecatedPath = val;
    }

    get isExperimental() {
        return this.#isExperimental;
    }

    setIsExperimental(val) {
        assert.strictEqual(typeof val, 'boolean');
        this.#isExperimental = val;
    }

    setIsTypeRootPath(val) {
        assert.strictEqual(typeof val, 'boolean');
        this.#isTypeRootPath = val;
    }

    get isTypeRootPath() {
        return this.#isTypeRootPath;
    }

    setMessage(message) {
        assert.ok(typeof message === 'string' || message === null);
        this.#message = message;
    }

    get message() {
        return this.#message;
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

export function pathRedirectionMarkedAsTypeRoot(actualFilePath) {
    const desc = new ApiPathDescriptor(actualFilePath);
    desc.setIsTypeRootPath(true);
    return Object.freeze(desc);
}

export function pathRedirectionMarkedAsTypeRootNamespace(actualFilePath) {
    const desc = new ApiPathDescriptor(actualFilePath);
    desc.setIsTypeRootPath(true);
    desc.setMessage(
        `We don't recommend to use this without TypeScript to make it hard to follow future breaking changes.`,
    );
    return Object.freeze(desc);
}

export function pathRedirectionMarkedAsDeprecated(actualFilePath, message) {
    const desc = new ApiPathDescriptor(actualFilePath);
    desc.setIsDeprecatedPath(true, message);
    desc.setMessage(message);
    return Object.freeze(desc);
}

export function pathRedirectionForRoot(actualFilePath) {
    const desc = new ApiPathDescriptor(actualFilePath);
    desc.setShouldHideInDoc(true);
    return Object.freeze(desc);
}

export function pathRedirectionToAsExperimental(actualFilePath) {
    const desc = new ApiPathDescriptor(actualFilePath);
    desc.setIsExperimental(true);
    return Object.freeze(desc);
}

export function pathExperimentalAndHidden(actualFilePath) {
    const desc = new ApiPathDescriptor(actualFilePath);
    desc.setShouldHideInDoc(true);
    desc.setIsExperimental(true);
    return Object.freeze(desc);
}

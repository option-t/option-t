import * as assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';

/**
 *  @enum   {string}
 */
const ApiStability = Object.freeze({
    Stable: `stable: ${webcrypto.randomUUID()}`,
    Experimental: `experimental: ${webcrypto.randomUUID()}`,
    Deprecated: `deprecated: ${webcrypto.randomUUID()}`,
});

const apiStabilitySet = new Set([
    ApiStability.Stable,
    ApiStability.Experimental,
    ApiStability.Deprecated,
]);

export class ApiPathDescriptor {
    #actualFilePath = null;
    #isTypeRootPath = false;
    #isCorePrimitive = false;
    #shouldHideInDoc = false;
    #message = null;
    #stability = ApiStability.Stable;

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

    setApiStability(val) {
        assert.ok(apiStabilitySet.has(val));
        this.#stability = val;
    }

    get isDeprecatedPath() {
        return this.#stability === ApiStability.Deprecated;
    }

    get isExperimental() {
        return this.#stability === ApiStability.Experimental;
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

    setIsCorePrimitive() {
        this.#isCorePrimitive = true;
    }

    get isCorePrimitive() {
        return this.#isCorePrimitive;
    }
}

export function pathRedirectionTo(actualFilePath) {
    const desc = new ApiPathDescriptor(actualFilePath);
    return Object.freeze(desc);
}

export function pathRedirectionForLegacy(actualFilePath) {
    const desc = new ApiPathDescriptor(actualFilePath);
    desc.setApiStability(ApiStability.Deprecated);
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

export function pathRedirectionMarkedAsCorePrimitive(actualFilePath) {
    const desc = new ApiPathDescriptor(actualFilePath);
    desc.setIsCorePrimitive();
    return Object.freeze(desc);
}

export function pathRedirectionMarkedAsDeprecated(actualFilePath, message) {
    const desc = new ApiPathDescriptor(actualFilePath);
    desc.setApiStability(ApiStability.Deprecated);
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
    desc.setApiStability(ApiStability.Experimental);
    return Object.freeze(desc);
}

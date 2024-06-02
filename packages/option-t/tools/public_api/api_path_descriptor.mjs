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

/**
 *  @enum   {string}
 */
const ApiKind = Object.freeze({
    TypeRootPath: `type_root_path: ${webcrypto.randomUUID()}`,
    CorePrimitive: `core_primitive: ${webcrypto.randomUUID()}`,
    Operator: `operator: ${webcrypto.randomUUID()}`,
});

const apiKindSet = new Set([
    // @prettier-ignore
    ApiKind.TypeRootPath,
    ApiKind.CorePrimitive,
    ApiKind.Operator,
]);

export class ApiPathDescriptor {
    #actualFilePath = '';
    #shouldHideInDoc = false;
    #message = null;
    #stability = ApiStability.Stable;
    #kind = ApiKind.Operator;

    constructor(actualFilePath) {
        assert.ok(typeof actualFilePath === 'string');

        this.#actualFilePath = actualFilePath;
        Object.seal(this);

        assert.ok(apiStabilitySet.has(this.#stability));
        assert.ok(apiKindSet.has(this.#kind));
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

    setApiKind(val) {
        assert.ok(apiKindSet.has(val));
        this.#kind = val;
    }

    get isDeprecatedPath() {
        return this.#stability === ApiStability.Deprecated;
    }

    get isExperimental() {
        return this.#stability === ApiStability.Experimental;
    }

    get isTypeRootPath() {
        return this.#kind === ApiKind.TypeRootPath;
    }

    get isCorePrimitive() {
        return this.#kind === ApiKind.CorePrimitive;
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
    desc.setApiStability(ApiStability.Deprecated);
    desc.setShouldHideInDoc(true);
    return Object.freeze(desc);
}

export function pathRedirectionMarkedAsTypeRoot(actualFilePath) {
    const desc = new ApiPathDescriptor(actualFilePath);
    desc.setApiKind(ApiKind.TypeRootPath);
    return Object.freeze(desc);
}

export function pathRedirectionMarkedAsTypeRootNamespace(actualFilePath) {
    const desc = new ApiPathDescriptor(actualFilePath);
    desc.setApiKind(ApiKind.TypeRootPath);
    desc.setMessage(
        `We don't recommend to use this without TypeScript due to it would be hard to follow future breaking changes.`,
    );
    return Object.freeze(desc);
}

export function pathRedirectionMarkedAsCorePrimitive(actualFilePath) {
    const desc = new ApiPathDescriptor(actualFilePath);
    desc.setApiKind(ApiKind.CorePrimitive);
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

import { ERR_MSG_INPUT_IS_FROZEN_NOT_CAST_TO_MUTABLE } from './error_message.js';

export function assertIsErrorInstance(input: unknown, message: string): asserts input is Error {
    const ok = input instanceof Error;
    if (ok) {
        return;
    }

    // We don't throw Node's AssertionError because the code size will be larger.
    const e = new TypeError(message, {
        cause: input,
    });

    // Check each time to avoid the timing problem to install the polyfill.
    // FIXME(#1833): We should remove this path.
    if (e.cause !== input && Object.isExtensible(e)) {
        installErrorCauseAsPolyfill(e, input);
    }

    throw e;
}

function installErrorCauseAsPolyfill(e: TypeError, input: unknown) {
    // see https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-installerrorcause
    Object.defineProperty(e, 'cause', {
        value: input,
        writable: true,
        enumerable: false,
        configurable: true,
    });
}

export function assertIsFrozen(input: unknown): void {
    if (Object.isFrozen(input)) {
        throw new TypeError(ERR_MSG_INPUT_IS_FROZEN_NOT_CAST_TO_MUTABLE);
    }
}

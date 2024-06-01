import { ERR_MSG_INPUT_IS_FROZEN_NOT_CAST_TO_MUTABLE } from './error_message.js';

export function isCurrentRealmErrorInstance(input: unknown): input is Error {
    const ok = input instanceof Error;
    return ok;
}

export function assertIsErrorInstance(input: unknown, message: string): asserts input is Error {
    if (isCurrentRealmErrorInstance(input)) {
        return;
    }

    // We don't throw Node's AssertionError because the code size will be larger.
    const e = new TypeError(message, {
        cause: input,
    });
    throw e;
}

export function assertIsFrozen(input: unknown): void {
    if (Object.isFrozen(input)) {
        throw new TypeError(ERR_MSG_INPUT_IS_FROZEN_NOT_CAST_TO_MUTABLE);
    }
}

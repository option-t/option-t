import { ERR_MSG_INPUT_IS_FROZEN_NOT_CAST_TO_MUTABLE } from './error_message.js';

export function assertIsErrorInstance(input: unknown, message: string): asserts input is Error {
    const ok = input instanceof Error;
    if (!ok) {
        const stringified = String(input);
        const msg = `${message} The actual is \`${stringified}\``;
        // We don't throw Node's AssertionError because the code size will be larger.
        throw new TypeError(msg, {
            cause: input,
        });
    }
}

export function assertIsFrozen(input: unknown): void {
    if (Object.isFrozen(input)) {
        throw new TypeError(ERR_MSG_INPUT_IS_FROZEN_NOT_CAST_TO_MUTABLE);
    }
}

export function assertIsArray(input: unknown, message: string): asserts input is Array<unknown> {
    if (Array.isArray(input)) {
        return;
    }

    throw new TypeError(message);
}

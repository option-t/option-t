import { ERR_MSG_INPUT_IS_FROZEN_NOT_CAST_TO_MUTABLE } from './ErrorMessage.js';

export function assertIsPromise(
    input: unknown,
    message: string
): asserts input is Promise<unknown> {
    if (!(input instanceof Promise)) {
        // We don't throw Node's AssertionError because the code size will be larger.
        throw new TypeError(message, {
            cause: input,
        });
    }
}

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

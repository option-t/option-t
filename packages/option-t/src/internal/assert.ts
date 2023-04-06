import { ERR_MSG_INPUT_IS_FROZEN_NOT_CAST_TO_MUTABLE } from './error_message.js';

interface StringifyResult {
    cause: unknown;
    text: string;
}

function tryToString(input: unknown, message: string): StringifyResult {
    // We would not like to use `Nullable<T>` here to avoid complex module dependency cycle.
    let caught: Error | null = null;
    let stringified = '';

    try {
        stringified = String(input);
    } catch (e) {
        caught = new TypeError(`fail toString()`, {
            cause: e,
        });
    }

    const isSuccessStringify = !caught;
    const cause = isSuccessStringify ? input : caught;
    const text = isSuccessStringify ? `${message} The actual is \`${stringified}\`` : message;

    return {
        cause,
        text,
    };
}

export function assertIsErrorInstance(input: unknown, message: string): asserts input is Error {
    const ok = input instanceof Error;
    if (ok) {
        return;
    }

    // FIXME: https://github.com/option-t/option-t/issues/1832
    // We should only use `Error.prototype.cause`.
    const { cause, text } = tryToString(input, message);
    // We don't throw Node's AssertionError because the code size will be larger.
    throw new TypeError(text, {
        cause,
    });
}

export function assertIsFrozen(input: unknown): void {
    if (Object.isFrozen(input)) {
        throw new TypeError(ERR_MSG_INPUT_IS_FROZEN_NOT_CAST_TO_MUTABLE);
    }
}

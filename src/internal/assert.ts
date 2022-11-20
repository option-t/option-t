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

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

export function assertIsError(input: unknown): asserts input is Error {
    if (!(input instanceof Error)) {
        const stringified = String(input);
        const message = `The input is not an \`Error\` instance. The actual is \`${stringified}\``;
        // We don't throw Node's AssertionError because the code size will be larger.
        throw new TypeError(message, {
            cause: input,
        });
    }
}

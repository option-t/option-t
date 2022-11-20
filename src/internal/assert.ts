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

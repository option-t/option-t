function isPromise(input: unknown): input is Promise<unknown> {
    const ok = input instanceof Promise;
    return ok;
}

export function assertIsPromise(
    input: unknown,
    message: string
): asserts input is Promise<unknown> {
    if (!isPromise(input)) {
        // We don't throw Node's AssertionError because the code size will be larger.
        throw new TypeError(message);
    }
}

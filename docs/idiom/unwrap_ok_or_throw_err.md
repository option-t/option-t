# Unwrap if _result_ is `Ok(T)`, otherwise throw an inner value of `Err(E)`

```typescript
import { type Result, isOk } from 'option-t/PlainResult/Result';
import { unwrapOkFromResult, unwrapErrFromResult } from 'option-t/PlainResult/unwrap';

class NotErrorInstanceError extends TypeError {
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options);
        this.name = this.constructor.name;
    }
}

export function unwrapOrThrowInnerIfErr<T, E extends Error>(result: Result<T, E>): T {
    if (isOk(result)) {
        const val: T = unwrapOkFromResult(result);
        return val;
    }

    const e = unwrapErrFromResult(result);
    if (e instanceof Error) {
        throw e;
    }

    const message = `${String(e)} is not Error instance. This function can throw Error`;
    throw new NotErrorInstanceError(message);
}
```

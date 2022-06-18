# Convert from PromiseSettledResult<T>) to `PlainResult`

```typescript
import type { Result, createOk, createErr } from 'option-t/PlainResult/Result';

function convertFromPromiseSettledResultToPlainResult<T>(input: PromiseSettledResult<T>): Result<T, unknown> {
    switch (input.status) {
        case 'fulfilled': {
            const value = input.value;
            const ok = createOk(value);
            return ok;
        }
        case 'rejected': {
            const reason = input.reason;
            const err = createErr(reason);
            return err;
        }
        default:
            throw new TypeError(`unknown PromiseSettledResult status: ${input.status}`);
    }
}
```

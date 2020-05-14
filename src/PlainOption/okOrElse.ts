import { Option } from './Option.ts';
import { Result, createErr, createOk } from '../PlainResult/Result.ts';
import { RecoveryFn } from '../shared/Function.ts';

/**
 * Transforms the `Option<T>` into a `Result<T, E>`, mapping `Some(v)` to `Ok(v)` and `None` to `Err(err())`.
 */
export function okOrElseForPlainOption<T, E>(input: Option<T>, err: RecoveryFn<E>): Result<T, E> {
    if (input.ok) {
        const v = createOk<T>(input.val);
        return v;
    }
    else {
        const e: E = err();
        const v = createErr<E>(e);
        return v;
    }
}

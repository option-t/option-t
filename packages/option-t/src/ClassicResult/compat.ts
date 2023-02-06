import { Result as PlainResult, createOk, createErr, isOk } from '../PlainResult/Result.js';
import { unwrapOkFromResult, unwrapErrFromResult } from '../PlainResult/unwrap.js';

import { ClassicResult, createClassicOk, createClassicErr } from './ClassicResult.js';

export function compatToPlainResult<T, E>(classic: ClassicResult<T, E>): PlainResult<T, E> {
    if (classic.isOk()) {
        const val: T = classic.unwrap();
        const result = createOk<T>(val);
        return result;
    }

    const e: E = classic.unwrapErr();
    const result = createErr<E>(e);
    return result;
}

export function compatToClassicResult<T, E>(plain: PlainResult<T, E>): ClassicResult<T, E> {
    if (isOk(plain)) {
        const val: T = unwrapOkFromResult(plain);
        const result = createClassicOk<T, E>(val);
        return result;
    }

    const e: E = unwrapErrFromResult(plain);
    const result = createClassicErr<T, E>(e);
    return result;
}

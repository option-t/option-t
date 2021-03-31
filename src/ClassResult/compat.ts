import { Result as PlainResult, createOk, createErr, isOk } from '../PlainResult/Result';
import { unwrapFromResult, unwrapErrFromResult } from '../PlainResult/unwrap';

import { ClassicResult, createClassicOk, createClassicErr } from './ClassicResult';

export function compatToPlainResult<T, E>(classic: ClassicResult<T, E>): PlainResult<T, E> {
    if (classic.isOk()) {
        const val: T = classic.unwrap();
        const r = createOk<T>(val);
        return r;
    } else {
        const e: E = classic.unwrapErr();
        const r = createErr<E>(e);
        return r;
    }
}

export function compatToClassicResult<T, E>(plain: PlainResult<T, E>): ClassicResult<T, E> {
    if (isOk(plain)) {
        const val: T = unwrapFromResult(plain);
        const r = createClassicOk<T, E>(val);
        return r;
    } else {
        const e: E = unwrapErrFromResult(plain);
        const r = createClassicErr<T, E>(e);
        return r;
    }
}

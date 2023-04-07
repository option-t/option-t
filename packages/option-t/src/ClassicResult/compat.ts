import {
    type Result as PlainResult,
    createOk,
    createErr,
    isOk,
    unwrapOk,
    unwrapErr,
} from '../PlainResult/Result.js';

import { type ClassicResult, createClassicOk, createClassicErr } from './ClassicResult.js';

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
        const val: T = unwrapOk(plain);
        const result = createClassicOk<T, E>(val);
        return result;
    }

    const e: E = unwrapErr(plain);
    const result = createClassicErr<T, E>(e);
    return result;
}

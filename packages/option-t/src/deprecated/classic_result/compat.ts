import {
    type Result as PlainResult,
    createOk,
    createErr,
    isOk,
    unwrapOk,
    unwrapErr,
} from '../../plain_result/core/result.js';

import { type ClassicResult, createClassicOk, createClassicErr } from './classic_result.js';

export function compatToPlainResult<T, E>(classic: ClassicResult<T, E>): PlainResult<T, E> {
    if (classic.isOk()) {
        const val: T = classic.unwrap();
        const result = createOk<T>(val);
        return result;
    }

    const err: E = classic.unwrapErr();
    const result = createErr<E>(err);
    return result;
}

export function compatToClassicResult<T, E>(plain: PlainResult<T, E>): ClassicResult<T, E> {
    if (isOk(plain)) {
        const val: T = unwrapOk(plain);
        const result = createClassicOk<T, E>(val);
        return result;
    }

    const err: E = unwrapErr(plain);
    const result = createClassicErr<T, E>(err);
    return result;
}

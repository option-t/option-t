import { Option, createNone, createSome } from '../PlainOption/Option';
import { Result, isOk, isErr } from './Result';

export function toOptionFromOk<T, E>(v: Result<T, E>): Option<T> {
    if (isOk(v)) {
        return createSome<T>(v.val);
    }
    else {
        return createNone();
    }
}

export function toOptionFromErr<T, E>(v: Result<T, E>): Option<E> {
    if (isErr(v)) {
        return createSome<E>(v.err);
    }
    else {
        return createNone();
    }
}

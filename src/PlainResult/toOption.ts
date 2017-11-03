import { Option, createNone, createSome } from '../PlainOption/Option';
import { Result } from './Result';

export function toOptionFromOk<T, E>(v: Result<T, E>): Option<T> {
    if (v.ok) {
        return createSome<T>(v.val);
    }
    else {
        return createNone();
    }
}

export function toOptionFromErr<T, E>(v: Result<T, E>): Option<E> {
    if (!v.ok) {
        return createSome<E>(v.err);
    }
    else {
        return createNone();
    }
}

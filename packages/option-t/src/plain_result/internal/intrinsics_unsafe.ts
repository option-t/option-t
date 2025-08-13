import type { Ok, Err } from '../core/result.js';
import type { MutErr, MutOk } from './mutable.js';

// This is introduced to avoid to evaluate the guard if statement twice
// for implementing a operator.
export function unsafeUnwrapValueInOkWithoutAnyCheck<T>(input: Ok<T>): T {
    const val = input.val;
    return val;
}

// This is introduced to avoid to evaluate the guard if statement twice
// for implementing a operator.
export function unsafeUnwrapValueInErrWithoutAnyCheck<E>(input: Err<E>): E {
    const err = input.err;
    return err;
}

export function setUndefinedToValFieldOnOkDirectly(input: MutOk<unknown>): void {
    // This fill field by `undefined` to allow to release the previous value.
    // eslint-disable-next-line no-param-reassign
    input.val = undefined;
}

export function setUndefinedToErrFieldOnErrDirectly(input: MutErr<unknown>): void {
    // This fill field by `undefined` to allow to release the previous value.
    // eslint-disable-next-line no-param-reassign
    input.err = undefined;
}

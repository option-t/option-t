import type { Result } from '../core/result.js';

export function isNotSameOkField(
    lhs: Result<unknown, unknown>,
    rhs: Result<unknown, unknown>,
): boolean {
    const ok: boolean = getOkFieldFromResultDirectly(lhs) !== getOkFieldFromResultDirectly(rhs);
    return ok;
}

function getOkFieldFromResultDirectly<T>(input: Result<T, unknown>): boolean {
    const val: boolean = input.ok;
    return val;
}

export function isSameValField(
    lhs: Result<unknown, unknown>,
    rhs: Result<unknown, unknown>,
): boolean {
    const ok: boolean = getValFieldFromResultDirectly(lhs) === getValFieldFromResultDirectly(rhs);
    return ok;
}

function getValFieldFromResultDirectly<T>(input: Result<T, unknown>): T | null {
    const val: T | null = input.val;
    return val;
}

export function isSameErrField(
    lhs: Result<unknown, unknown>,
    rhs: Result<unknown, unknown>,
): boolean {
    const ok: boolean = getErrFieldFromResultDirectly(lhs) === getErrFieldFromResultDirectly(rhs);
    return ok;
}

function getErrFieldFromResultDirectly<E>(input: Result<unknown, E>): E | null {
    const err: E | null = input.err;
    return err;
}

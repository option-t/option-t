import { MayRecoveryFn } from './Function';
import { Undefinable, isNotUndefined } from './Undefinable';

export function orElseForUndefinable<T>(a: Undefinable<T>, b: MayRecoveryFn<T>): Undefinable<T> {
    if (isNotUndefined(a)) {
        return a;
    }
    else {
        const r = b();
        return r;
    }
}

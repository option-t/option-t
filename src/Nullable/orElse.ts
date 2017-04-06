import { MayRecoveryFn } from './Function';
import { Nullable, isNotNull } from './Nullable';

export function orElseForNullable<T>(a: Nullable<T>, b: MayRecoveryFn<T>): Nullable<T> {
    if (isNotNull(a)) {
        return a;
    }
    else {
        const r = b();
        return r;
    }
}
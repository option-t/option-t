import { FilterFn } from '../shared/Function';
import { Option, createNone, createSome } from './Option';

export function filterForOption<T>(src: Option<T>, predicate: FilterFn<T>): Option<T> {
    if (!src.ok) {
        return createNone();
    }

    const val: T = src.val;
    const ok: boolean = predicate(val);
    if (!ok) {
        return createNone();
    }

    return createSome(val);
}

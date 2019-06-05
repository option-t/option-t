import { Option, isNone, createNone } from './Option';
import { FilterFn } from '../shared/Function';

/**
 *  Returns `None` if the option is `None`,
 *  otherwise the result should be resolved by the result of _predicate_ with the wrapped value as the arguments:
 *
 *      * `Some(t)` if _predicate_ returns `true`.
 *      * `None` if _predicate_ returns `false`.
 */
export function filterForOption<T>(input: Option<T>, predicate: FilterFn<T>): Option<T> {
    if (isNone(input)) {
        return input;
    }

    const ok: boolean = predicate(input.val);
    if (!ok) {
        return createNone();
    }

    const r: Option<T> = input;
    return r;
}

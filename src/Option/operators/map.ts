import { MapFn } from '../../shared/Function';
import { Option, OperatorFunction, createSome } from '../../Option';

/**
 *  Map an `Option<T>` to `Option<U>` by applying a function to the contained value.
 *
 *  @param  fn
 *      The function which is applied to the contained value and return the result
 *      if the self is a `Some<T>`.
 */
export function map<T, U>(fn: MapFn<T, U>): OperatorFunction<T, U> {
    const op: OperatorFunction<T, U> = (s) => {
        return operateMap(s, fn);
    };
    return op;
}

function operateMap<T, U>(s: Option<T>, fn: MapFn<T, U>): Option<U> {
    if (s.isNone) {
        // cheat to escape from a needless allocation.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return s as any;
    }

    const inner = s.unwrap();
    const value = fn(inner);
    const option = createSome(value);
    return option;
}

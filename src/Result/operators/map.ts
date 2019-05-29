import { MapFn } from '../../shared/Function';
import { Result, OkOperatorFunction, createOk } from '../../Result';

export function map<T, U, E>(fn: MapFn<T, U>): OkOperatorFunction<T, E, U> {
    const op: OkOperatorFunction<T, E, U> = (s) => {
        return operateMapForResultClass(s, fn);
    };
    return op;
}

function operateMapForResultClass<T, U, E>(s: Result<T, E>, fn: MapFn<T, U>): Result<U, E> {
    if (s.isErr()) {
        // cheat to escape from a needless allocation.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return s as any;
    }

    const inner: T = s.unwrap();
    const value: U = fn(inner);
    const result: Result<U, E> = createOk<U, E>(value);
    return result;
}

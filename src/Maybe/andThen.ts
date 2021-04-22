import { TransformFn } from '../shared/Function';
import { Maybe, isNotNullAndUndefined } from './Maybe';

export type MaybeTryTransformFn<T, U> = TransformFn<T, Maybe<U>>;

/**
 *  @deprecated Use MaybeTryTransformFn in the same module.
 */
export type FlatmapFn<T, U> = MaybeTryTransformFn<T, U>;

/**
 *  Returns `null` or `undefined` if the _input_ is `null` or `undefined`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | null | undefined`.
 */
export function andThenForMaybe<T, U>(
    input: Maybe<T>,
    transformer: MaybeTryTransformFn<T, U>
): Maybe<U> {
    if (isNotNullAndUndefined(input)) {
        const r = transformer(input);
        return r;
    } else {
        return input;
    }
}

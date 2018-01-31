import { expectNotNullAndUndefined } from './expect';
import { ERR_MSG_SELECTOR } from './ErrorMessage';
import { MapFn } from '../utils/Function';
import { Maybe } from './Maybe';

export function mapForMaybe<T, U>(src: Maybe<T>, selector: MapFn<T, U>): Maybe<U> {
    if (src !== undefined && src !== null) {
        const r: U = selector(src);
        // XXX:
        // If `U` is `Maybe<SomeType>`, we think naturally the returned value of this function would be
        // the nested type `Maybe<Maybe<SomeType>>`. But this type means `(SomeType | null | undefined) | null | undefined`.
        // So a type checker would recognize this type as `SomeType | null | undefined`. So it's flattened.
        // Then the user should call `andThen` (_flatmap_) operation instead of this.
        return expectNotNullAndUndefined(r, ERR_MSG_SELECTOR);
    }
    else {
        return src;
    }
}

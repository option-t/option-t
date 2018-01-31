import { ERR_MSG_SELECTOR } from './ErrorMessage';
import { expectNotUndefined } from './expect';
import { MapFn } from '../utils/Function';
import { Undefinable } from './Undefinable';

export function mapForUndefinable<T, U>(src: Undefinable<T>, selector: MapFn<T, U>): Undefinable<U> {
    if (src !== undefined) {
        const r = selector(src);
        // XXX:
        // If `U` is `Undefinable<SomeType>`, we think naturally the returned value of this function would be
        // the nested type `Undefinable<Undefinable<SomeType>>`. But this type means `(SomeType | undefined) | undefined`.
        // So a type checker would recognize this type as `SomeType | undefined`. So it's flattened.
        // Then the user should call `andThen` (_flatmap_) operation instead of this.
        return expectNotUndefined(r, ERR_MSG_SELECTOR);
    }
    else {
        return src;
    }
}

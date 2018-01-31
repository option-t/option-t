import { expectNotNull } from './expect';
import { ERR_MSG_SELECTOR } from './ErrorMessage';
import { MapFn } from '../utils/Function';
import { Nullable } from './Nullable';

export function mapForNullable<T, U>(src: Nullable<T>, selector: MapFn<T, U>): Nullable<U> {
    if (src !== null) {
        const r = selector(src);
        // XXX:
        // If `U` is `Nullable<SomeType>`, we think naturally the returned value of this function would be
        // the nested type `Nullable<Nullable<SomeType>>`. But this type means `(SomeType | null) | null`.
        // So a type checker would recognize this type as `SomeType | null`. So it's flattened.
        // Then the user should call `andThen` (_flatmap_) operation instead of this.
        return expectNotNull(r, ERR_MSG_SELECTOR);
    }
    else {
        return src;
    }
}

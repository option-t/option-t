import { expectNotNull } from './expect';
import { ERR_MSG_SELECTOR } from './ErrorMessage';
import { MapFn } from '../utils/Function';
import { Nullable, isNotNull } from './Nullable';

export function mapForNullable<T, U>(src: Nullable<T>, selector: MapFn<T, U>): Nullable<U> {
    if (isNotNull(src)) {
        const r = selector(src);
        return expectNotNull(r, ERR_MSG_SELECTOR);
    }
    else {
        return src;
    }
}

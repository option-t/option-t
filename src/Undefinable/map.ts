import { ERR_MSG_SELECTOR } from './ErrorMessage';
import { expectNotUndefined } from './expect';
import { MapFn } from '../utils/Function';
import { Undefinable } from './Undefinable';

export function mapForUndefinable<T, U>(src: Undefinable<T>, selector: MapFn<T, U>): Undefinable<U> {
    if (src !== undefined) {
        const r = selector(src);
        return expectNotUndefined(r, ERR_MSG_SELECTOR);
    }
    else {
        return src;
    }
}

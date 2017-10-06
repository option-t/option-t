import { expectNotNullAndUndefined } from './expect';
import { ERR_MSG_SELECTOR } from './ErrorMessage';
import { MapFn } from '../utils/Function';
import { Maybe, isNotNullAndUndefined } from './Maybe';

export function mapForMaybe<T, U>(src: Maybe<T>, selector: MapFn<T, U>): Maybe<U> {
    if (isNotNullAndUndefined(src)) {
        const r = selector(src);
        return expectNotNullAndUndefined(r, ERR_MSG_SELECTOR);
    }
    else {
        return src;
    }
}

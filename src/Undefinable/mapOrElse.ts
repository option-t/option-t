import { ERR_MSG_SELECTOR, ERR_MSG_MUST_NOT_RETURN_UNDEF } from './ErrorMessage';
import { expectNotUndefined } from './expect';
import { RecoveryFn, MapFn } from '../utils/Function';
import { Undefinable, isNotUndefined } from './Undefinable';

export function mapOrElseForUndefinable<T, U>(src: Undefinable<T>, def: RecoveryFn<U>, selector: MapFn<T, U>): U {
    let r: U;
    let msg = '';
    if (isNotUndefined(src)) {
        r = selector(src);
        msg = ERR_MSG_SELECTOR;
    }
    else {
        r = def();
        msg = '`def`' + ERR_MSG_MUST_NOT_RETURN_UNDEF;
    }
    return expectNotUndefined(r, msg);
}

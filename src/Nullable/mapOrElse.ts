import { expectNotNull } from './expect';
import { ERR_MSG_MUST_NOT_RETURN_NULL, ERR_MSG_SELECTOR } from './ErrorMessage';
import { MapFn, RecoveryFn } from './Function';
import { Nullable, isNotNull } from './Nullable';

export function mapOrElseForNullable<T, U>(src: Nullable<T>, def: RecoveryFn<U>, selector: MapFn<T, U>): U {
    let r: U;
    let msg = '';
    if (isNotNull(src)) {
        r = selector(src);
        msg = ERR_MSG_SELECTOR;
    }
    else {
        r = def();
        msg = '`def`' + ERR_MSG_MUST_NOT_RETURN_NULL;
    }
    return expectNotNull(r, msg);
}
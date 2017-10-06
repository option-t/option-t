import { Nullable, isNotNull } from './Nullable';
import { expectNotNull } from './expect';
import { ERR_MSG_SELECTOR } from './ErrorMessage';
import { MapFn } from '../utils/Function';

export function mapOrForNullable<T, U>(src: Nullable<T>, def: U, selector: MapFn<T, U>): U {
    let r: U;
    let msg = '';
    if (isNotNull(src)) {
        r = selector(src);
        msg = ERR_MSG_SELECTOR;
    }
    else {
        r = def;
        msg = '`def` must not be `null`';
    }
    return expectNotNull(r, msg);
}

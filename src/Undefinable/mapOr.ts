import { ERR_MSG_SELECTOR } from './ErrorMessage';
import { expectNotUndefined } from './expect';
import { MapFn } from '../utils/Function';
import { Undefinable, isNotUndefined } from './Undefinable';

export function mapOrForUndefinable<T, U>(src: Undefinable<T>, def: U, selector: MapFn<T, U>): U {
    let r: U;
    let msg = '';
    if (isNotUndefined(src)) {
        r = selector(src);
        msg = ERR_MSG_SELECTOR;
    }
    else {
        r = def;
        msg = '`def` must not be `undefined`';
    }
    return expectNotUndefined(r, msg);
}

import { Option, isSome } from './Option';
import { MapFn } from './Function';

export function mapOrForOption<T, U>(src: Option<T>, def: U, selector: MapFn<T, U>): U {
    let r: U;
    if (isSome(src)) {
        r = selector(src.val);
    }
    else {
        r = def;
    }
    return r;
}

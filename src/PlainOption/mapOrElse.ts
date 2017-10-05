import { MapFn, RecoveryFn } from './Function';
import { Option, isSome } from './Option';

export function mapOrElseForOption<T, U>(src: Option<T>, def: RecoveryFn<U>, selector: MapFn<T, U>): U {
    let r: U;
    if (isSome(src)) {
        r = selector(src.val);
    }
    else {
        r = def();
    }
    return r;
}

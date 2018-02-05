import { MapFn, RecoveryFn } from '../shared/Function';
import { Option } from './Option';

export function mapOrElseForOption<T, U>(src: Option<T>, def: RecoveryFn<U>, selector: MapFn<T, U>): U {
    let r: U;
    if (src.ok) {
        r = selector(src.val);
    }
    else {
        r = def();
    }
    return r;
}

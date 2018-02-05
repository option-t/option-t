import { Option } from './Option';
import { MapFn } from '../shared/Function';

export function mapOrForOption<T, U>(src: Option<T>, def: U, selector: MapFn<T, U>): U {
    let r: U;
    if (src.ok) {
        r = selector(src.val);
    }
    else {
        r = def;
    }
    return r;
}

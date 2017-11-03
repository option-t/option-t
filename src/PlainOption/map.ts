import { MapFn } from '../utils/Function';
import { Option, createSome } from './Option';

export function mapForOption<T, U>(src: Option<T>, selector: MapFn<T, U>): Option<U> {
    if (src.ok) {
        const r: U= selector(src.val);
        return createSome(r);
    }
    else {
        return src;
    }
}

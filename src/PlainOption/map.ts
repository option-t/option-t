import { MapFn } from '../utils/Function';
import { Option, isSome, createSome } from './Option';

export function mapForOption<T, U>(src: Option<T>, selector: MapFn<T, U>): Option<U> {
    if (isSome(src)) {
        const r: U= selector(src.val);
        return createSome(r);
    }
    else {
        return src;
    }
}

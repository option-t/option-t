import { TapFn } from '../shared/Function';
import { Option } from './Option';

export function tapOption<T>(v: Option<T>, fn: TapFn<T>): Option<T> {
    if (v.ok) {
        fn(v.val);
    }
    return v;
}

import { TapFn } from '../shared/Function';
import { Option } from './Option';

export function tapOption<T>(v: Option<T>, fn: TapFn<T>): void {
    if (!v.ok) {
        return;
    }

    fn(v.val);
}

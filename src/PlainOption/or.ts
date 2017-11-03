import { Option } from './Option';

export function orForOption<T>(a: Option<T>, b: Option<T>): Option<T> {
    return a.ok ? a : b;
}

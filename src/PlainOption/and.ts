import { Option } from './Option';

export function andForOption<T, U>(a: Option<T>, b: Option<U>): Option<U> {
    return a.ok ? b : a;
}

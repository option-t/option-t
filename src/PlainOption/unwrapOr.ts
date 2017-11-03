import { Option } from './Option';

export function unwrapOrFromOption<T>(v: Option<T>, def: T): T {
    return v.ok ? v.val : def;
}

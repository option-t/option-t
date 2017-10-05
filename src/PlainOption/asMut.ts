import { Option, MutOption } from './Option';

export function asMutOption<T>(v: Option<T>): MutOption<T> {
    return v as MutOption<T>;
}

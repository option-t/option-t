import { Mutable } from '../shared/Mutable.ts';
import { Option } from './Option.ts';

/**
 *  This allows to mutate the value to save needless allocation.
 *
 *  We don't define `MutSome<T>` or `MutNone` because we can always mutable properties on `MutOption<T>`.
 *  This means that it's hard to check the type on static type system.
 */
export type MutOption<T> = Mutable<Option<T>>;

export function asMutOption<T>(v: Option<T>): MutOption<T> {
    return v as MutOption<T>;
}

import { Mutable } from '../shared/Mutable';
import { EffectFn } from '../shared/Function';
import { Option, Some } from './Option';
import { asMutOption } from './asMut';

type MutSome<T> = Mutable<Some<T>>;

/**
 *  The _mutator_ is called if _v_ is `Some<T>`.
 *
 *  This function allows you to cut the reference to the contain value from the inputted _v_.
 *  However, it would be unsafe operation if you do some more operation after this.
 *  For example, you can write the following code.
 *
 *  ```javascript
 *      const some = createSome(1);
 *      unsafeDropForOption(some, (some) => {
 *          some.ok = false;
 *      });
 *      isSome(some); // -> false. This is dangerous.
 *  ```
 *
 *  Compared to Rust, JavaScript does not have ownership semantics in language
 *  and this API is designed to use as a destructor or similar fashions.
 *  So if you call this for same object more than once, your code might contain "double free" problem.
 */
export function unsafeDropForOption<T>(v: Option<T>, mutator: EffectFn<MutSome<T>>): void {
    const mutable = asMutOption(v);
    if (mutable.ok) {
        mutator(mutable);
    }
}

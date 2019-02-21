import { Mutable } from '../shared/Mutable';
import { TapFn } from '../shared/Function';
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
 */
export function unsafeDropForOption<T>(v: Option<T>, mutator: TapFn<MutSome<T>>): void {
    const mutable = asMutOption(v);
    if (mutable.ok) {
        mutator(mutable);
    }
}

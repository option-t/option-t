import type { Mutable } from '../internal/mutable.js';
import type { EffectFn } from '../internal/function.js';
import { type Option, type Some, isSome } from './option.js';
import { asMutOption } from './as_mut.js';

export type MutSome<out T> = Mutable<Some<T>>;

export type UnsafeSomeDestructorFn<in T> = EffectFn<MutSome<T>>;

/**
 *  The _mutator_ is called if _input_ is `Some<T>`.
 *
 *  This function allows you to cut the reference to the contain value from the inputted _input_.
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
 *
 *  @throws
 *  This throw an `Error` instance if the _input_ is frozen.
 */
export function unsafeDropForOption<T>(input: Option<T>, mutator: UnsafeSomeDestructorFn<T>): void {
    const mutable = asMutOption(input);
    if (isSome(mutable)) {
        mutator(mutable);
        mutable.val = undefined as never;
    }

    // By this freezing, if this function is called to the _input_ again,
    // then this will throw a mutation error on releasing the value.
    //
    // We can do similar thing with `WeakSet`.
    // But we did not choose it way to avoid a side effect to initialize `WeakSet`.
    Object.freeze(mutable);
}

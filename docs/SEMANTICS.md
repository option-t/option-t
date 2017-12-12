# Semantics

This library represents [Option type](http://en.wikipedia.org/wiki/Option_type) in ECMAScript.

## `Option<T>`

This object will be the one of following states:

* `Some<T>`
    * `option instanceof OptionT.Some`
    * `option.isSome === true`.
* `None`
    * `option instanceof OptionT.None`
    * `option.isSome === false`.


This type is a interface to represent `Option<T>`.
`Some<T>` and `None` must implement this `Option<T>` interface.

This is just interface. This is not exported to an environment
which has no interface feature as a part of its type system like TypeScript.

If you'd like to check whether the object `option` is `Option<T>` or not in such an environment,
you can use `option instanceof OptionT.OptionBase` to check it.

But this way is not a tier-1 approach. __We recommend to use a interface and type system strongly__.

We export `OptionT.OptionBase` object to the type definition for TypeScript, but this is only for
the compatibility to cooperate with some libralies which are use `instanceof` checking
to work together with others in the pure JavaScript world.
Our basic stance is that __you should not use `OptionT.OptionBase`
and need not it in almost case in TypeScript or other static typed languages__.

### `Some<T>`

This type represents that there are **some values `T`**.
If this value wraps `null`, it just means that there is a null value.


### `None` (`None<T>`)

This type represents that there is **no value** explicitly.
It is just `None !== null`.

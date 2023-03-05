# Deprecated APIs

All deprecated items are marked as `@deprecated` in JSDoc.
But there're some level of deprecations.


## As Obsoleted (will remove in near futures)

They are marked as `@deprecated` but there are not in the next "As Not Recommended" section.


## As Not Recommended

We don't have any concrete plan to remove followings but do not recommend to use them in almost cases.


###  [`Option<T>` (`{ ok: true; val: T } | { ok: false; }`)](../docs/public_api_list.md#plainoption) (weak deprecated)

**Basically, we don't recommend to use this type. Use `Nullable`, `Undefinable<T>`, or `Maybe<T>` to express an absence of a value instead. In JavaScript, they would cover almost usecases. Probably, you might not have to use this type.**

This can express that there is some values or none _as a plain object_.
This does not have any property method on its prototype. But this allows no including unused methods of them.


### Wrapper objects (deprecated)

[See this guide](./wrapper_objects.md).

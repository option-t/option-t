# JSON Representation

## `Option<T>`

### `Some<T>`

`new Some(1)` will be:

```json
{
    "is_some": true,
    "value": 1
}
```

### `None`

`new None()` will be:

```json
{
    "is_some": false
}
```

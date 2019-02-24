# Express Progressive data

You might have to implement _content placeholder_ UI
to display long loading content progressively.

Then, if you develop such UI with React (or other similar libraries),
you would write a code like the following:

```javascript
import React from 'react';

function SomePlaceHolder(props) {
    const { isLoading } = props;
    if (isLoading) {
        return (
            <div>{'The data is still loading...'}</div>
        );
    }

    return (
        <div>{'The data has been loaded'}</div>
    );
}
```

`Promise` can express a progressive data structure
but we cannot get whether Promise is still progess or not synchronously.

If a library or framework requires to return a value synchronously
and they don't have any helper like [`React.Suspense()`](https://reactjs.org/docs/react-api.html#suspense) or you cannot use their helpers,
`Promise` might not suite to express a progressive state.


## `ProgressResult<T, E>`

`Result<T, E>` would be useful to express such progressive data.

```typescript
import { Result } from 'PlainResult/Result';

// pattern 1
type ProgressResult<T, E> = null | Result<T, E>;
// pattern 2
type ProgressResult<T, E> =
    {
        isProgress: true;
    } |
    {
        isProgress: false;
        result: Result<T, E>
    };
```

Of course, we can use `Option<T>` instead of `Result<T, E>`.
However, in generally, we recommend to use `Result<T, E>` because:

1. Long running tasks may be failure or cancelled.
2. We would like to know why the task is failed.
3. A failure reason sometimes would be important to decide a next behavior.

type _pattern 1_ is simple, but it cannot contain any extra information.
If you'd like to contain them for the future, type _pattern 2_ would be more nice.

By these types, the above example would be:

```typescript
import { Result } from 'option-t/esm/PlainResult/Result';
import React from 'react';

type ProgressResult<T, E> =
    {
        isProgress: true;
        percentage: number;
    } |
    {
        isProgress: false;
        result: Result<T, E>
    };

type SomePlaceHolderProps = {
    value: ProgressResult<string, Error>;
};

function SomePlaceHolder(props: SomePlaceHolderProps) {
    const { value } = props;
    if (value.isProgress) {
        const percentage = String(value.percentage);

        return (
            <div>
                {'The data is still loading...'}
                <br/>
                {`${percentage} is done`}
            </div>
        );
    }

    const result = value.result;
    if (!result.ok) {
        const e = String(result.err);
        return (
            <div>
                {`The task is failed with the reason ${e}`}
            </div>
        );
    }

    return (
        <div>
            {'The data has been loaded'}
            <br/>
            {result.val}
        </div>
    );
}
```


## Extra: sequence of progress with `Rx.Observable<T>`

By the combination with this definition and `Rx.Observable<T>`,
you can get a sequence of progress.

```typescript
type ProgressResult<T, E> =
    {
        isProgress: true;
        percentage: number;
    } |
    {
        isProgress: false;
        result: Result<T, E>
    };

declare function someTask(): Observable<ProgressResult<Bar, Foo>>;

const seq = doSomeLongRunning();

seq.subscribe(console.log);
// 1. { isProgress: true, percentage: 0 }
// 2. { isProgress: true, percentage: 30 }
// 3. { isProgress: true, percentage: 80 }
// 3. { isProgress: false, result: { ok: true, val: 'completed!', } }
```

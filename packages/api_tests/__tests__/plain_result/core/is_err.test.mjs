import test from 'ava';

import * as PlainResultRoot from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { isErr } from 'option-t/plain_result/result';

test(`exported alias' identity check`, (t) => {
    t.is(PlainResultRoot.isErr, isErr);
    t.is(PlainResultNamespace.isErr, isErr);
    t.is(PlainResultCompatV54.isErr, isErr);
});

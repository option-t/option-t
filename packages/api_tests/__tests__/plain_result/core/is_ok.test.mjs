import test from 'ava';

import * as PlainResultRoot from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { isOk } from 'option-t/plain_result/result';

test(`exported alias' identity check`, (t) => {
    t.is(PlainResultRoot.isOk, isOk);
    t.is(PlainResultNamespace.isOk, isOk);
    t.is(PlainResultCompatV54.isOk, isOk);
});

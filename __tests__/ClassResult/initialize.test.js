/*
 * MIT License
 *
 * Copyright (c) 2016 Tetsuharu OHZEKI <saneyuki.snyk@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import test from 'ava';

import { createOk, createErr } from '../../__dist/cjs/Result';

import {
    primitiveVal,
    objectVal,
    nonSerializableObjectVal,
    funcVal,
    symbolVal,
    undefinedVal,
} from '../utils';

const param = primitiveVal
    .concat(objectVal)
    .concat(nonSerializableObjectVal)
    .concat(funcVal)
    .concat(symbolVal)
    .concat(undefinedVal);

for (const value of param) {
    const type = typeof value;
    const label = 'OK<T>: type: ' + type + ', value: `' + String(value) + '`';
    test(label, (t) => {
        const result = createOk(value);

        t.is(Object.isSealed(result), true, 'should be sealed');
        t.is(result.isOk(), true, 'should be `Ok<T>`');
        t.is(result.isErr(), false, 'should not be `Err<E>`');
        t.is(result.isOk(), true, '`isOk` should be expected');
        t.is(result.isErr(), false, '`isErr` should be expected');
    });
}

for (const value of param) {
    const type = typeof value;
    const label = 'Err<E>: type: ' + type + ', value: `' + String(value) + '`';
    test(label, (t) => {
        const result = createErr(value);

        t.is(Object.isSealed(result), true, 'should be sealed');
        t.is(result.isOk(), false, 'should be `Err<E>`');
        t.is(result.isErr(), true, 'should not be `Ok<T>`');
        t.is(result.isOk(), false, '`isOk` should be expected');
        t.is(result.isErr(), true, '`isErr` should be expected');
    });
}

/**
 * MIT License
 *
 * Copyright (c) 2017 Tetsuharu OHZEKI <saneyuki.snyk@gmail.com>
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
export type Undefinable<T> = T | undefined;

export type MapFn<T, U> = (this: void, v: T) => U;
export type FlatmapFn<T, U> = (this: void, v: T) => Undefinable<U>;
export type RecoveryFn<T> = (this: void) => T;
export type MayRecoveryFn<T> = (this: void) => Undefinable<T>;
export type DoFn<T> = (this: void, v: T) => void;

export function isNotUndefined<T>(v: Undefinable<T>): v is T {
    return v !== undefined;
}

export function isUndefined<T>(v: Undefinable<T>): v is undefined {
    return v === undefined;
}

export function unwrapUndefinable<T>(v: Undefinable<T>): T | never {
    return expectNotUndefined(v, 'called with `undefined`');
}

export function unwrapOrFromUndefinable<T>(v: Undefinable<T>, def: T): T {
    return isNotUndefined(v) ? v : def;
}

export function unwrapOrElseFromUndefinable<T>(v: Undefinable<T>, def:  RecoveryFn<T>): T {
    return isNotUndefined(v) ? v : def();
}

export function expectNotUndefined<T>(v: Undefinable<T>, msg: string): T | never {
    if (isUndefined(v)) {
        throw TypeError(msg);
    }
    return v;
}

const ERR_MSG_MUST_NOT_RETURN_UNDEF = ' must not return `undefined`';
const ERR_MSG_SELECTOR = '`selector`' + ERR_MSG_MUST_NOT_RETURN_UNDEF;

export function mapForUndefinable<T, U>(src: Undefinable<T>, selector: MapFn<T, U>): Undefinable<U> {
    if (isNotUndefined(src)) {
        const r = selector(src);
        return expectNotUndefined(r, ERR_MSG_SELECTOR);
    }
    else {
        return src;
    }
}

export function flatmapForUndefinable<T, U>(src: Undefinable<T>, selector: FlatmapFn<T, U>): Undefinable<U> {
    if (isNotUndefined(src)) {
        const r = selector(src);
        return r;
    }
    else {
        return src;
    }
}

export function mapOrForUndefinable<T, U>(src: Undefinable<T>, def: U, selector: MapFn<T, U>): U {
    let r: U;
    let msg = '';
    if (isNotUndefined(src)) {
        r = selector(src);
        msg = ERR_MSG_SELECTOR;
    }
    else {
        r = def;
        msg = '`def` must not be `undefined`';
    }
    return expectNotUndefined(r, msg);
}

export function mapOrElseForUndefinable<T, U>(src: Undefinable<T>, def: RecoveryFn<U>, selector: MapFn<T, U>): U {
    let r: U;
    let msg = '';
    if (isNotUndefined(src)) {
        r = selector(src);
        msg = ERR_MSG_SELECTOR;
    }
    else {
        r = def();
        msg = '`def`' + ERR_MSG_MUST_NOT_RETURN_UNDEF;
    }
    return expectNotUndefined(r, msg);
}

/*
export function andUndefinable<T, U>(a: Undefinable<T>, b: Undefinable<U>): Undefinable<U> {
    return isNotUndefined(a) ? b : a;
}

export function andThenForUndefinable<T, U>(src: Undefinable<T>, fn: FlatmapFn<T, U>): Undefinable<U> {
    return flatmapForUndefinable(src, fn);
}

export function orUndefinable<T>(a: Undefinable<T>, b: Undefinable<T>): Undefinable<T> {
    return isNotUndefined(a) ? a : b;
}

export function orElseForUndefinable<T>(a: Undefinable<T>, b: MayRecoveryFn<T>): Undefinable<T> {
    if (isNotUndefined(a)) {
        return a;
    }
    else {
        const r = b();
        return r;
    }
}
*/

export function doOnUndefinable<T>(v: Undefinable<T>, fn: DoFn<T>): void {
    if (isUndefined(v)) {
        return;
    }

    fn(v);
}
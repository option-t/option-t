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
export type Nullable<T> = T | null;

export type MapFn<T, U> = (this: void, v: T) => U;
export type FlatmapFn<T, U> = (this: void, v: T) => Nullable<U>;
export type RecoveryFn<T> = (this: void) => T;
export type MayRecoveryFn<T> = (this: void) => Nullable<T>;
export type DoFn<T> = (this: void, v: T) => void;

export function isNotNull<T>(v: Nullable<T>): v is T {
    return v !== null;
}

export function isNull<T>(v: Nullable<T>): v is null {
    return v === null;
}

export function unwrapNullable<T>(v: Nullable<T>): T | never {
    return expectNotNull(v, 'called with `null`');
}

export function unwrapOrFromNullable<T>(v: Nullable<T>, def: T): T {
    return isNotNull(v) ? v : def;
}

export function unwrapOrElseFromNullable<T>(v: Nullable<T>, def:  RecoveryFn<T>): T {
    return isNotNull(v) ? v : def();
}

export function expectNotNull<T>(v: Nullable<T>, msg: string): T | never {
    if (isNull(v)) {
        throw TypeError(msg);
    }
    return v;
}

const ERR_MSG_MUST_NOT_RETURN_NULL = ' must not return `null`';
const ERR_MSG_SELECTOR = '`selector`' + ERR_MSG_MUST_NOT_RETURN_NULL;

export function mapForNullable<T, U>(src: Nullable<T>, selector: MapFn<T, U>): Nullable<U> {
    if (isNotNull(src)) {
        const r = selector(src);
        return expectNotNull(r, ERR_MSG_SELECTOR);
    }
    else {
        return src;
    }
}

export function flatmapForNullable<T, U>(src: Nullable<T>, selector: FlatmapFn<T, U>): Nullable<U> {
    if (isNotNull(src)) {
        const r = selector(src);
        return r;
    }
    else {
        return src;
    }
}

export function mapOrForNullable<T, U>(src: Nullable<T>, def: U, selector: MapFn<T, U>): U {
    let r: U;
    let msg = '';
    if (isNotNull(src)) {
        r = selector(src);
        msg = ERR_MSG_SELECTOR;
    }
    else {
        r = def;
        msg = '`def` must not be `null`';
    }
    return expectNotNull(r, msg);
}

export function mapOrElseForNullable<T, U>(src: Nullable<T>, def: RecoveryFn<U>, selector: MapFn<T, U>): U {
    let r: U;
    let msg = '';
    if (isNotNull(src)) {
        r = selector(src);
        msg = ERR_MSG_SELECTOR;
    }
    else {
        r = def();
        msg = '`def`' + ERR_MSG_MUST_NOT_RETURN_NULL;
    }
    return expectNotNull(r, msg);
}

/*
export function andNullable<T, U>(a: Nullable<T>, b: Nullable<U>): Nullable<U> {
    return isNotNull(a) ? b : a;
}

export function andThenForNullable<T, U>(src: Nullable<T>, fn: FlatmapFn<T, U>): Nullable<U> {
    return flatmapForNullable(src, fn);
}

export function orNullable<T>(a: Nullable<T>, b: Nullable<T>): Nullable<T> {
    return isNotNull(a) ? a : b;
}

export function orElseForNullable<T>(a: Nullable<T>, b: MayRecoveryFn<T>): Nullable<T> {
    if (isNotNull(a)) {
        return a;
    }
    else {
        const r = b();
        return r;
    }
}
*/

export function doOnNullable<T>(v: Nullable<T>, fn: DoFn<T>): void {
    if (isNull(v)) {
        return;
    }

    fn(v);
}
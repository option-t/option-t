import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './cjs/Nullable/Nullable': null,
        './cjs/Nullable/and': null,
        './cjs/Nullable/andThen': null,
        './cjs/Nullable/andThenAsync': null,
        './cjs/Nullable/compat/v33': null,
        './cjs/Nullable/expect': null,
        './cjs/Nullable/inspect': null,
        './cjs/Nullable': null,
        './cjs/Nullable/map': null,
        './cjs/Nullable/mapAsync': null,
        './cjs/Nullable/mapOr': null,
        './cjs/Nullable/mapOrAsync': null,
        './cjs/Nullable/mapOrElse': null,
        './cjs/Nullable/mapOrElseAsync': null,
        './cjs/Nullable/namespace': null,
        './cjs/Nullable/okOr': null,
        './cjs/Nullable/okOrElse': null,
        './cjs/Nullable/or': null,
        './cjs/Nullable/orElse': null,
        './cjs/Nullable/orElseAsync': null,
        './cjs/Nullable/toPlainResult': null,
        './cjs/Nullable/toUndefinable': null,
        './cjs/Nullable/unwrap': null,
        './cjs/Nullable/unwrapOr': null,
        './cjs/Nullable/unwrapOrElse': null,
        './cjs/Nullable/unwrapOrElseAsync': null,
        './cjs/Nullable/xor': null,

        './esm/Nullable/Nullable': null,
        './esm/Nullable/and': null,
        './esm/Nullable/andThen': null,
        './esm/Nullable/andThenAsync': null,
        './esm/Nullable/compat/v33': null,
        './esm/Nullable/expect': null,
        './esm/Nullable/inspect': null,
        './esm/Nullable': null,
        './esm/Nullable/map': null,
        './esm/Nullable/mapAsync': null,
        './esm/Nullable/mapOr': null,
        './esm/Nullable/mapOrAsync': null,
        './esm/Nullable/mapOrElse': null,
        './esm/Nullable/mapOrElseAsync': null,
        './esm/Nullable/namespace': null,
        './esm/Nullable/okOr': null,
        './esm/Nullable/okOrElse': null,
        './esm/Nullable/or': null,
        './esm/Nullable/orElse': null,
        './esm/Nullable/orElseAsync': null,
        './esm/Nullable/toPlainResult': null,
        './esm/Nullable/toUndefinable': null,
        './esm/Nullable/unwrap': null,
        './esm/Nullable/unwrapOr': null,
        './esm/Nullable/unwrapOrElse': null,
        './esm/Nullable/unwrapOrElseAsync': null,
        './esm/Nullable/xor': null,

        './Nullable': null,
        './Nullable/and': null,
        './Nullable/andThen': null,
        './Nullable/andThenAsync': null,
        './Nullable/compat/v33': null,
        './Nullable/expect': null,
        './Nullable/inspect': null,
        './Nullable/map': null,
        './Nullable/mapAsync': null,
        './Nullable/mapOr': null,
        './Nullable/mapOrAsync': null,
        './Nullable/mapOrElse': null,
        './Nullable/mapOrElseAsync': null,
        './Nullable/Nullable': null,
        './Nullable/namespace': null,
        './Nullable/okOr': null,
        './Nullable/okOrElse': null,
        './Nullable/or': null,
        './Nullable/orElse': null,
        './Nullable/orElseAsync': null,
        './Nullable/toPlainResult': null,
        './Nullable/toUndefinable': null,
        './Nullable/unwrap': null,
        './Nullable/unwrapOr': null,
        './Nullable/unwrapOrElse': null,
        './Nullable/unwrapOrElseAsync': null,
        './Nullable/xor': null,
    })
);
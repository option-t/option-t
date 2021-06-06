export const apiTable = Object.freeze({
    '.': {
        'path': 'index',
        'exports': []
    },

    'Maybe': {
        'path': 'Maybe/index',
        'exports': [
            'isNotNullAndUndefined',
            'isNullOrUndefined',
            'andThen',
            'andThenAsync',
            'expect',
            'map',
            'mapAsync',
            'mapOr',
            'mapOrAsync',
            'mapOrElse',
            'mapOrElseAsync',
            'orElse',
            'orElseAsync',
            'tap',
            'unwrap',
            'unwrapOr',
            'unwrapOrElse',
            'unwrapOrElseAsync',
        ]
    },
    'Maybe/and': {
        'exports': [
            'andForMaybe'
        ]
    },
    'Maybe/andThen': {
        'exports': [
            'andThenForMaybe'
        ]
    },
    'Maybe/andThenAsync': {
        'exports': [
            'andThenAsyncForMaybe'
        ]
    },
    'Maybe/expect': {
        'exports': [
            'expectNotNullAndUndefined'
        ]
    },
    'Maybe/map': {
        'exports': [
            'mapForMaybe'
        ]
    },
    'Maybe/mapAsync': {
        'exports': [
            'mapAsyncForMaybe'
        ]
    },
    'Maybe/Maybe': {
        'exports': [
            'isNotNullAndUndefined',
            'isNullOrUndefined',
        ]
    },
    'Maybe/mapOr': {
        'exports': [
            'mapOrForMaybe'
        ]
    },
    'Maybe/mapOrAsync': {
        'exports': [
            'mapOrAsyncForMaybe'
        ]
    },
    'Maybe/mapOrElse': {
        'exports': [
            'mapOrElseForMaybe'
        ]
    },
    'Maybe/mapOrElseAsync': {
        'exports': [
            'mapOrElseAsyncForMaybe'
        ]
    },
    'Maybe/or': {
        'exports': [
            'orForMaybe'
        ]
    },
    'Maybe/orElse': {
        'exports': [
            'orElseForMaybe'
        ]
    },
    'Maybe/orElseAsync': {
        'exports': [
            'orElseAsyncForMaybe'
        ]
    },
    'Maybe/tap': {
        'exports': [
            'tapMaybe'
        ]
    },
    'Maybe/unwrap': {
        'exports': [
            'unwrapMaybe'
        ]
    },
    'Maybe/unwrapOr': {
        'exports': [
            'unwrapOrFromMaybe'
        ]
    },
    'Maybe/unwrapOrElse': {
        'exports': [
            'unwrapOrElseFromMaybe'
        ]
    },
    'Maybe/unwrapOrElseAsync': {
        'exports': [
            'unwrapOrElseAsyncFromMaybe'
        ]
    },
    'Maybe/xor': {
        'exports': [
            'xorForMaybe'
        ]
    },

    'Nullable': {
        'path': 'Nullable/index',
        'exports': [
            'isNotNull',
            'isNull',
            'andThen',
            'andThenAsync',
            'expect',
            'map',
            'mapAsync',
            'mapOr',
            'mapOrAsync',
            'mapOrElse',
            'mapOrElseAsync',
            'orElse',
            'orElseAsync',
            'tap',
            'unwrap',
            'unwrapOr',
            'unwrapOrElse',
            'unwrapOrElseAsync',
        ]
    },
    'Nullable/and': {
        'exports': [
            'andForNullable',
        ]
    },
    'Nullable/andThen': {
        'exports': [
            'andThenForNullable'
        ]
    },
    'Nullable/andThenAsync': {
        'exports': [
            'andThenAsyncForNullable'
        ]
    },
    'Nullable/expect': {
        'exports': [
            'expectNotNull',
        ]
    },
    'Nullable/map': {
        'exports': [
            'mapForNullable'
        ]
    },
    'Nullable/mapAsync': {
        'exports': [
            'mapAsyncForNullable'
        ]
    },
    'Nullable/mapOr': {
        'exports': [
            'mapOrForNullable',
        ]
    },
    'Nullable/mapOrAsync': {
        'exports': [
            'mapOrAsyncForNullable',
        ]
    },
    'Nullable/mapOrElse': {
        'exports': [
            'mapOrElseForNullable'
        ]
    },
    'Nullable/mapOrElseAsync': {
        'exports': [
            'mapOrElseAsyncForNullable'
        ]
    },
    'Nullable/Nullable': {
        'exports': [
            'isNotNull',
            'isNull',
        ]
    },
    'Nullable/or': {
        'exports': [
            'orForNullable'
        ]
    },
    'Nullable/orElse': {
        'exports': [
            'orElseForNullable'
        ]
    },
    'Nullable/orElseAsync': {
        'exports': [
            'orElseAsyncForNullable'
        ]
    },
    'Nullable/tap': {
        'exports': [
            'tapNullable'
        ]
    },
    'Nullable/unwrap': {
        'exports': [
            'unwrapNullable'
        ]
    },
    'Nullable/unwrapOr': {
        'exports': [
            'unwrapOrFromNullable'
        ]
    },
    'Nullable/unwrapOrElse': {
        'exports': [
            'unwrapOrElseFromNullable'
        ]
    },
    'Nullable/unwrapOrElseAsync': {
        'exports': [
            'unwrapOrElseAsyncFromNullable'
        ]
    },
    'Nullable/xor': {
        'exports': [
            'xorForNullable'
        ]
    },

    'PlainOption': {
        'path': 'PlainOption/index',
        'exports': [
            'createSome',
            'createNone',
            'isSome',
            'isNone',
            'and',
            'andThen',
            'equal',
            'expect',
            'filter',
            'flatten',
            'map',
            'mapAsync',
            'mapOr',
            'mapOrElse',
            'or',
            'orElse',
            'transpose',
            'tap',
            'unwrap',
            'unwrapOr',
            'unwrapOrElse'
        ]
    },

    'PlainOption/and': {
        'exports': [
            'andForOption'
        ]
    },
    'PlainOption/andThen': {
        'exports': [
            'andThenForOption'
        ]
    },
    'PlainOption/asMut': {
        'exports': [
            'asMutOption'
        ]
    },
    'PlainOption/drop': {
        'exports': [
            'unsafeDropForOption'
        ]
    },
    'PlainOption/equal': {
        'exports': [
            'equalForOption'
        ]
    },
    'PlainOption/expect': {
        'exports': [
            'expectIsSome'
        ]
    },
    'PlainOption/filter': {
        'exports': [
            'filterForOption',
        ]
    },
    'PlainOption/flatten': {
        'exports': [
            'flattenForOption'
        ]
    },
    'PlainOption/map': {
        'exports': [
            'mapForOption'
        ]
    },
    'PlainOption/mapAsync': {
        'exports': [
            'mapAsyncForOption'
        ]
    },
    'PlainOption/mapOr': {
        'exports': [
            'mapOrForOption'
        ]
    },
    'PlainOption/mapOrElse': {
        'exports': [
            'mapOrElseForOption'
        ]
    },
    'PlainOption/okOr': {
        'exports': [
            'okOrForPlainOption'
        ]
    },
    'PlainOption/okOrElse': {
        'exports': [
            'okOrElseForPlainOption'
        ]
    },
    'PlainOption/Option': {
        'exports': [
            'isSome',
            'isNone',
            'createSome',
            'createNone'
        ]
    },
    'PlainOption/or': {
        'exports': [
            'orForOption'
        ]
    },
    'PlainOption/orElse': {
        'exports': [
            'orElseForOption'
        ]
    },
    'PlainOption/transpose': {
        'exports': [
            'transposeForOption'
        ]
    },
    'PlainOption/tap': {
        'exports': [
            'tapOption'
        ]
    },
    'PlainOption/unwrap': {
        'exports': [
            'unwrapOption'
        ]
    },
    'PlainOption/unwrapOr': {
        'exports': [
            'unwrapOrFromOption'
        ]
    },
    'PlainOption/unwrapOrElse': {
        'exports': [
            'unwrapOrElseFromOption'
        ]
    },
    'PlainOption/xor': {
        'exports': [
            'xorForOption'
        ]
    },

    'PlainResult': {
        'path': 'PlainResult/index',
        'exports': [
            'createOk',
            'createErr',
            'isOk',
            'isErr',
            'and',
            'andThen',
            'andThenAsync',
            'equal',
            'expect',
            'expectErr',
            'flatten',
            'map',
            'mapAsync',
            'mapOr',
            'mapOrAsync',
            'mapOrElse',
            'mapOrElseAsync',
            'mapErr',
            'mapErrAsync',
            'or',
            'orElse',
            'orElseAsync',
            'tapOk',
            'tapErr',
            'tapBoth',
            'transpose',
            'toOptionFromOk',
            'toOptionFromErr',
            'unwrap',
            'unwrapErr',
            'unwrapOr',
            'unwrapOrElse',
            'unwrapOrElseAsync',
        ]
    },


    'PlainResult/and': {
        'exports': [
            'andForResult'
        ]
    },
    'PlainResult/andThen': {
        'exports': [
            'andThenForResult'
        ]
    },
    'PlainResult/andThenAsync': {
        'exports': [
            'andThenAsyncForResult'
        ]
    },
    'PlainResult/asMut': {
        'exports': [
            'asMutResult'
        ]
    },
    'PlainResult/drop': {
        'exports': [
            'unsafeDropBothForResult',
            'unsafeDropOkForResult',
            'unsafeDropErrForResult',
        ]
    },
    'PlainResult/equal': {
        'exports': [
            'equalForResult',
        ]
    },
    'PlainResult/expect': {
        'exports': [
            'expectIsOk',
            'expectIsErr',
        ]
    },
    'PlainResult/flatten': {
        'exports': [
            'flattenForResult'
        ]
    },
    'PlainResult/map': {
        'exports': [
            'mapForResult'
        ]
    },
    'PlainResult/mapAsync': {
        'exports': [
            'mapAsyncForResult'
        ]
    },
    'PlainResult/mapErr': {
        'exports': [
            'mapErrForResult',
        ]
    },
    'PlainResult/mapErrAsync': {
        'exports': [
            'mapErrAsyncForResult',
        ]
    },
    'PlainResult/mapOr': {
        'exports': [
            'mapOrForResult'
        ]
    },
    'PlainResult/mapOrAsync': {
        'exports': [
            'mapOrAsyncForResult'
        ]
    },
    'PlainResult/mapOrElse': {
        'exports': [
            'mapOrElseForResult'
        ]
    },
    'PlainResult/mapOrElseAsync': {
        'exports': [
            'mapOrElseAsyncForResult'
        ]
    },
    'PlainResult/or': {
        'exports': [
            'orForResult'
        ]
    },
    'PlainResult/orElse': {
        'exports': [
            'orElseForResult'
        ]
    },
    'PlainResult/orElseAsync': {
        'exports': [
            'orElseAsyncForResult'
        ]
    },
    'PlainResult/Result': {
        'exports': [
            'isOk',
            'createOk',
            'isErr',
            'createErr'
        ]
    },
    'PlainResult/tap': {
        'exports': [
            'tapOk',
            'tapErr',
            'tapBoth',
        ]
    },
    'PlainResult/toOption': {
        'exports': [
            'toOptionFromOk',
            'toOptionFromErr'
        ]
    },
    'PlainResult/transpose': {
        'exports': [
            'transposeForResult',
        ]
    },
    'PlainResult/unwrap': {
        'exports': [
            'unwrapFromResult',
            'unwrapErrFromResult',
        ]
    },
    'PlainResult/unwrapOr': {
        'exports': [
            'unwrapOrFromResult'
        ]
    },
    'PlainResult/unwrapOrElse': {
        'exports': [
            'unwrapOrElseFromResult'
        ]
    },
    'PlainResult/unwrapOrElseAsync': {
        'exports': [
            'unwrapOrElseAsyncFromResult'
        ]
    },

    'Undefinable': {
        'path': 'Undefinable/index',
        'exports': [
            'isNotUndefined',
            'isUndefined',
            'andThen',
            'andThenAsync',
            'expect',
            'map',
            'mapAsync',
            'mapOr',
            'mapOrAsync',
            'mapOrElse',
            'mapOrElseAsync',
            'orElse',
            'orElseAsync',
            'tap',
            'unwrap',
            'unwrapOr',
            'unwrapOrElse',
            'unwrapOrElseAsync',
        ]
    },

    'Undefinable/and': {
        'exports': [
            'andForUndefinable',
        ]
    },
    'Undefinable/andThen': {
        'exports': [
            'andThenForUndefinable'
        ]
    },
    'Undefinable/andThenAsync': {
        'exports': [
            'andThenAsyncForUndefinable'
        ]
    },
    'Undefinable/expect': {
        'exports': [
            'expectNotUndefined'
        ]
    },
    'Undefinable/map': {
        'exports': [
            'mapForUndefinable'
        ]
    },
    'Undefinable/mapAsync': {
        'exports': [
            'mapAsyncForUndefinable'
        ]
    },
    'Undefinable/mapOr': {
        'exports': [
            'mapOrForUndefinable'
        ]
    },
    'Undefinable/mapOrAsync': {
        'exports': [
            'mapOrAsyncForUndefinable'
        ]
    },
    'Undefinable/mapOrElse': {
        'exports': [
            'mapOrElseForUndefinable'
        ]
    },
    'Undefinable/mapOrElseAsync': {
        'exports': [
            'mapOrElseAsyncForUndefinable'
        ]
    },
    'Undefinable/or': {
        'exports': [
            'orForUndefinable'
        ]
    },
    'Undefinable/orElse': {
        'exports': [
            'orElseForUndefinable'
        ]
    },
    'Undefinable/orElseAsync': {
        'exports': [
            'orElseAsyncForUndefinable'
        ]
    },
    'Undefinable/tap': {
        'exports': [
            'tapUndefinable'
        ]
    },
    'Undefinable/Undefinable': {
        'exports': [
            'isNotUndefined',
            'isUndefined',
        ]
    },
    'Undefinable/unwrap': {
        'exports': [
            'unwrapUndefinable'
        ]
    },
    'Undefinable/unwrapOr': {
        'exports': [
            'unwrapOrFromUndefinable'
        ]
    },
    'Undefinable/unwrapOrElse': {
        'exports': [
            'unwrapOrElseFromUndefinable'
        ]
    },
    'Undefinable/unwrapOrElseAsync': {
        'exports': [
            'unwrapOrElseAsyncFromUndefinable'
        ]
    },
    'Undefinable/xor': {
        'exports': [
            'xorForUndefinable'
        ]
    },

    /*
        // TODO:
        // 'Maybe/ErrorMessage': [],
        // TODO:
        // 'Nullable/ErrorMessage': [],
        // TODO:
        // 'Option': [],
        // TODO:
        // 'Result': [],
        // TODO:
        // 'Undefinable/ErrorMessage': [],
        // TODO:
        // 'index': [],
    */
});

const COMPAT_DESCRIPTOR = Object.freeze({
});

export const legacyApiTable = Object.freeze({
    'cjs/Maybe/ErrorMessage.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/ErrorMessage': COMPAT_DESCRIPTOR,
    'cjs/Maybe/Maybe.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/Maybe': COMPAT_DESCRIPTOR,
    'cjs/Maybe/and.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/and': COMPAT_DESCRIPTOR,
    'cjs/Maybe/andThen.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/andThen': COMPAT_DESCRIPTOR,
    'cjs/Maybe/andThenAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/andThenAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/expect.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/expect': COMPAT_DESCRIPTOR,
    'cjs/Maybe/index.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/index': COMPAT_DESCRIPTOR,
    'cjs/Maybe': COMPAT_DESCRIPTOR,
    'cjs/Maybe/map.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/map': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapOr.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapOr': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapOrAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapOrAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapOrElse.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapOrElseAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/or.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/or': COMPAT_DESCRIPTOR,
    'cjs/Maybe/orElse.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/orElse': COMPAT_DESCRIPTOR,
    'cjs/Maybe/orElseAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/orElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/tap.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/tap': COMPAT_DESCRIPTOR,
    'cjs/Maybe/unwrap.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/unwrap': COMPAT_DESCRIPTOR,
    'cjs/Maybe/unwrapOr.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/unwrapOr': COMPAT_DESCRIPTOR,
    'cjs/Maybe/unwrapOrElse.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/unwrapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Maybe/unwrapOrElseAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/xor.js': COMPAT_DESCRIPTOR,
    'cjs/Maybe/xor': COMPAT_DESCRIPTOR,
    'cjs/Nullable/ErrorMessage.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/ErrorMessage': COMPAT_DESCRIPTOR,
    'cjs/Nullable/Nullable.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/Nullable': COMPAT_DESCRIPTOR,
    'cjs/Nullable/and.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/and': COMPAT_DESCRIPTOR,
    'cjs/Nullable/andThen.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/andThen': COMPAT_DESCRIPTOR,
    'cjs/Nullable/andThenAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/andThenAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/expect.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/expect': COMPAT_DESCRIPTOR,
    'cjs/Nullable/index.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/index': COMPAT_DESCRIPTOR,
    'cjs/Nullable': COMPAT_DESCRIPTOR,
    'cjs/Nullable/map.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/map': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapOr.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapOr': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapOrAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapOrAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapOrElse.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapOrElseAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/or.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/or': COMPAT_DESCRIPTOR,
    'cjs/Nullable/orElse.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/orElse': COMPAT_DESCRIPTOR,
    'cjs/Nullable/orElseAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/orElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/tap.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/tap': COMPAT_DESCRIPTOR,
    'cjs/Nullable/unwrap.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/unwrap': COMPAT_DESCRIPTOR,
    'cjs/Nullable/unwrapOr.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/unwrapOr': COMPAT_DESCRIPTOR,
    'cjs/Nullable/unwrapOrElse.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Nullable/unwrapOrElseAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/xor.js': COMPAT_DESCRIPTOR,
    'cjs/Nullable/xor': COMPAT_DESCRIPTOR,
    'cjs/Option.js': COMPAT_DESCRIPTOR,
    'cjs/Option': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/Option.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/Option': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/and.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/and': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/andThen.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/andThen': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/asMut.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/asMut': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/drop.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/drop': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/equal.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/equal': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/expect.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/expect': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/filter.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/filter': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/flatten.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/flatten': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/index.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/index': COMPAT_DESCRIPTOR,
    'cjs/PlainOption': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/map.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/map': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/mapAsync.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/mapAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/mapOr.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/mapOr': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/mapOrElse.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/mapOrElse': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/okOr.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/okOr': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/okOrElse.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/okOrElse': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/or.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/or': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/orElse.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/orElse': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/transpose.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/transpose': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/tap.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/tap': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/unwrap.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/unwrap': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/unwrapOr.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/unwrapOr': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/unwrapOrElse.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/unwrapOrElse': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/xor.js': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/xor': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/Result.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/Result': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/and.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/and': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/andThen.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/andThen': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/andThenAsync.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/andThenAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/asMut.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/asMut': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/drop.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/drop': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/equal.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/equal': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/expect.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/expect': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/flatten.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/flatten': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/index.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/index': COMPAT_DESCRIPTOR,
    'cjs/PlainResult': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/map.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/map': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapAsync.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapErr.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapErr': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapErrAsync.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapErrAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapOr.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapOr': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapOrAsync.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapOrAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapOrElse.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapOrElse': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapOrElseAsync.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/or.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/or': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/orElse.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/orElse': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/orElseAsync.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/orElseAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/tap.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/tap': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/transpose.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/transpose': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/toOption.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/toOption': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrap.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrap': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrapOr.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrapOr': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrapOrElse.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrapOrElse': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrapOrElseAsync.js': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Result.js': COMPAT_DESCRIPTOR,
    'cjs/Result': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/ErrorMessage.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/ErrorMessage': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/Undefinable.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/Undefinable': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/and.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/and': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/andThen.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/andThen': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/andThenAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/andThenAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/expect.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/expect': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/index.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/index': COMPAT_DESCRIPTOR,
    'cjs/Undefinable': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/map.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/map': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapOr.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapOr': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapOrAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapOrAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapOrElse.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapOrElseAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/or.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/or': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/orElse.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/orElse': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/orElseAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/orElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/tap.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/tap': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/unwrap.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/unwrap': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/unwrapOr.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/unwrapOr': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/unwrapOrElse.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/unwrapOrElseAsync.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/xor.js': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/xor': COMPAT_DESCRIPTOR,
    'cjs/index.js': COMPAT_DESCRIPTOR,
    'cjs/index': COMPAT_DESCRIPTOR,
    'cjs/shared/Function.js': COMPAT_DESCRIPTOR,
    'cjs/shared/Function': COMPAT_DESCRIPTOR,
    'cjs/shared/Mutable.js': COMPAT_DESCRIPTOR,
    'cjs/shared/Mutable': COMPAT_DESCRIPTOR,
    'esm/Maybe/ErrorMessage': COMPAT_DESCRIPTOR,
    'esm/Maybe/Maybe': COMPAT_DESCRIPTOR,
    'esm/Maybe/and': COMPAT_DESCRIPTOR,
    'esm/Maybe/andThen': COMPAT_DESCRIPTOR,
    'esm/Maybe/andThenAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/expect': COMPAT_DESCRIPTOR,
    'esm/Maybe/index': COMPAT_DESCRIPTOR,
    'esm/Maybe': COMPAT_DESCRIPTOR,
    'esm/Maybe/map': COMPAT_DESCRIPTOR,
    'esm/Maybe/mapAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/mapOr': COMPAT_DESCRIPTOR,
    'esm/Maybe/mapOrAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/mapOrElse': COMPAT_DESCRIPTOR,
    'esm/Maybe/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/or': COMPAT_DESCRIPTOR,
    'esm/Maybe/orElse': COMPAT_DESCRIPTOR,
    'esm/Maybe/orElseAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/tap': COMPAT_DESCRIPTOR,
    'esm/Maybe/unwrap': COMPAT_DESCRIPTOR,
    'esm/Maybe/unwrapOr': COMPAT_DESCRIPTOR,
    'esm/Maybe/unwrapOrElse': COMPAT_DESCRIPTOR,
    'esm/Maybe/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/xor': COMPAT_DESCRIPTOR,
    'esm/Nullable/ErrorMessage': COMPAT_DESCRIPTOR,
    'esm/Nullable/Nullable': COMPAT_DESCRIPTOR,
    'esm/Nullable/and': COMPAT_DESCRIPTOR,
    'esm/Nullable/andThen': COMPAT_DESCRIPTOR,
    'esm/Nullable/andThenAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/expect': COMPAT_DESCRIPTOR,
    'esm/Nullable/index': COMPAT_DESCRIPTOR,
    'esm/Nullable': COMPAT_DESCRIPTOR,
    'esm/Nullable/map': COMPAT_DESCRIPTOR,
    'esm/Nullable/mapAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/mapOr': COMPAT_DESCRIPTOR,
    'esm/Nullable/mapOrAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/mapOrElse': COMPAT_DESCRIPTOR,
    'esm/Nullable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/or': COMPAT_DESCRIPTOR,
    'esm/Nullable/orElse': COMPAT_DESCRIPTOR,
    'esm/Nullable/orElseAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/tap': COMPAT_DESCRIPTOR,
    'esm/Nullable/unwrap': COMPAT_DESCRIPTOR,
    'esm/Nullable/unwrapOr': COMPAT_DESCRIPTOR,
    'esm/Nullable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'esm/Nullable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/xor': COMPAT_DESCRIPTOR,
    'esm/Option': COMPAT_DESCRIPTOR,
    'esm/PlainOption/Option': COMPAT_DESCRIPTOR,
    'esm/PlainOption/and': COMPAT_DESCRIPTOR,
    'esm/PlainOption/andThen': COMPAT_DESCRIPTOR,
    'esm/PlainOption/asMut': COMPAT_DESCRIPTOR,
    'esm/PlainOption/drop': COMPAT_DESCRIPTOR,
    'esm/PlainOption/equal': COMPAT_DESCRIPTOR,
    'esm/PlainOption/expect': COMPAT_DESCRIPTOR,
    'esm/PlainOption/filter': COMPAT_DESCRIPTOR,
    'esm/PlainOption/flatten': COMPAT_DESCRIPTOR,
    'esm/PlainOption/index': COMPAT_DESCRIPTOR,
    'esm/PlainOption': COMPAT_DESCRIPTOR,
    'esm/PlainOption/map': COMPAT_DESCRIPTOR,
    'esm/PlainOption/mapAsync': COMPAT_DESCRIPTOR,
    'esm/PlainOption/mapOr': COMPAT_DESCRIPTOR,
    'esm/PlainOption/mapOrElse': COMPAT_DESCRIPTOR,
    'esm/PlainOption/okOr': COMPAT_DESCRIPTOR,
    'esm/PlainOption/okOrElse': COMPAT_DESCRIPTOR,
    'esm/PlainOption/or': COMPAT_DESCRIPTOR,
    'esm/PlainOption/orElse': COMPAT_DESCRIPTOR,
    'esm/PlainOption/transpose': COMPAT_DESCRIPTOR,
    'esm/PlainOption/tap': COMPAT_DESCRIPTOR,
    'esm/PlainOption/unwrap': COMPAT_DESCRIPTOR,
    'esm/PlainOption/unwrapOr': COMPAT_DESCRIPTOR,
    'esm/PlainOption/unwrapOrElse': COMPAT_DESCRIPTOR,
    'esm/PlainOption/xor': COMPAT_DESCRIPTOR,
    'esm/PlainResult/Result': COMPAT_DESCRIPTOR,
    'esm/PlainResult/and': COMPAT_DESCRIPTOR,
    'esm/PlainResult/andThen': COMPAT_DESCRIPTOR,
    'esm/PlainResult/andThenAsync': COMPAT_DESCRIPTOR,
    'esm/PlainResult/asMut': COMPAT_DESCRIPTOR,
    'esm/PlainResult/drop': COMPAT_DESCRIPTOR,
    'esm/PlainResult/equal': COMPAT_DESCRIPTOR,
    'esm/PlainResult/expect': COMPAT_DESCRIPTOR,
    'esm/PlainResult/flatten': COMPAT_DESCRIPTOR,
    'esm/PlainResult/index': COMPAT_DESCRIPTOR,
    'esm/PlainResult': COMPAT_DESCRIPTOR,
    'esm/PlainResult/map': COMPAT_DESCRIPTOR,
    'esm/PlainResult/mapAsync': COMPAT_DESCRIPTOR,
    'esm/PlainResult/mapErr': COMPAT_DESCRIPTOR,
    'esm/PlainResult/mapErrAsync': COMPAT_DESCRIPTOR,
    'esm/PlainResult/mapOr': COMPAT_DESCRIPTOR,
    'esm/PlainResult/mapOrAsync': COMPAT_DESCRIPTOR,
    'esm/PlainResult/mapOrElse': COMPAT_DESCRIPTOR,
    'esm/PlainResult/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/PlainResult/or': COMPAT_DESCRIPTOR,
    'esm/PlainResult/orElse': COMPAT_DESCRIPTOR,
    'esm/PlainResult/orElseAsync': COMPAT_DESCRIPTOR,
    'esm/PlainResult/transpose': COMPAT_DESCRIPTOR,
    'esm/PlainResult/tap': COMPAT_DESCRIPTOR,
    'esm/PlainResult/toOption': COMPAT_DESCRIPTOR,
    'esm/PlainResult/unwrap': COMPAT_DESCRIPTOR,
    'esm/PlainResult/unwrapOr': COMPAT_DESCRIPTOR,
    'esm/PlainResult/unwrapOrElse': COMPAT_DESCRIPTOR,
    'esm/PlainResult/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Result': COMPAT_DESCRIPTOR,
    'esm/Undefinable/ErrorMessage': COMPAT_DESCRIPTOR,
    'esm/Undefinable/Undefinable': COMPAT_DESCRIPTOR,
    'esm/Undefinable/and': COMPAT_DESCRIPTOR,
    'esm/Undefinable/andThen': COMPAT_DESCRIPTOR,
    'esm/Undefinable/andThenAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/expect': COMPAT_DESCRIPTOR,
    'esm/Undefinable/index': COMPAT_DESCRIPTOR,
    'esm/Undefinable': COMPAT_DESCRIPTOR,
    'esm/Undefinable/map': COMPAT_DESCRIPTOR,
    'esm/Undefinable/mapAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/mapOr': COMPAT_DESCRIPTOR,
    'esm/Undefinable/mapOrAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/mapOrElse': COMPAT_DESCRIPTOR,
    'esm/Undefinable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/or': COMPAT_DESCRIPTOR,
    'esm/Undefinable/orElse': COMPAT_DESCRIPTOR,
    'esm/Undefinable/orElseAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/tap': COMPAT_DESCRIPTOR,
    'esm/Undefinable/unwrap': COMPAT_DESCRIPTOR,
    'esm/Undefinable/unwrapOr': COMPAT_DESCRIPTOR,
    'esm/Undefinable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'esm/Undefinable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/xor': COMPAT_DESCRIPTOR,
    'esm/index': COMPAT_DESCRIPTOR,
    'esm/shared/Function': COMPAT_DESCRIPTOR,
    'esm/shared/Mutable': COMPAT_DESCRIPTOR,
    'lib/Maybe/ErrorMessage.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/ErrorMessage': COMPAT_DESCRIPTOR,
    'lib/Maybe/ErrorMessage.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/Maybe.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/Maybe': COMPAT_DESCRIPTOR,
    'lib/Maybe/Maybe.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/and.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/and': COMPAT_DESCRIPTOR,
    'lib/Maybe/and.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/andThen.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/andThen': COMPAT_DESCRIPTOR,
    'lib/Maybe/andThen.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/andThenAsync.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/andThenAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/andThenAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/expect.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/expect': COMPAT_DESCRIPTOR,
    'lib/Maybe/expect.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/index.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/index': COMPAT_DESCRIPTOR,
    'lib/Maybe/index.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe': COMPAT_DESCRIPTOR,
    'lib/Maybe/map.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/map': COMPAT_DESCRIPTOR,
    'lib/Maybe/map.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapAsync.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOr.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOr': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOr.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOrAsync.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOrAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOrAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOrElse.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOrElse': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOrElse.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOrElseAsync.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOrElseAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/or.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/or': COMPAT_DESCRIPTOR,
    'lib/Maybe/or.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/orElse.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/orElse': COMPAT_DESCRIPTOR,
    'lib/Maybe/orElse.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/orElseAsync.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/orElseAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/orElseAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/tap.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/tap': COMPAT_DESCRIPTOR,
    'lib/Maybe/tap.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrap.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrap': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrap.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrapOr.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrapOr': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrapOr.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrapOrElse.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrapOrElse': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrapOrElse.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrapOrElseAsync.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrapOrElseAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Maybe/xor.js': COMPAT_DESCRIPTOR,
    'lib/Maybe/xor': COMPAT_DESCRIPTOR,
    'lib/Maybe/xor.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/ErrorMessage.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/ErrorMessage': COMPAT_DESCRIPTOR,
    'lib/Nullable/ErrorMessage.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/Nullable.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/Nullable': COMPAT_DESCRIPTOR,
    'lib/Nullable/Nullable.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/and.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/and': COMPAT_DESCRIPTOR,
    'lib/Nullable/and.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/andThen.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/andThen': COMPAT_DESCRIPTOR,
    'lib/Nullable/andThen.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/andThenAsync.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/andThenAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/andThenAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/expect.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/expect': COMPAT_DESCRIPTOR,
    'lib/Nullable/expect.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/index.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/index': COMPAT_DESCRIPTOR,
    'lib/Nullable/index.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable': COMPAT_DESCRIPTOR,
    'lib/Nullable/map.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/map': COMPAT_DESCRIPTOR,
    'lib/Nullable/map.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapAsync.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOr.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOr': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOr.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOrAsync.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOrAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOrAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOrElse.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOrElse': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOrElse.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOrElseAsync.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOrElseAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/or.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/or': COMPAT_DESCRIPTOR,
    'lib/Nullable/or.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/orElse.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/orElse': COMPAT_DESCRIPTOR,
    'lib/Nullable/orElse.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/orElseAsync.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/orElseAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/orElseAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/tap.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/tap': COMPAT_DESCRIPTOR,
    'lib/Nullable/tap.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrap.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrap': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrap.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrapOr.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrapOr': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrapOr.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrapOrElse.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrapOrElse.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrapOrElseAsync.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrapOrElseAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Nullable/xor.js': COMPAT_DESCRIPTOR,
    'lib/Nullable/xor': COMPAT_DESCRIPTOR,
    'lib/Nullable/xor.mjs': COMPAT_DESCRIPTOR,
    'lib/Option.js': COMPAT_DESCRIPTOR,
    'lib/Option': COMPAT_DESCRIPTOR,
    'lib/Option.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/Option.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/Option': COMPAT_DESCRIPTOR,
    'lib/PlainOption/Option.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/and.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/and': COMPAT_DESCRIPTOR,
    'lib/PlainOption/and.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/andThen.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/andThen': COMPAT_DESCRIPTOR,
    'lib/PlainOption/andThen.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/asMut.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/asMut': COMPAT_DESCRIPTOR,
    'lib/PlainOption/asMut.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/drop.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/drop': COMPAT_DESCRIPTOR,
    'lib/PlainOption/drop.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/expect.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/expect': COMPAT_DESCRIPTOR,
    'lib/PlainOption/expect.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/equal.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/equal': COMPAT_DESCRIPTOR,
    'lib/PlainOption/equal.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/flatten.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/flatten': COMPAT_DESCRIPTOR,
    'lib/PlainOption/flatten.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/filter.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/filter': COMPAT_DESCRIPTOR,
    'lib/PlainOption/filter.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/index.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/index': COMPAT_DESCRIPTOR,
    'lib/PlainOption/index.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption': COMPAT_DESCRIPTOR,
    'lib/PlainOption/map.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/map': COMPAT_DESCRIPTOR,
    'lib/PlainOption/map.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapAsync.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapAsync': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapOr.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapOr': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapOr.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapOrElse.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapOrElse': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapOrElse.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/okOr.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/okOr': COMPAT_DESCRIPTOR,
    'lib/PlainOption/okOr.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/okOrElse.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/okOrElse': COMPAT_DESCRIPTOR,
    'lib/PlainOption/okOrElse.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/or.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/or': COMPAT_DESCRIPTOR,
    'lib/PlainOption/or.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/orElse.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/orElse': COMPAT_DESCRIPTOR,
    'lib/PlainOption/orElse.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/transpose.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/transpose': COMPAT_DESCRIPTOR,
    'lib/PlainOption/transpose.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/tap.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/tap': COMPAT_DESCRIPTOR,
    'lib/PlainOption/tap.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrap.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrap': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrap.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrapOr.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrapOr': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrapOr.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrapOrElse.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrapOrElse': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrapOrElse.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainOption/xor.js': COMPAT_DESCRIPTOR,
    'lib/PlainOption/xor': COMPAT_DESCRIPTOR,
    'lib/PlainOption/xor.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/Result.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/Result': COMPAT_DESCRIPTOR,
    'lib/PlainResult/Result.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/and.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/and': COMPAT_DESCRIPTOR,
    'lib/PlainResult/and.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/andThen.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/andThen': COMPAT_DESCRIPTOR,
    'lib/PlainResult/andThen.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/andThenAsync.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/andThenAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/andThenAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/asMut.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/asMut': COMPAT_DESCRIPTOR,
    'lib/PlainResult/asMut.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/drop.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/drop': COMPAT_DESCRIPTOR,
    'lib/PlainResult/drop.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/equal.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/equal': COMPAT_DESCRIPTOR,
    'lib/PlainResult/equal.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/expect.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/expect': COMPAT_DESCRIPTOR,
    'lib/PlainResult/expect.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/flatten.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/flatten': COMPAT_DESCRIPTOR,
    'lib/PlainResult/flatten.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/index.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/index': COMPAT_DESCRIPTOR,
    'lib/PlainResult/index.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult': COMPAT_DESCRIPTOR,
    'lib/PlainResult/map.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/map': COMPAT_DESCRIPTOR,
    'lib/PlainResult/map.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapAsync.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapErr.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapErr': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapErr.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapErrAsync.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapErrAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapErrAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOr.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOr': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOr.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOrAsync.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOrAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOrAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOrElse.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOrElse': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOrElse.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOrElseAsync.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOrElseAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/or.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/or': COMPAT_DESCRIPTOR,
    'lib/PlainResult/or.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/orElse.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/orElse': COMPAT_DESCRIPTOR,
    'lib/PlainResult/orElse.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/orElseAsync.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/orElseAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/orElseAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/transpose.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/transpose': COMPAT_DESCRIPTOR,
    'lib/PlainResult/transpose.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/tap.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/tap': COMPAT_DESCRIPTOR,
    'lib/PlainResult/tap.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/toOption.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/toOption': COMPAT_DESCRIPTOR,
    'lib/PlainResult/toOption.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrap.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrap': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrap.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOr.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOr': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOr.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOrElse.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOrElse': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOrElse.mjs': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOrElseAsync.js': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOrElseAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Result.js': COMPAT_DESCRIPTOR,
    'lib/Result': COMPAT_DESCRIPTOR,
    'lib/Result.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/ErrorMessage.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/ErrorMessage': COMPAT_DESCRIPTOR,
    'lib/Undefinable/ErrorMessage.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/Undefinable.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/Undefinable': COMPAT_DESCRIPTOR,
    'lib/Undefinable/Undefinable.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/and.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/and': COMPAT_DESCRIPTOR,
    'lib/Undefinable/and.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/andThen.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/andThen': COMPAT_DESCRIPTOR,
    'lib/Undefinable/andThen.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/andThenAsync.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/andThenAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/andThenAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/expect.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/expect': COMPAT_DESCRIPTOR,
    'lib/Undefinable/expect.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/index.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/index': COMPAT_DESCRIPTOR,
    'lib/Undefinable/index.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable': COMPAT_DESCRIPTOR,
    'lib/Undefinable/map.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/map': COMPAT_DESCRIPTOR,
    'lib/Undefinable/map.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapAsync.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOr.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOr': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOr.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOrAsync.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOrAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOrAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOrElse.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOrElse': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOrElse.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOrElseAsync.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOrElseAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/or.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/or': COMPAT_DESCRIPTOR,
    'lib/Undefinable/or.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/orElse.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/orElse': COMPAT_DESCRIPTOR,
    'lib/Undefinable/orElse.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/orElseAsync.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/orElseAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/orElseAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/tap.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/tap': COMPAT_DESCRIPTOR,
    'lib/Undefinable/tap.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrap.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrap': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrap.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrapOr.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrapOr': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrapOr.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrapOrElse.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrapOrElse.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrapOrElseAsync.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrapOrElseAsync.mjs': COMPAT_DESCRIPTOR,
    'lib/Undefinable/xor.js': COMPAT_DESCRIPTOR,
    'lib/Undefinable/xor': COMPAT_DESCRIPTOR,
    'lib/Undefinable/xor.mjs': COMPAT_DESCRIPTOR,
    'lib/index.js': COMPAT_DESCRIPTOR,
    'lib/index': COMPAT_DESCRIPTOR,
    'lib/index.mjs': COMPAT_DESCRIPTOR,
    'lib/shared/Function.js': COMPAT_DESCRIPTOR,
    'lib/shared/Function': COMPAT_DESCRIPTOR,
    'lib/shared/Function.mjs': COMPAT_DESCRIPTOR,
    'lib/shared/Mutable.js': COMPAT_DESCRIPTOR,
    'lib/shared/Mutable': COMPAT_DESCRIPTOR,
    'lib/shared/Mutable.mjs': COMPAT_DESCRIPTOR,
});

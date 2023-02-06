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
            'expectNotNullAndUndefined',
            'inspect',
            'map',
            'mapAsync',
            'mapOr',
            'mapOrAsync',
            'mapOrElse',
            'mapOrElseAsync',
            'orElse',
            'orElseAsync',
            'unwrap',
            'unwrapMaybe',
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
    'Maybe/inspect': {
        'exports': [
            'inspectMaybe'
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
            'expectNotNullAndUndefined',
            'unwrapMaybe',
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
    'Maybe/toNullable': {
        'exports': [
            'toNullableFromMaybe'
        ]
    },
    'Maybe/toUndefinable': {
        'exports': [
            'toUndefinableFromMaybe'
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
            'expectNotNull',
            'inspect',
            'map',
            'mapAsync',
            'mapOr',
            'mapOrAsync',
            'mapOrElse',
            'mapOrElseAsync',
            'orElse',
            'orElseAsync',
            'unwrap',
            'unwrapNullable',
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
    'Nullable/inspect': {
        'exports': [
            'inspectNullable'
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
            'expectNotNull',
            'unwrapNullable',
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
    'Nullable/toUndefinable': {
        'exports': [
            'toUndefinableFromNullable'
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
            'andThenAsync',
            'equal',
            'expect',
            'expectSome',
            'inspect',
            'filter',
            'flatten',
            'map',
            'mapAsync',
            'mapOr',
            'mapOrAsync',
            'mapOrElse',
            'mapOrElseAsync',
            'or',
            'orElse',
            'orElseAsync',
            'transpose',
            'unwrap',
            'unwrapSome',
            'unwrapOr',
            'unwrapOrElse',
            'unwrapOrElseAsync',
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
    'PlainOption/andThenAsync': {
        'exports': [
            'andThenAsyncForOption'
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
            'expectSomeForOption',
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
    'PlainOption/inspect': {
        'exports': [
            'inspectOption'
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
    'PlainOption/mapOrAsync': {
        'exports': [
            'mapOrAsyncForOption'
        ]
    },
    'PlainOption/mapOrElse': {
        'exports': [
            'mapOrElseForOption'
        ]
    },
    'PlainOption/mapOrElseAsync': {
        'exports': [
            'mapOrElseAsyncForOption'
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
            'createNone',
            'unwrapSome',
            'expectSome',
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
    'PlainOption/orElseAsync': {
        'exports': [
            'orElseAsyncForOption'
        ]
    },
    'PlainOption/transpose': {
        'exports': [
            'transposeForOption'
        ]
    },
    'PlainOption/toNullable': {
        'exports': [
            'toNullableFromOption'
        ]
    },
    'PlainOption/toUndefinable': {
        'exports': [
            'toUndefinableFromOption'
        ]
    },
    'PlainOption/unwrap': {
        'exports': [
            'unwrapOption',
            'unwrapSomeFromOption',
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
    'PlainOption/unwrapOrElseAsync': {
        'exports': [
            'unwrapOrElseAsyncFromOption'
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
            'expectOk',
            'expectIsOk',
            'expectErr',
            'expectIsErr',
            'inspectOk',
            'inspectErr',
            'inspectBoth',
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
            'transpose',
            'toOptionFromOk',
            'toOptionFromErr',
            'unwrap',
            'unwrapOk',
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
            'expectOkForResult',
            'expectErrForResult',
            'expectIsOk',
            'expectIsErr',
        ]
    },
    'PlainResult/flatten': {
        'exports': [
            'flattenForResult'
        ]
    },
    'PlainResult/fromPromiseSettledResult': {
        'exports': [
            'fromPromiseSettledResultToResult'
        ]
    },
    'PlainResult/inspect': {
        'exports': [
            'inspectOkOfResult',
            'inspectErrOfResult',
            'inspectBothOfResult',
            'inspectOk',
            'inspectErr',
            'inspectBoth',
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
            'createErr',
            'unwrapOk',
            'unwrapErr',
            'expectOk',
            'expectErr',
        ]
    },
    'PlainResult/toOption': {
        'exports': [
            'toOptionFromOk',
            'toOptionFromErr'
        ]
    },
    'PlainResult/tryCatch': {
        'exports': [
            'tryCatchIntoResult',
            'tryCatchIntoResultWithEnsureError',
        ]
    },
    'PlainResult/tryCatchAsync': {
        'exports': [
            'tryCatchIntoResultAsync',
            'tryCatchIntoResultWithEnsureErrorAsync',
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
            'unwrapOkFromResult',
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
    'PlainResult/unwrapOrThrowError': {
        'exports': [
            'unwrapOrThrowErrorFromResult'
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
            'expectNotUndefined',
            'inspect',
            'map',
            'mapAsync',
            'mapOr',
            'mapOrAsync',
            'mapOrElse',
            'mapOrElseAsync',
            'orElse',
            'orElseAsync',
            'unwrap',
            'unwrapOr',
            'unwrapOrElse',
            'unwrapOrElseAsync',
            'unwrapUndefinable',
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
    'Undefinable/inspect': {
        'exports': [
            'inspectUndefinable'
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
    'Undefinable/toNullable': {
        'exports': [
            'toNullableFromUndefinable'
        ]
    },
    'Undefinable/Undefinable': {
        'exports': [
            'isNotUndefined',
            'isUndefined',
            'expectNotUndefined',
            'unwrapUndefinable',
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
    'cjs/ClassicOption': {
        path: 'cjs/ClassicOption/index',
    },
    'cjs/ClassicResult': {
        path: 'cjs/ClassicResult/index',
    },
    'cjs/Maybe/ErrorMessage': COMPAT_DESCRIPTOR,
    'cjs/Maybe/Maybe': COMPAT_DESCRIPTOR,
    'cjs/Maybe/and': COMPAT_DESCRIPTOR,
    'cjs/Maybe/andThen': COMPAT_DESCRIPTOR,
    'cjs/Maybe/andThenAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/expect': COMPAT_DESCRIPTOR,
    'cjs/Maybe/index': COMPAT_DESCRIPTOR,
    'cjs/Maybe/inspect': COMPAT_DESCRIPTOR,
    'cjs/Maybe': {
        path: 'cjs/Maybe/index',
    },
    'cjs/Maybe/map': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapOr': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapOrAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/or': COMPAT_DESCRIPTOR,
    'cjs/Maybe/orElse': COMPAT_DESCRIPTOR,
    'cjs/Maybe/orElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/toNullable': COMPAT_DESCRIPTOR,
    'cjs/Maybe/toUndefinable': COMPAT_DESCRIPTOR,
    'cjs/Maybe/unwrap': COMPAT_DESCRIPTOR,
    'cjs/Maybe/unwrapOr': COMPAT_DESCRIPTOR,
    'cjs/Maybe/unwrapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Maybe/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/xor': COMPAT_DESCRIPTOR,
    'cjs/Nullable/ErrorMessage': COMPAT_DESCRIPTOR,
    'cjs/Nullable/Nullable': COMPAT_DESCRIPTOR,
    'cjs/Nullable/and': COMPAT_DESCRIPTOR,
    'cjs/Nullable/andThen': COMPAT_DESCRIPTOR,
    'cjs/Nullable/andThenAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/expect': COMPAT_DESCRIPTOR,
    'cjs/Nullable/index': COMPAT_DESCRIPTOR,
    'cjs/Nullable/inspect': COMPAT_DESCRIPTOR,
    'cjs/Nullable': {
        path: 'cjs/Nullable/index',
    },
    'cjs/Nullable/map': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapOr': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapOrAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/or': COMPAT_DESCRIPTOR,
    'cjs/Nullable/orElse': COMPAT_DESCRIPTOR,
    'cjs/Nullable/orElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/toUndefinable': COMPAT_DESCRIPTOR,
    'cjs/Nullable/unwrap': COMPAT_DESCRIPTOR,
    'cjs/Nullable/unwrapOr': COMPAT_DESCRIPTOR,
    'cjs/Nullable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Nullable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/xor': COMPAT_DESCRIPTOR,
    'cjs/Option': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/Option': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/and': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/andThen': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/andThenAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/asMut': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/drop': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/equal': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/expect': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/filter': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/flatten': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/index': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/inspect': COMPAT_DESCRIPTOR,
    'cjs/PlainOption': {
        path: 'cjs/PlainOption/index',
    },
    'cjs/PlainOption/map': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/mapAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/mapOr': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/mapOrAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/mapOrElse': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/okOr': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/okOrElse': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/or': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/orElse': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/orElseAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/transpose': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/toNullable': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/toUndefinable': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/unwrap': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/unwrapOr': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/unwrapOrElse': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/xor': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/Result': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/and': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/andThen': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/andThenAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/asMut': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/drop': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/equal': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/expect': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/flatten': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/fromPromiseSettledResult': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/index': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/inspect': COMPAT_DESCRIPTOR,
    'cjs/PlainResult': {
        path: 'cjs/PlainResult/index',
    },
    'cjs/PlainResult/map': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapErr': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapErrAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapOr': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapOrAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapOrElse': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/or': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/orElse': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/orElseAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/transpose': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/toOption': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/tryCatch': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/tryCatchAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrap': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrapOr': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrapOrElse': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrapOrThrowError': COMPAT_DESCRIPTOR,
    'cjs/Result': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/ErrorMessage': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/Undefinable': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/and': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/andThen': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/andThenAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/expect': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/index': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/inspect': COMPAT_DESCRIPTOR,
    'cjs/Undefinable': {
        path: 'cjs/Undefinable/index',
    },
    'cjs/Undefinable/map': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapOr': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapOrAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/or': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/orElse': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/orElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/toNullable': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/unwrap': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/unwrapOr': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/xor': COMPAT_DESCRIPTOR,
    'cjs/index': COMPAT_DESCRIPTOR,
    'esm/ClassicOption': {
        path: 'esm/ClassicOption/index',
    },
    'esm/ClassicResult': {
        path: 'esm/ClassicResult/index',
    },
    'esm/Maybe/ErrorMessage': COMPAT_DESCRIPTOR,
    'esm/Maybe/Maybe': COMPAT_DESCRIPTOR,
    'esm/Maybe/and': COMPAT_DESCRIPTOR,
    'esm/Maybe/andThen': COMPAT_DESCRIPTOR,
    'esm/Maybe/andThenAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/expect': COMPAT_DESCRIPTOR,
    'esm/Maybe/index': COMPAT_DESCRIPTOR,
    'esm/Maybe/inspect': COMPAT_DESCRIPTOR,
    'esm/Maybe': {
        path: 'esm/Maybe/index',
    },
    'esm/Maybe/map': COMPAT_DESCRIPTOR,
    'esm/Maybe/mapAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/mapOr': COMPAT_DESCRIPTOR,
    'esm/Maybe/mapOrAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/mapOrElse': COMPAT_DESCRIPTOR,
    'esm/Maybe/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/or': COMPAT_DESCRIPTOR,
    'esm/Maybe/orElse': COMPAT_DESCRIPTOR,
    'esm/Maybe/orElseAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/toNullable': COMPAT_DESCRIPTOR,
    'esm/Maybe/toUndefinable': COMPAT_DESCRIPTOR,
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
    'esm/Nullable/inspect': COMPAT_DESCRIPTOR,
    'esm/Nullable': {
        path: 'esm/Nullable/index',
    },
    'esm/Nullable/map': COMPAT_DESCRIPTOR,
    'esm/Nullable/mapAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/mapOr': COMPAT_DESCRIPTOR,
    'esm/Nullable/mapOrAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/mapOrElse': COMPAT_DESCRIPTOR,
    'esm/Nullable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/or': COMPAT_DESCRIPTOR,
    'esm/Nullable/orElse': COMPAT_DESCRIPTOR,
    'esm/Nullable/orElseAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/toUndefinable': COMPAT_DESCRIPTOR,
    'esm/Nullable/unwrap': COMPAT_DESCRIPTOR,
    'esm/Nullable/unwrapOr': COMPAT_DESCRIPTOR,
    'esm/Nullable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'esm/Nullable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/xor': COMPAT_DESCRIPTOR,
    'esm/Option': COMPAT_DESCRIPTOR,
    'esm/PlainOption/Option': COMPAT_DESCRIPTOR,
    'esm/PlainOption/and': COMPAT_DESCRIPTOR,
    'esm/PlainOption/andThen': COMPAT_DESCRIPTOR,
    'esm/PlainOption/andThenAsync': COMPAT_DESCRIPTOR,
    'esm/PlainOption/asMut': COMPAT_DESCRIPTOR,
    'esm/PlainOption/drop': COMPAT_DESCRIPTOR,
    'esm/PlainOption/equal': COMPAT_DESCRIPTOR,
    'esm/PlainOption/expect': COMPAT_DESCRIPTOR,
    'esm/PlainOption/filter': COMPAT_DESCRIPTOR,
    'esm/PlainOption/flatten': COMPAT_DESCRIPTOR,
    'esm/PlainOption/index': COMPAT_DESCRIPTOR,
    'esm/PlainOption/inspect': COMPAT_DESCRIPTOR,
    'esm/PlainOption': {
        path: 'esm/PlainOption/index',
    },
    'esm/PlainOption/map': COMPAT_DESCRIPTOR,
    'esm/PlainOption/mapAsync': COMPAT_DESCRIPTOR,
    'esm/PlainOption/mapOr': COMPAT_DESCRIPTOR,
    'esm/PlainOption/mapOrAsync': COMPAT_DESCRIPTOR,
    'esm/PlainOption/mapOrElse': COMPAT_DESCRIPTOR,
    'esm/PlainOption/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/PlainOption/okOr': COMPAT_DESCRIPTOR,
    'esm/PlainOption/okOrElse': COMPAT_DESCRIPTOR,
    'esm/PlainOption/or': COMPAT_DESCRIPTOR,
    'esm/PlainOption/orElse': COMPAT_DESCRIPTOR,
    'esm/PlainOption/orElseAsync': COMPAT_DESCRIPTOR,
    'esm/PlainOption/transpose': COMPAT_DESCRIPTOR,
    'esm/PlainOption/toNullable': COMPAT_DESCRIPTOR,
    'esm/PlainOption/toUndefinable': COMPAT_DESCRIPTOR,
    'esm/PlainOption/unwrap': COMPAT_DESCRIPTOR,
    'esm/PlainOption/unwrapOr': COMPAT_DESCRIPTOR,
    'esm/PlainOption/unwrapOrElse': COMPAT_DESCRIPTOR,
    'esm/PlainOption/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
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
    'esm/PlainResult/fromPromiseSettledResult': COMPAT_DESCRIPTOR,
    'esm/PlainResult/index': COMPAT_DESCRIPTOR,
    'esm/PlainResult/inspect': COMPAT_DESCRIPTOR,
    'esm/PlainResult': {
        path: 'esm/PlainResult/index',
    },
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
    'esm/PlainResult/toOption': COMPAT_DESCRIPTOR,
    'esm/PlainResult/tryCatch': COMPAT_DESCRIPTOR,
    'esm/PlainResult/tryCatchAsync': COMPAT_DESCRIPTOR,
    'esm/PlainResult/unwrap': COMPAT_DESCRIPTOR,
    'esm/PlainResult/unwrapOr': COMPAT_DESCRIPTOR,
    'esm/PlainResult/unwrapOrElse': COMPAT_DESCRIPTOR,
    'esm/PlainResult/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/PlainResult/unwrapOrThrowError': COMPAT_DESCRIPTOR,
    'esm/Result': COMPAT_DESCRIPTOR,
    'esm/Undefinable/ErrorMessage': COMPAT_DESCRIPTOR,
    'esm/Undefinable/Undefinable': COMPAT_DESCRIPTOR,
    'esm/Undefinable/and': COMPAT_DESCRIPTOR,
    'esm/Undefinable/andThen': COMPAT_DESCRIPTOR,
    'esm/Undefinable/andThenAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/expect': COMPAT_DESCRIPTOR,
    'esm/Undefinable/index': COMPAT_DESCRIPTOR,
    'esm/Undefinable/inspect': COMPAT_DESCRIPTOR,
    'esm/Undefinable': {
        path: 'esm/Undefinable/index',
    },
    'esm/Undefinable/map': COMPAT_DESCRIPTOR,
    'esm/Undefinable/mapAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/mapOr': COMPAT_DESCRIPTOR,
    'esm/Undefinable/mapOrAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/mapOrElse': COMPAT_DESCRIPTOR,
    'esm/Undefinable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/or': COMPAT_DESCRIPTOR,
    'esm/Undefinable/orElse': COMPAT_DESCRIPTOR,
    'esm/Undefinable/orElseAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/toNullable': COMPAT_DESCRIPTOR,
    'esm/Undefinable/unwrap': COMPAT_DESCRIPTOR,
    'esm/Undefinable/unwrapOr': COMPAT_DESCRIPTOR,
    'esm/Undefinable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'esm/Undefinable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/xor': COMPAT_DESCRIPTOR,
    'esm/index': COMPAT_DESCRIPTOR,
    'lib/ClassicOption': {
        path: 'lib/ClassicOption/index',
    },
    'lib/ClassicResult': {
        path: 'lib/ClassicResult/index',
    },
    'lib/Maybe/ErrorMessage': COMPAT_DESCRIPTOR,
    'lib/Maybe/Maybe': COMPAT_DESCRIPTOR,
    'lib/Maybe/and': COMPAT_DESCRIPTOR,
    'lib/Maybe/andThen': COMPAT_DESCRIPTOR,
    'lib/Maybe/andThenAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/expect': COMPAT_DESCRIPTOR,
    'lib/Maybe/index': COMPAT_DESCRIPTOR,
    'lib/Maybe/inspect': COMPAT_DESCRIPTOR,
    'lib/Maybe': {
        path: 'lib/Maybe/index',
    },
    'lib/Maybe/map': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOr': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOrAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOrElse': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/or': COMPAT_DESCRIPTOR,
    'lib/Maybe/orElse': COMPAT_DESCRIPTOR,
    'lib/Maybe/orElseAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/toNullable': COMPAT_DESCRIPTOR,
    'lib/Maybe/toUndefinable': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrap': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrapOr': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrapOrElse': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/xor': COMPAT_DESCRIPTOR,
    'lib/Nullable/ErrorMessage': COMPAT_DESCRIPTOR,
    'lib/Nullable/Nullable': COMPAT_DESCRIPTOR,
    'lib/Nullable/and': COMPAT_DESCRIPTOR,
    'lib/Nullable/andThen': COMPAT_DESCRIPTOR,
    'lib/Nullable/andThenAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/expect': COMPAT_DESCRIPTOR,
    'lib/Nullable/index': COMPAT_DESCRIPTOR,
    'lib/Nullable/inspect': COMPAT_DESCRIPTOR,
    'lib/Nullable': {
        path: 'lib/Nullable/index',
    },
    'lib/Nullable/map': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOr': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOrAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOrElse': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/or': COMPAT_DESCRIPTOR,
    'lib/Nullable/orElse': COMPAT_DESCRIPTOR,
    'lib/Nullable/orElseAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/toUndefinable': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrap': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrapOr': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/xor': COMPAT_DESCRIPTOR,
    'lib/Option': COMPAT_DESCRIPTOR,
    'lib/PlainOption/Option': COMPAT_DESCRIPTOR,
    'lib/PlainOption/and': COMPAT_DESCRIPTOR,
    'lib/PlainOption/andThen': COMPAT_DESCRIPTOR,
    'lib/PlainOption/andThenAsync': COMPAT_DESCRIPTOR,
    'lib/PlainOption/asMut': COMPAT_DESCRIPTOR,
    'lib/PlainOption/drop': COMPAT_DESCRIPTOR,
    'lib/PlainOption/expect': COMPAT_DESCRIPTOR,
    'lib/PlainOption/equal': COMPAT_DESCRIPTOR,
    'lib/PlainOption/flatten': COMPAT_DESCRIPTOR,
    'lib/PlainOption/filter': COMPAT_DESCRIPTOR,
    'lib/PlainOption/index': COMPAT_DESCRIPTOR,
    'lib/PlainOption/inspect': COMPAT_DESCRIPTOR,
    'lib/PlainOption': {
        path: 'lib/PlainOption/index',
    },
    'lib/PlainOption/map': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapAsync': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapOr': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapOrAsync': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapOrElse': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/PlainOption/okOr': COMPAT_DESCRIPTOR,
    'lib/PlainOption/okOrElse': COMPAT_DESCRIPTOR,
    'lib/PlainOption/or': COMPAT_DESCRIPTOR,
    'lib/PlainOption/orElse': COMPAT_DESCRIPTOR,
    'lib/PlainOption/orElseAsync': COMPAT_DESCRIPTOR,
    'lib/PlainOption/transpose': COMPAT_DESCRIPTOR,
    'lib/PlainOption/toNullable': COMPAT_DESCRIPTOR,
    'lib/PlainOption/toUndefinable': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrap': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrapOr': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrapOrElse': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/PlainOption/xor': COMPAT_DESCRIPTOR,
    'lib/PlainResult/Result': COMPAT_DESCRIPTOR,
    'lib/PlainResult/and': COMPAT_DESCRIPTOR,
    'lib/PlainResult/andThen': COMPAT_DESCRIPTOR,
    'lib/PlainResult/andThenAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/asMut': COMPAT_DESCRIPTOR,
    'lib/PlainResult/drop': COMPAT_DESCRIPTOR,
    'lib/PlainResult/equal': COMPAT_DESCRIPTOR,
    'lib/PlainResult/expect': COMPAT_DESCRIPTOR,
    'lib/PlainResult/flatten': COMPAT_DESCRIPTOR,
    'lib/PlainResult/fromPromiseSettledResult': COMPAT_DESCRIPTOR,
    'lib/PlainResult/index': COMPAT_DESCRIPTOR,
    'lib/PlainResult/inspect': COMPAT_DESCRIPTOR,
    'lib/PlainResult': {
        path: 'lib/PlainResult/index',
    },
    'lib/PlainResult/map': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapErr': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapErrAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOr': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOrAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOrElse': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/or': COMPAT_DESCRIPTOR,
    'lib/PlainResult/orElse': COMPAT_DESCRIPTOR,
    'lib/PlainResult/orElseAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/transpose': COMPAT_DESCRIPTOR,
    'lib/PlainResult/toOption': COMPAT_DESCRIPTOR,
    'lib/PlainResult/tryCatch': COMPAT_DESCRIPTOR,
    'lib/PlainResult/tryCatchAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrap': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOr': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOrElse': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOrThrowError': COMPAT_DESCRIPTOR,
    'lib/Result': COMPAT_DESCRIPTOR,
    'lib/Undefinable/ErrorMessage': COMPAT_DESCRIPTOR,
    'lib/Undefinable/Undefinable': COMPAT_DESCRIPTOR,
    'lib/Undefinable/and': COMPAT_DESCRIPTOR,
    'lib/Undefinable/andThen': COMPAT_DESCRIPTOR,
    'lib/Undefinable/andThenAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/expect': COMPAT_DESCRIPTOR,
    'lib/Undefinable/index': COMPAT_DESCRIPTOR,
    'lib/Undefinable/inspect': COMPAT_DESCRIPTOR,
    'lib/Undefinable': {
        path: 'lib/Undefinable/index',
    },
    'lib/Undefinable/map': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOr': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOrAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOrElse': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/or': COMPAT_DESCRIPTOR,
    'lib/Undefinable/orElse': COMPAT_DESCRIPTOR,
    'lib/Undefinable/orElseAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/toNullable': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrap': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrapOr': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/xor': COMPAT_DESCRIPTOR,
    'lib/index': COMPAT_DESCRIPTOR,
});

export default {
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
            'expect',
            'map',
            'mapOr',
            'mapOrElse',
            'orElse',
            'tap',
            'unwrap',
            'unwrapOr',
            'unwrapOrElse',
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
    'Maybe/mapOrElse': {
        'exports': [
            'mapOrElseForMaybe'
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
            'expect',
            'map',
            'mapOr',
            'mapOrElse',
            'orElse',
            'tap',
            'unwrap',
            'unwrapOr',
            'unwrapOrElse',
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
    'Nullable/mapOr': {
        'exports': [
            'mapOrForNullable',
        ]
    },
    'Nullable/mapOrElse': {
        'exports': [
            'mapOrElseForNullable'
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
            'expect',
            'filter',
            'flatten',
            'map',
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
            'expect',
            'expectErr',
            'flatten',
            'map',
            'mapOr',
            'mapOrElse',
            'mapErr',
            'or',
            'orElse',
            'orElseAsync',
            'tapOk',
            'tapErr',
            'tapBoth',
            'transpose',
            'toOptionFromOk',
            'toOptionFromErr',
            'ok',
            'err',
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
    'PlainResult/mapErr': {
        'exports': [
            'mapErrForResult',
        ]
    },
    'PlainResult/mapOr': {
        'exports': [
            'mapOrForResult'
        ]
    },
    'PlainResult/mapOrElse': {
        'exports': [
            'mapOrElseForResult'
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
            'expect',
            'map',
            'mapOr',
            'mapOrElse',
            'orElse',
            'tap',
            'unwrap',
            'unwrapOr',
            'unwrapOrElse',
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
    'Undefinable/mapOr': {
        'exports': [
            'mapOrForUndefinable'
        ]
    },
    'Undefinable/mapOrElse': {
        'exports': [
            'mapOrElseForUndefinable'
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
        // TODO:
        // 'shared/ErrorMessage': [],
        // 'shared/Function': [],
        // 'shared/Mutable': []
    */
};

/*eslint quote-props: [2, "always"] */

'use strict';

// ESLint Configuration Files enables to include comments.
// http://eslint.org/docs/configuring/#comments-in-configuration-files
module.exports = {
    'ecmaFeatures': {
        'arrowFunctions': false,
        'binaryLiterals': false,
        'blockBindings': false,
        'classes': false,
        'defaultParams': false,
        'destructuring': false,
        'forOf': false,
        'generators': false,
        'modules': false,
        'objectLiteralComputedProperties': false,
        'objectLiteralDuplicateProperties': false,
        'objectLiteralShorthandMethods': false,
        'objectLiteralShorthandProperties': false,
        'octalLiterals': false,
        'regexUFlag': false,
        'regexYFlag': false,
        'restParams': false,
        'spread': false,
        'superInFunctions': false,
        'templateStrings': false,
        'unicodeCodePointEscapes': false,
        'globalReturn': false,
        'experimentalObjectRestSpread': false
    },

    'env': {
        'node': true
    },

    'rules': {
        'no-var': 0,
    }
};

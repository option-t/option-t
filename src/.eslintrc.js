/*eslint quote-props: [2, "always"] */

'use strict';

// ESLint Configuration Files enables to include comments.
// http://eslint.org/docs/configuring/#comments-in-configuration-files
module.exports = {
    'parserOptions': {
        'ecmaVersion': 5,
    },

    'env': {
        'es6': false,
        'node': false,
        'commonjs': true,
    },

    'rules': {
        'no-var': 0,
    }
};

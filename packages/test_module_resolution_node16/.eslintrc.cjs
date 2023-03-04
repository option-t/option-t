/*eslint quote-props: [2, "always"] */

'use strict';

const path = require('node:path');

// ESLint Configuration Files enables to include comments.
// https://eslint.org/docs/user-guide/configuring/
module.exports = {

    'overrides': [
        {
            'files': ['./src/**/*'],
            'extends': ['../../tools/eslint/eslintrc_typescript.cjs', 'prettier'],

            'parserOptions': {
                'sourceType': 'module',
                'project': path.resolve(__dirname, './tsconfig.json'),
                'extraFileExtensions': ['.cjs'],
            },

            'env': {
                'es6': false,
                'node': false,
                'commonjs': false,
            },
        },
    ],
};

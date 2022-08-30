/*eslint quote-props: [2, "always"] */

'use strict';

const path = require('node:path');

const { rules } = require('./tools/eslint/eslintrc_typescript.cjs');
const KEY_NAMING_CONVENTION = '@typescript-eslint/naming-convention';

// We allow `K` or `V` forms to avoid to rewrite type parameters.
const newNamingConventionRule = [...rules[KEY_NAMING_CONVENTION]].map((item) => {
    if (typeof item === 'string') {
        return item;
    }

    if (item.selector !== 'typeParameter') {
        return item;
    }

    return {
        'selector': 'typeParameter',
        'format': ['PascalCase'],
        'custom': {
            'regex': '(^[A-Z]\\d?$|^T[A-Z][a-zA-Z]+\\d?$)',
            'match': true,
        },
    };
});

// ESLint Configuration Files enables to include comments.
// https://eslint.org/docs/user-guide/configuring/
module.exports = {

    'root': true,

    'extends': [
        './tools/eslint/eslintrc_core.cjs',
    ],

    'parserOptions': {
        'ecmaVersion': 2022,
    },

    'env': {
        'es2021': true,
        'node': true,
    },

    'reportUnusedDisableDirectives': true,

    'rules': {
        'no-unused-private-class-members': 'warn',
    },

    'overrides': [
        {
            'files': ['*.cjs'],
            'parserOptions': {
                'sourceType': 'script',
            },

            'rules': {
            },
        },
        {
            'files': ['*.js', '*.mjs'],
            'parserOptions': {
                'sourceType': 'module',
            },

            'rules': {
            },
        },
        {
            'files': ['./src/**/*'],
            'extends': ['./tools/eslint/eslintrc_typescript.cjs', 'prettier'],

            'parserOptions': {
                'sourceType': 'module',
                'project': path.resolve(__dirname, './tsconfig.eslint.json'),
                'extraFileExtensions': ['.cjs'],
            },

            'env': {
                'es6': false,
                'node': false,
                'commonjs': false,
            },

            'rules': {
                [KEY_NAMING_CONVENTION]: newNamingConventionRule,
            },
        },
        {
            'files': ['./__tests__/**/*'],
            'rules': {
                'no-magic-numbers': 'off',
            },
        }
    ],
};

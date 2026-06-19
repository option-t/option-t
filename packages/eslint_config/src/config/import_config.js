import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { createNodeResolver, default as importPlugin } from 'eslint-plugin-import-x';

const plugins = {
    'import-x': importPlugin,
};

const settings = {
    'import-x/resolver-next': [
        // @prettier-ignore
        createTypeScriptImportResolver(),
        createNodeResolver(),
    ],
};

const rulesForAllCode = {
    'import-x/order': [
        'warn',
        {
            alphabetize: {
                caseInsensitive: true,
                order: 'asc',
            },
            groups: [
                // @prettier-ignore
                'builtin',
                'external',
                'internal',
                'parent',
                'sibling',
                'index',
            ],
        },
    ],
};

const rulesForLibaryCode = {
    // Disallow to import Node.js builtin module.
    // It's hurt the portability of this library.
    'import-x/no-nodejs-modules': 'error',
};

/**
 *  @type   {import('eslint').Linter.Config}
 */
export const configForLibaryCode = {
    plugins,
    rules: {
        ...rulesForAllCode,
        ...rulesForLibaryCode,
    },
    settings,
};

/**
 *  @type   {import('eslint').Linter.Config}
 */
export const configForJavaScript = {
    plugins,
    rules: {
        ...rulesForAllCode,
    },
};

/**
 *  @type   {import('eslint').Linter.Config}
 */
export const configForTypeScript = {
    plugins,
    settings,
    rules: {
        ...rulesForAllCode,
    },
};

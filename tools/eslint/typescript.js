import * as path from 'node:path';

import tsESLintPlugin from '@typescript-eslint/eslint-plugin';
import tsESLintParser from '@typescript-eslint/parser';

import globals from 'globals';

import tsPresets from './vendor/eslintrc_typescript.cjs';
import * as prettier from './prettier.js';

const KEY_NAMING_CONVENTION = '@typescript-eslint/naming-convention';

const rules = tsPresets.rules;

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

const sourceType = 'module';

export function createlanguageOptionsForTypeScript(baseDir, filename = 'tsconfig.json') {
    const TSCONFIG_PATH = path.resolve(baseDir, filename);

    return Object.freeze({
        sourceType,
        globals: {
            ...globals.builtin,
            'PromiseSettledResult': 'readonly',
        },
        parser: tsESLintParser,
        parserOptions: {
            project: TSCONFIG_PATH,
            ecmaFeatures: {},
        },
    });
}

export const config = Object.freeze({
    plugins: {
        '@typescript-eslint': tsESLintPlugin,
    },
    rules: {
        ...tsPresets.rules,
        ...prettier.rules,

        [KEY_NAMING_CONVENTION]: newNamingConventionRule,
        '@typescript-eslint/no-import-type-side-effects': 'warn',
    },
});
import * as path from 'node:path';

import tsESLintPlugin from '@typescript-eslint/eslint-plugin';
import tsESLintParser from '@typescript-eslint/parser';

import globals from 'globals';

import tsPresets from './vendor/eslintrc_typescript.cjs';

const KEY_NAMING_CONVENTION = '@typescript-eslint/naming-convention';

const tsPresetsRules = tsPresets.rules;

const rules = Object.freeze({
    // In JavaScript, after ES Module or CommonJS era (single module per single file),
    // excluding the case to improve an API ergonomics or requirement to implement an object interface,
    // we don't have to belong a function that does not touch `this` to a class unlike Java or C++.
    // We should not do such a thing.
    //
    // This rule bans a class instance method
    // that does not touch any `this` to improve a possibility to minify a code.
    //
    // Additionally, it's hard to minify a property that is on prototype chain.
    // Typically, they appears as a pattern as class' instance method.
    // We cannot remove or mangle a code like `a.foo()` style code
    // without analysis for whole of programs including usages of reflection
    // or identifying what item is a part of public interface.
    //
    // To get a chance to improve a code size performance and to simplify a code,
    // it's better that we should export a standalone function directly
    // instead of a part of class if it does not affect an API ergonomics.
    'class-methods-use-this': 'off',
    '@typescript-eslint/class-methods-use-this': [
        'warn',
        {
            // We would like to allow override the base method on super class.
            ignoreOverrideMethods: true,
            // We would like to allow to implement an empty method as a part of the interface.
            ignoreClassesThatImplementAnInterface: 'public-fields',
        },
    ],

    // We would like to sort the style to import a type.
    '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
            disallowTypeAnnotations: true,
        },
    ],

    // This enforces a type annotation for an explicit module interface.
    '@typescript-eslint/explicit-module-boundary-types': [
        'warn',
        {
            // We would like to ban `any`
            allowArgumentsExplicitlyTypedAsAny: false,
            // Ideally, we should set this `false` but it's sometimes too complex......
            allowHigherOrderFunctions: true,
            // We would like to force type annotation for function expression.
            allowTypedFunctionExpressions: false,
        },
    ],

    // This prevents importing a module accidentally to avoid a side effect caused by importing.
    '@typescript-eslint/no-import-type-side-effects': 'warn',

    // Should throw only Error or derived classes.
    '@typescript-eslint/only-throw-error': 'error',
});

const rulesRequiringType = Object.freeze({
    // Today, in almost case, we would develop our application with ES2015~ polyfills
    // and it's rare case to develop an app without ~ES2015 polyfills.
    // So I think we should enable this rule.
    // If your application cannot load any polyfills or have any perf issues,
    // let's disable this.
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',

    // This is nice to work with union.
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
});

// We allow `K` or `V` forms to avoid to rewrite type parameters.
const newNamingConventionRule = [...tsPresetsRules[KEY_NAMING_CONVENTION]].map((item) => {
    if (typeof item === 'string') {
        return item;
    }

    if (item.selector !== 'typeParameter') {
        return item;
    }

    return {
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom: {
            regex: '(^[A-Z]\\d?$|^T[A-Z][a-zA-Z]+\\d?$)',
            match: true,
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
            PromiseSettledResult: 'readonly',
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
        ...rules,
        ...rulesRequiringType,

        [KEY_NAMING_CONVENTION]: newNamingConventionRule,
    },
});

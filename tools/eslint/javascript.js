import vendoredCoreConfig from './vendor/eslintrc_core.cjs';
import * as prettierConfig from './prettier.js';

export const rules = Object.freeze({
    ...vendoredCoreConfig.rules,
    ...prettierConfig.rules,

    'no-unused-private-class-members': 'warn',

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
    'class-methods-use-this': 'warn',
});

export function createLanguageOptionsForModule(ecmaVersion, globals) {
    const option = Object.freeze({
        ecmaVersion,
        sourceType: 'module',
        globals,
    });
    return option;
}

export function createLanguageOptionsForCommonJS(ecmaVersion, globals) {
    const option = Object.freeze({
        ecmaVersion,
        sourceType: 'commonjs',
        globals,
    });
    return option;
}

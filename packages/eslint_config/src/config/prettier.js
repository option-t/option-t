import presets from 'eslint-config-prettier';

const rules = Object.freeze({
    // This rule avoid the prettier's behavior which omits curly blacket for if statement by default like following:
    //
    //  before:
    //      ```js
    //          if (cond)
    //              bar();
    //      ```
    //  after:
    //      ```js
    //          if (cond) bar();
    //      ```
    //
    // We think it would better to enforce blacket for all statement block because:
    //  1. uniform coding style,
    //  2. make more solid & simple code style.
    // see also https://github.com/prettier/eslint-config-prettier#curly
    curly: ['error', 'all'],
});

/**
 *  @type   {Array<import('eslint').Linter.FlatConfig>}
 */
export const configs = Object.freeze([
    {
        rules: presets.rules,
    },
    {
        rules,
    },
]);

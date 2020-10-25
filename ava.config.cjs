/*eslint-env commonjs*/
/*eslint quote-props: [2, "always"] */

'use strict';

module.exports = function resolveAvaConfig() {
    return {
        'files': [
            '__tests__/**/*.test.mjs'
        ],
        'babel': {
            'testOptions': {
                'babelrc': false
            }
        }
    };
};

/*eslint-env commonjs*/

'use strict';

module.exports = function resolveAvaConfig() {
    return {
        files: [
            '__tests__/**/*.test.mjs'
        ],
        babel: {
            testOptions: {
                babelrc: false
            }
        }
    };
};

import * as path from 'node:path';

const THIS_DIRNAME = import.meta.dirname;
const pathResolve = path.resolve.bind(undefined, THIS_DIRNAME);

export default {
    plugins: [
        [
            pathResolve('./babel-plugin-modify-ext.mjs'),
            {
                extension: '.cjs',
            },
        ],
        [
            '@babel/plugin-transform-modules-commonjs',
            {
                importInterop: 'none',
                strict: true,
            },
        ],
    ],
};

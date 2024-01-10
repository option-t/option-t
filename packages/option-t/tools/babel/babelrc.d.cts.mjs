import * as path from 'node:path';

const THIS_DIRNAME = import.meta.dirname;
const pathResolve = path.resolve.bind(undefined, THIS_DIRNAME);

export default {
    plugins: [
        [
            '@babel/plugin-syntax-typescript',
            {
                dts: true,
            },
        ],
        [
            pathResolve('./babel-plugin-modify-ext.mjs'),
            {
                extension: '.cjs',
            },
        ],
    ],
};

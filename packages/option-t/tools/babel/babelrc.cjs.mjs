import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const THIS_FILENAME = fileURLToPath(import.meta.url);
const THIS_DIRNAME = path.dirname(THIS_FILENAME);
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

export default {
    'plugins': [
        ['@babel/plugin-syntax-typescript', {
            dts: true,
        }],
        ['./babel-plugin-modify-ext.mjs', {
            extension: '.cjs',
        }],
    ],
};

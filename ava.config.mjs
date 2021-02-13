export default function resolveAvaConfig() {
    return {
        nonSemVerExperiments: {
            nextGenConfig: true,
        },

        files: ['__tests__/**/*.test.mjs'],
        babel: {
            testOptions: {
                babelrc: false,
            },
        },
    };
}

export const babelEnvPresetConfig = {
    targets: {
        // Our targeted low-end environment is still IE11.
        // But this is simple that we only requires ES5 and our package does not require post ES6 features at now.
        // This means that it's not a hard to ship a code to IE11, at least now.
        // If we need post ES6 features, then we would ship transformed code to IE11.
        //
        // Chakra bundled with IE9 almost supports ES5. So this package ~IE9 might work on it.
        // But we'll not ensure to support IE9.
        ie: '11',
        node: '8',
    },
    spec: false,
    loose: true,
    debug: false,
    useBuiltIns: false,
    shippedProposals: false,
};

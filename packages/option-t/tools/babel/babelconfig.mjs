export const babelEnvPresetConfig = {
    // The final generated code will align to the oldest target of followings.
    targets: {
        // We should keep this field conservatively to avoid any syntax changes.
        // This would be a key person of this list for almost cases.
        // https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping
        node: '8', // ES2017
        // Sort with Firefox ESR.
        // https://wiki.mozilla.org/Release_Management/Calendar
        firefox: '102',
        // Sort with ChromeOS' LTS.
        // https://support.google.com/chrome/a/answer/11333726?hl=en
        chrome: '102',
        // We cannot know Safari's policy about thier lifecycle due to Apple does not say about it explictly.
        // But we can read about it implicitly by their software release and by their abandanant a security fix.
        //
        // For example,
        //
        //  1. WebKit removed macOS Catalina support at Aug. 2022.
        //      - https://github.com/WebKit/WebKit/commit/677b453daf6855bb2601d776532503e1c07ddc90
        //      - https://github.com/WebKit/WebKit/commit/3ae8891d52913a34e3338f9b531a23bf3e55cbb7
        //  2. macOS Catalina is the oldest version running with Safari 15.
        //     Safari 16 does not support macOS Catalina.
        //     https://en.wikipedia.org/wiki/Safari_(web_browser)
        //  3. macOS Catalina is the oldest version that Safari 15 runs
        //     and Apple don't release any update for Catalina after that
        //     even though there are bunch of security fixes included in newer versions of Apple OSes released as stable.
        //     https://en.wikipedia.org/wiki/MacOS_Catalina#Release_history
        //  4. For iOS, iPadOS, and others, Apple releases a security update only for latest major versions of them.
        //      - We can regard Apple does not support old major versions for that basically.
        //      - Of course, there are some exceptins.
        //          - Apple released security patch for iOS 15 in Jan. 2023.
        //          - We know Apple still release a security patch for iOS 12.x occasionally
        //
        // From above, at this moment (Spring 2023),
        // we can think that Apple supports latest one or (latest - 1) version that they will get a security fix.
        //
        // Of course, strictly, each of applications need to judge by their user metrics.
        // But we can consider to support a version expected to get a chance to receive a security fix.
        // By contrasts, we can drop older version looked as that Apple abandon to provide a security fix.
        safari: '15.6',
    },
    spec: false,
    loose: true,
    debug: false,
    useBuiltIns: false,
    shippedProposals: false,
};

'use strict';

const PACKAGE_NAME = 'option-t';

(async function main() {
    // XXX: Node v12 does not support `import()` by default
    if (/^v12\.\d+\.\d+$/u.test(process.version)) {
        return;
    }

    await import(PACKAGE_NAME);
})().catch((e) => {
    console.error(e);
    process.exit(1);
});

import * as assert from 'assert';

const SHOULD_EXPOSE_LIB = true;

export function addHistoricalPathToExportsFields(o, histricalJSPathSeq) {
    // https://nodejs.org/api/esm.html
    for (const entry of histricalJSPathSeq) {
        assert.ok(entry.isForCompat());
        if (entry.isLib()) {
            if (!SHOULD_EXPOSE_LIB) {
                continue;
            }
        }

        if (!entry.hasExtension()) {
            continue;
        }

        const file = entry.name();
        const filepath = `./${file}`;
        // eslint-disable-next-line no-param-reassign
        o[filepath] = filepath;

        // Use cjs for lib/
        if (SHOULD_EXPOSE_LIB && filepath.startsWith('./lib/') && filepath.endsWith('.mjs')) {
            continue;
        }

        const filepathWithoutExtension = filepath.replace(/\.(js|mjs|cjs)$/u, '');
        // eslint-disable-next-line no-param-reassign
        o[filepathWithoutExtension] = filepath;
    }

    const DIR_SUBPATH = [
        'Maybe',
        'Nullable',
        'PlainOption',
        'PlainResult',
        'Undefinable',
    ];

    const handleSpecialCaseOfNodeModuleResolution = (list, extension) => {
        for (const dirpath of list) {
            const key = `./${dirpath}`;

            // eslint-disable-next-line no-param-reassign
            o[key] = `${key}/index.${extension}`;
        }
    };

    handleSpecialCaseOfNodeModuleResolution(DIR_SUBPATH.map((path) => `cjs/${path}`), 'js');
    handleSpecialCaseOfNodeModuleResolution(DIR_SUBPATH.map((path) => `esm/${path}`), 'mjs');
    // Our defult is still commonjs. For lib/, we should use `.js`.
    if (SHOULD_EXPOSE_LIB) {
        handleSpecialCaseOfNodeModuleResolution(DIR_SUBPATH.map((path) => `lib/${path}`), 'js');
    }
}

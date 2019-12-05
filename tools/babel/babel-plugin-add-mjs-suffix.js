'use strict';

const EXTENSION = '.mjs';

function withExtension(name) {
    return `${name}.mjs`;
}

function babelAddMjsSuffixPlugin({ types: t }) {
    return {
        visitor: {
            ImportDeclaration(path, _state) {
                const node = path.node;
                const source = node.source;
                if (
                    t.isStringLiteral(source) &&
                    source.value.endsWith(EXTENSION)
                ) {
                    return;
                }

                if (node.specifiers.length === 0) {
                    return;
                }

                const specifiers = node.specifiers;

                const newSource = t.stringLiteral(withExtension(source.value));
                const declaration = t.importDeclaration(specifiers, newSource);
                t.assertImportDeclaration(declaration);

                path.replaceWith(declaration);
            },

            ExportNamedDeclaration(path, _state) {
                const node = path.node;
                const source = node.source;
                if (
                    t.isStringLiteral(source) &&
                    source.value.endsWith(EXTENSION)
                ) {
                    return;
                }

                if (node.specifiers.length === 0) {
                    return;
                }

                const specifiers = node.specifiers;

                const newSource = t.stringLiteral(withExtension(source.value));
                const declaration = t.exportNamedDeclaration(null, specifiers, newSource);
                t.assertExportNamedDeclaration(declaration);

                path.replaceWith(declaration);
            },
        },
    };
}

module.exports = babelAddMjsSuffixPlugin;

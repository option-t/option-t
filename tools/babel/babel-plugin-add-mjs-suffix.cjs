'use strict';

const EXTENSION = '.mjs';

function withExtension(name) {
    return `${name}${EXTENSION}`;
}

function rewriter(t, path, _state, declarationFactory) {
    const node = path.node;
    const source = node.source;
    if (!t.isStringLiteral(source) || source.value.endsWith(EXTENSION)) {
        return;
    }

    if (node.specifiers.length === 0) {
        return;
    }

    const specifiers = node.specifiers;

    const newSource = t.stringLiteral(withExtension(source.value));
    const declaration = declarationFactory(specifiers, newSource);

    path.replaceWith(declaration);
}

function babelAddMjsSuffixPlugin({ types: t }) {
    return {
        visitor: {
            ImportDeclaration(path, state) {
                rewriter(t, path, state, (specifiers, source) => {
                    const d = t.importDeclaration(specifiers, source);
                    t.assertImportDeclaration(d);
                    return d;
                });
            },

            ExportNamedDeclaration(path, state) {
                rewriter(t, path, state, (specifiers, source) => {
                    const d = t.exportNamedDeclaration(null, specifiers, source);
                    t.assertExportNamedDeclaration(d);
                    return d;
                });
            },
        },
    };
}

module.exports = babelAddMjsSuffixPlugin;

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

                const specifiers = node.specifiers.map((node) => {
                    const newLocal = t.identifier(node.local.name);
                    const newImported = t.identifier(node.imported.name);
                    const newNode = t.importSpecifier(newLocal, newImported);
                    return newNode;
                });

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

                const specifiers = node.specifiers.map((node) => {
                    t.assertExportSpecifier(node);
                    const local = node.local;
                    t.assertIdentifier(local);
                    const exported = node.exported;
                    t.assertIdentifier(exported);

                    const newLocal = t.identifier(local.name);
                    const newExported = t.identifier(exported.name);
                    const newNode = t.exportSpecifier(newLocal, newExported);
                    return newNode;
                });

                const newSource = t.stringLiteral(withExtension(source.value));
                const declaration = t.exportNamedDeclaration(null, specifiers, newSource);
                t.assertExportNamedDeclaration(declaration);

                path.replaceWith(declaration);
            },
        },
    };
}

module.exports = babelAddMjsSuffixPlugin;

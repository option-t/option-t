import * as assert from 'node:assert/strict';

function withExtension(extension, name) {
    return `${name}${extension}`;
}

function rewriter(t, path, state, declarationFactory) {
    const option = state.opts;
    const extension = option.extension;
    assert.ok(typeof extension === 'string', 'opts.extension must be set');
    assert.ok(extension.startsWith('.'), 'opts.extension must start with `.`');

    const node = path.node;
    const source = node.source;
    if (!t.isStringLiteral(source) || source.value.endsWith(extension)) {
        return;
    }

    if (node.specifiers.length === 0) {
        return;
    }

    const specifiers = node.specifiers;

    const newSource = t.stringLiteral(withExtension(extension, source.value));
    const declaration = declarationFactory(specifiers, newSource);

    path.replaceWith(declaration);
}

export default function babelAddMjsSuffixPlugin({ types: t }) {
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

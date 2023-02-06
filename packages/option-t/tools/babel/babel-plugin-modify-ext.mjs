import * as assert from 'node:assert/strict';
import * as nodePath from 'node:path';

function withExtension(extension, name) {
    return `${name}${extension}`;
}

function replaceLastExtensionWith(oldExtension, newExtension, name) {
    assert.ok(oldExtension.startsWith('.'));
    assert.ok(newExtension.startsWith('.'));

    const pattern = new RegExp(`${oldExtension}$`, 'u');
    const replaced = name.replace(pattern, newExtension);
    return replaced;
}

/**
 * @param {import('@babel/core').types} t
 * @param {import('@babel/core').NodePath<ImportDeclaration|ExportNamedDeclaration>} path
 * @param {import('@babel/core').PluginPass} state
 * @param {*} declarationFactory
 * @param {*} kindGetter
 * @returns {void}
 */
function rewriter(t, path, state, declarationFactory, kindGetter) {
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
    const filepathValue = source.value;
    const currentExt = nodePath.extname(filepathValue);
    const kind = kindGetter(node);

    let newLiteral;
    if (currentExt === '') {
        // this file path value does not have any extension.
        newLiteral = withExtension(extension, filepathValue);
    } else {
        newLiteral = replaceLastExtensionWith(currentExt, extension, filepathValue);
    }

    const newSource = t.stringLiteral(newLiteral);
    const declaration = declarationFactory(specifiers, newSource, kind);
    path.replaceWith(declaration);
}

/**
 * @typedef {import('@babel/core').types.ImportDeclaration} ImportDeclaration
 */

/**
 * @param {import('@babel/core').types} t
 * @param {import('@babel/core').NodePath<ImportDeclaration>} path
 * @param {import('@babel/core').PluginPass} state
 * @param {*} declarationFactory
 * @returns {void}
 */
function rewriterForImportDeclaration(t, path, state, declarationFactory) {
    rewriter(t, path, state, declarationFactory, (node) => {
        const importKind = node.importKind;
        return importKind;
    });
}

/**
 * @typedef {import('@babel/core').types.ExportNamedDeclaration} ExportNamedDeclaration
 */

/**
 * @param {import('@babel/core').types} t
 * @param {import('@babel/core').NodePath<ExportNamedDeclaration>} path
 * @param {import('@babel/core').PluginPass} state
 * @param {*} declarationFactory
 * @returns {void}
 */
function rewriterForExportNamedDeclaration(t, path, state, declarationFactory) {
    rewriter(t, path, state, declarationFactory, (node) => {
        const exportKind = node.exportKind;
        return exportKind;
    });
}

/**
 * @param {import('@babel/core')} param0
 * @returns {import('@babel/core').PluginObj}
 */
export default function babelAddMjsSuffixPlugin({ types: t }) {
    return {
        visitor: {
            ImportDeclaration(path, state) {
                rewriterForImportDeclaration(t, path, state, (specifiers, source, kind) => {
                    const d = t.importDeclaration(specifiers, source);
                    d.importKind = kind;
                    t.assertImportDeclaration(d);
                    return d;
                });
            },

            ExportNamedDeclaration(path, state) {
                rewriterForExportNamedDeclaration(t, path, state, (specifiers, source, kind) => {
                    const d = t.exportNamedDeclaration(null, specifiers, source);
                    d.exportKind = kind;
                    t.assertExportNamedDeclaration(d);
                    return d;
                });
            },
        },
    };
}

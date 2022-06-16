NODE_BIN := node
NPM_MOD_DIR := $(CURDIR)/node_modules
NPM_BIN := $(NPM_MOD_DIR)/.bin
NPM_CMD := npm

SRC_DIR := $(CURDIR)/src
DOCS_DIR := $(CURDIR)/docs
SRC_TEST_DIR := $(CURDIR)/__tests__

DIST_DIR := $(CURDIR)/__dist
DIST_DOCS_DIR := $(DIST_DIR)/docs
DIST_ESM_DIR := $(DIST_DIR)/esm
DIST_COMMONJS_DIR := $(DIST_DIR)/cjs
DIST_MIXED_LIB_DIR := $(DIST_DIR)/lib
TMP_MJS_DIR := $(CURDIR)/__tmp_mjs

PROJECT_NPMRC := $(CURDIR)/.npmrc

ESLINT_APPLIED_EXTENSIONS := .js,.jsx,cjs,.mjs,.ts,.tsx

## In CI environment, we should change some configuration
ifeq ($(CI),true)
else
endif


all: help

help:
	@echo "Specify the task"
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@exit 1


###########################
# Clean
###########################
CLEAN_TARGETS := \
	dist \
	tmp_mjs \
	npmrc \

.PHONY: clean
clean: $(addprefix clean_, $(CLEAN_TARGETS))

.PHONY: clean_dist
clean_dist:
	$(NPM_BIN)/del $(DIST_DIR)

.PHONY: clean_tmp_mjs
clean_tmp_mjs:
	$(NPM_BIN)/del $(TMP_MJS_DIR)

.PHONY: clean_npmrc
clean_npmrc:
	$(NPM_BIN)/del $(PROJECT_NPMRC)

###########################
# Build
###########################
.PHONY: build
build: __build cp_docs cp_changelog cp_license cp_readme generate_manifest ## Build artifacts required to publish packages.

.PHONY: __build
__build: build_cjs build_esm build_mixedlib ## Build all targets.

.PHONY: build_cjs
build_cjs: build_cjs_js build_cjs_type_definition build_cjs_ts ## Build `cjs/`.

.PHONY: build_cjs_js
build_cjs_js: clean_dist
	$(NPM_BIN)/babel $(SRC_DIR) \
    --out-dir $(DIST_COMMONJS_DIR) \
    --extensions .js \
    --no-babelrc \
    --config-file $(CURDIR)/tools/babel/babelrc.cjs.mjs

.PHONY: build_cjs_type_definition
build_cjs_type_definition: clean_dist
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(SRC_DIR) --source '$(SRC_DIR)/**/*.d.ts' --destination $(DIST_COMMONJS_DIR)

.PHONY: build_cjs_ts
build_cjs_ts: clean_dist
	$(NPM_BIN)/tsc --project $(CURDIR)/tsconfig.cjs.json --outDir $(DIST_COMMONJS_DIR)

.PHONY: build_esm
build_esm: build_mjs_cp_mjs_to_esm build_mjs_cp_dts_to_esm ## Build `esm/`.

.PHONY: build_mjs_cp_mjs_to_esm
build_mjs_cp_mjs_to_esm: build_mjs_rename_js_to_mjs clean_dist
	$(NPM_BIN)/babel $(TMP_MJS_DIR) --out-dir $(DIST_ESM_DIR) --extensions=.mjs --no-babelrc --config-file $(CURDIR)/tools/babel/babelrc.mjs.pathrewiter.mjs --keep-file-extension

.PHONY: build_mjs_cp_dts_to_esm
build_mjs_cp_dts_to_esm: build_mjs_create_tmp_mjs clean_dist
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(TMP_MJS_DIR) --source '$(TMP_MJS_DIR)/**/*.d.ts' --destination $(DIST_ESM_DIR)

.PHONY: build_mjs_rename_js_to_mjs
build_mjs_rename_js_to_mjs: build_mjs_create_tmp_mjs
	$(NODE_BIN) $(CURDIR)/tools/extension_renamer.mjs --target-dir $(TMP_MJS_DIR)

.PHONY: build_mjs_create_tmp_mjs
build_mjs_create_tmp_mjs: build_mjs_create_tmp_mjs_call_tsc build_mjs_create_tmp_mjs_call_babel build_mjs_create_tmp_mjs_cal_cpx

.PHONY: build_mjs_create_tmp_mjs_call_tsc
build_mjs_create_tmp_mjs_call_tsc: clean_tmp_mjs
	$(NPM_BIN)/tsc --project $(CURDIR)/tsconfig.esm.json --outDir $(TMP_MJS_DIR)

.PHONY: build_mjs_create_tmp_mjs_call_babel
build_mjs_create_tmp_mjs_call_babel: clean_tmp_mjs
	$(NPM_BIN)/babel $(SRC_DIR) --out-dir $(TMP_MJS_DIR) --extensions=.js --no-babelrc --config-file $(CURDIR)/tools/babel/babelrc.esm.mjs

.PHONY: build_mjs_create_tmp_mjs_cal_cpx
build_mjs_create_tmp_mjs_cal_cpx: clean_tmp_mjs
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(SRC_DIR) --source '$(SRC_DIR)/**/*.d.ts' --destination $(TMP_MJS_DIR)


# We need to keep this directory to continue to support TypeScript moduleResolution=node..
.PHONY: build_mixedlib
build_mixedlib: build_mixedlib_cp_dts ## Build `lib/`.

.PHONY: build_mixedlib_cp_dts
build_mixedlib_cp_dts: build_esm clean_dist
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(DIST_ESM_DIR) --source '$(DIST_ESM_DIR)/**/*.d.ts' --destination $(DIST_MIXED_LIB_DIR)

.PHONY: cp_docs
cp_docs: clean_dist
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(DOCS_DIR) --source '$(DOCS_DIR)/**/*' --destination $(DIST_DOCS_DIR)

.PHONY: cp_changelog
cp_changelog: clean_dist
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(CURDIR) --source '$(CURDIR)/{CHANGELOG.md,CHANGELOG_OLD.md}' --destination $(DIST_DIR)

.PHONY: cp_license
cp_license: clean_dist
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(CURDIR) --source '$(CURDIR)/LICENSE.MIT' --destination $(DIST_DIR)

.PHONY: cp_readme
cp_readme: clean_dist
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(CURDIR) --source '$(CURDIR)/README.md' --destination $(DIST_DIR)

.PHONY: generate_manifest
generate_manifest: clean_dist
	$(NODE_BIN) $(CURDIR)/tools/package_json_rewriter/main.mjs --input-manifest-path $(CURDIR)/package.json --destination $(DIST_DIR)


###########################
# Lint
###########################
.PHONY: lint
lint: eslint ## Run all lints

.PHONY: eslint
eslint:
	$(NPM_BIN)/eslint --ext $(ESLINT_APPLIED_EXTENSIONS) $(CURDIR)/

.PHONY: typecheck
typecheck: ## Check static types
	$(NPM_BIN)/tsc -p $(CURDIR)/tsconfig.json --noEmit


###########################
# Test
###########################
.PHONY: test_unittest
test_unittest: __build ## Build and run unit tests
	$(MAKE) run_test_unittest -C $(CURDIR)

.PHONY: run_test_unittest
run_test_unittest: ## Run unit tests only.
	$(NPM_BIN)/ava --config $(CURDIR)/ava.config.mjs

.PHONY: git_diff
git_diff: ## Test whether there is no committed changes.
	git diff --exit-code

.PHONY: test_distribution_contain_all
test_distribution_contain_all: build
	$(MAKE) run_test_distribution_contain_all

.PHONY: run_test_distribution_contain_all
run_test_distribution_contain_all:
	OUTDIR=$(DIST_DIR) $(NODE_BIN) $(CURDIR)/tools/test_package_contains_expected_all.mjs

.PHONY: test_esmodule_path_rewrite
test_esmodule_path_rewrite: build
	$(MAKE) run_test_esmodule_path_rewrite -C $(CURDIR)

.PHONY: run_test_esmodule_path_rewrite
run_test_esmodule_path_rewrite:
	$(NODE_BIN) $(CURDIR)/tools/test_esmodule_path_rewrite.mjs --target $(DIST_DIR)

.PHONY: test_package_install
test_package_install: build __run_install_package
	$(MAKE) run_test_package_install -C $(CURDIR)
	$(MAKE) post_cleanup_to_test_package_install -C $(CURDIR)

.PHONY: __run_install_package
__run_install_package: build
	yarn add --dev $(DIST_DIR)

.PHONY: run_test_package_install
run_test_package_install:
	$(NODE_BIN) $(CURDIR)/tools/test_package_exports.mjs

.PHONY: post_cleanup_to_test_package_install
post_cleanup_to_test_package_install:
	$(MAKE) git_reset_to_head -C $(CURDIR)


###########################
# Tools
###########################
.PHONY: format
format: ## Apply formatters
	$(NPM_BIN)/prettier --write $(CURDIR)

.PHONY: format_check
format_check: ## Check code formatting
	$(NPM_BIN)/prettier --check $(CURDIR)

.PHONY: eslint_fix
eslint_fix: ## Apply ESLint's `--fix` mode
	$(NPM_BIN)/eslint --ext $(ESLINT_APPLIED_EXTENSIONS) --fix $(CURDIR)/

.PHONY: generate_import_path_list_md
generate_import_path_list_md: ## Generate all public import paths to docs/import_path.md
	$(NODE_BIN) $(CURDIR)/tools/generate_import_path_list_markdown.mjs --source ${SRC_DIR} --destination ${DOCS_DIR}

TARGETS_SHOULD_BE_RESET_AFTER_TEST_TO_INSTALL := \
  package.json \
  yarn.lock

.PHONY: git_reset_to_head
git_reset_to_head: $(TARGETS_SHOULD_BE_RESET_AFTER_TEST_TO_INSTALL)
	git checkout HEAD -- $(addprefix $(CURDIR)/, $^)


.PHONY: prepublish
prepublish: ## Run some commands for 'npm run prepublish'
	$(MAKE) clean -C $(CURDIR)
	$(MAKE) build -C $(CURDIR)
	$(MAKE) test_distribution_contain_all -C $(CURDIR)
	$(MAKE) run_test_esmodule_path_rewrite -C $(CURDIR)

.PHONY: publish
publish: copy_npmrc_to_project_root ## Run some commands for 'npm publish'
	npm publish $(DIST_DIR)/

.PHONY: copy_npmrc_to_project_root
copy_npmrc_to_project_root: clean_npmrc
	cp $(CURDIR)/tools/publish/.npmrc $(PROJECT_NPMRC)

REPO_ROOT_DIR := $(abspath $(CURDIR)/../..)
INNER_PACKAGES_DIR := $(abspath $(CURDIR)/..)

NODE_BIN := node
NPM_MOD_DIR := $(REPO_ROOT_DIR)/node_modules
NPM_BIN := $(NPM_MOD_DIR)/.bin
NPM_CMD := npm

SRC_DIR := $(CURDIR)/src
DOCS_DIR := $(REPO_ROOT_DIR)/docs
SRC_TEST_DIR := $(CURDIR)/__tests__

DIST_DIR := $(CURDIR)/__dist
DIST_DOCS_DIR := $(DIST_DIR)/docs
DIST_ESM_DIR := $(DIST_DIR)/esm
DIST_COMMONJS_DIR := $(DIST_DIR)/cjs
GENERATED_ESM_DIR := $(CURDIR)/esm
GENERATED_COMMONJS_DIR := $(CURDIR)/cjs
TMP_BASE_DIR := $(CURDIR)/__tmp_base
TMP_MJS_DIR := $(CURDIR)/__tmp_mjs
TMP_CJS_DIR := $(CURDIR)/__tmp_cjs

CJS_EXTENSION_GLOB := cjs
MJS_EXTENSION_GLOB := {js,mjs}
D_CTS_EXTENSION_GLOB := d.cts
DTS_EXTENSION_GLOB := d.{ts,cts,mts}

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
	generated_cjs \
	generated_esm \
	tmp_base \
	tmp_mjs \
	tmp_cjs

.PHONY: clean
clean: $(addprefix clean_, $(CLEAN_TARGETS))

.PHONY: clean_dist
clean_dist:
	$(NPM_BIN)/del $(DIST_DIR)

.PHONY: clean_generated_cjs
clean_generated_cjs:
	$(NPM_BIN)/del $(GENERATED_COMMONJS_DIR)

.PHONY: clean_generated_esm
clean_generated_esm:
	$(NPM_BIN)/del $(GENERATED_ESM_DIR)

.PHONY: clean_tmp_base
clean_tmp_base:
	$(NPM_BIN)/del $(TMP_BASE_DIR)

.PHONY: clean_tmp_mjs
clean_tmp_mjs:
	$(NPM_BIN)/del $(TMP_MJS_DIR)

.PHONY: clean_tmp_cjs
clean_tmp_cjs:
	$(NPM_BIN)/del $(TMP_CJS_DIR)


###########################
# Build
###########################
.PHONY: build
build: __build cp_docs cp_changelog cp_license cp_readme generate_manifest ## Build artifacts required to publish packages.

.PHONY: __build
__build: build_cjs build_esm ## Build all targets.

.PHONY: build_cjs
build_cjs: clean_dist __build_cjs__cp_cjs_to_cjsdir __build_cjs__cp_dcts_to_cjsdir generate_manifest ## Build `cjs/`.
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs \
        --basedir $(GENERATED_COMMONJS_DIR) \
        --source '$(GENERATED_COMMONJS_DIR)/**/*' \
        --destination $(DIST_COMMONJS_DIR)

.PHONY: __build_cjs__cp_cjs_to_cjsdir
__build_cjs__cp_cjs_to_cjsdir: __build_cjs__rename_js_to_cjs clean_generated_cjs generate_manifest
	$(NODE_BIN) $(CURDIR)/tools/transform_files_by_babel.mjs \
		--basedir $(TMP_CJS_DIR) \
		--source '$(TMP_CJS_DIR)/**/*.$(CJS_EXTENSION_GLOB)' \
		--destination $(GENERATED_COMMONJS_DIR) \
		--config $(CURDIR)/tools/babel/babelrc.cjs.mjs

.PHONY: __build_cjs__cp_dcts_to_cjsdir
__build_cjs__cp_dcts_to_cjsdir: __build_cjs_rename_dts_to_dcts clean_generated_cjs generate_manifest
	$(NODE_BIN) $(CURDIR)/tools/transform_files_by_babel.mjs \
		--basedir $(TMP_CJS_DIR) \
		--source '$(TMP_CJS_DIR)/**/*.$(D_CTS_EXTENSION_GLOB)' \
		--destination $(GENERATED_COMMONJS_DIR) \
		--config $(CURDIR)/tools/babel/babelrc.d.cts.mjs

.PHONY: __build_cjs_rename_dts_to_dcts
__build_cjs_rename_dts_to_dcts: __build_cjs__create_tmp_cjs generate_manifest
	$(NODE_BIN) $(CURDIR)/tools/extension_renamer.mjs --target-dir $(TMP_CJS_DIR) --to-extension 'cts' --from-extension 'ts'

.PHONY: __build_cjs__rename_js_to_cjs
__build_cjs__rename_js_to_cjs: __build_cjs__create_tmp_cjs generate_manifest
	$(NODE_BIN) $(CURDIR)/tools/extension_renamer.mjs --target-dir $(TMP_CJS_DIR) --to-extension 'cjs' --from-extension 'js'

.PHONY: __build_cjs__create_tmp_cjs
__build_cjs__create_tmp_cjs: __build_tmp_base clean_tmp_cjs generate_manifest
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(TMP_BASE_DIR) --source '$(TMP_BASE_DIR)/**/*' --destination $(TMP_CJS_DIR)


.PHONY: build_esm
build_esm: clean_dist __build_mjs_cp_mjs_to_esm __build_mjs_cp_dts_to_esm generate_manifest ## Build `esm/`.
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs \
        --basedir $(GENERATED_ESM_DIR) \
        --source '$(GENERATED_ESM_DIR)/**/*' \
        --destination $(DIST_ESM_DIR)

.PHONY: __build_mjs_cp_mjs_to_esm
__build_mjs_cp_mjs_to_esm: __build_mjs_create_tmp_mjs clean_generated_esm generate_manifest
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(TMP_MJS_DIR) --source '$(TMP_MJS_DIR)/**/*.$(MJS_EXTENSION_GLOB)' --destination $(GENERATED_ESM_DIR)

.PHONY: __build_mjs_cp_dts_to_esm
__build_mjs_cp_dts_to_esm: __build_mjs_create_tmp_mjs clean_generated_esm generate_manifest
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(TMP_MJS_DIR) --source '$(TMP_MJS_DIR)/**/*.$(DTS_EXTENSION_GLOB)' --destination $(GENERATED_ESM_DIR)

.PHONY: __build_mjs_create_tmp_mjs
__build_mjs_create_tmp_mjs: __build_tmp_base clean_tmp_mjs
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(TMP_BASE_DIR) --source '$(TMP_BASE_DIR)/**/*' --destination $(TMP_MJS_DIR)

.PHONY: __build_tmp_base
__build_tmp_base: clean_tmp_base __build_tmp_base__call_tsc __build_tmp_base__call_babel __build_tmp_base__call_cpx

.PHONY: __build_tmp_base__call_tsc
__build_tmp_base__call_tsc: clean_tmp_base generate_manifest
	$(NPM_BIN)/tsc --project $(CURDIR)/tsconfig.json

.PHONY: __build_tmp_base__call_babel
__build_tmp_base__call_babel: clean_tmp_base generate_manifest
	$(NODE_BIN) $(CURDIR)/tools/transform_files_by_babel.mjs \
		--basedir $(SRC_DIR) \
		--source '$(SRC_DIR)/**/*.$(MJS_EXTENSION_GLOB)' \
		--destination $(TMP_BASE_DIR) \
		--config $(CURDIR)/tools/babel/babelrc.esm.mjs

.PHONY: __build_tmp_base__call_cpx
__build_tmp_base__call_cpx: clean_tmp_base generate_manifest
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(SRC_DIR) --source '$(SRC_DIR)/**/*.$(DTS_EXTENSION_GLOB)' --destination $(TMP_BASE_DIR)

.PHONY: cp_docs
cp_docs: clean_dist generate_manifest
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(DOCS_DIR) --source '$(DOCS_DIR)/**/*' --destination $(DIST_DOCS_DIR)

.PHONY: cp_changelog
cp_changelog: clean_dist generate_manifest
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(REPO_ROOT_DIR) --source '$(REPO_ROOT_DIR)/{CHANGELOG.md,CHANGELOG_OLD.md}' --destination $(DIST_DIR)

.PHONY: cp_license
cp_license: clean_dist generate_manifest
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(REPO_ROOT_DIR) --source '$(REPO_ROOT_DIR)/LICENSE.MIT' --destination $(DIST_DIR)

.PHONY: cp_readme
cp_readme: clean_dist generate_manifest
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(REPO_ROOT_DIR) --source '$(REPO_ROOT_DIR)/README.md' --destination $(DIST_DIR)

.PHONY: generate_manifest
generate_manifest: clean_dist
	$(NODE_BIN) $(CURDIR)/tools/package_json_rewriter/main.mjs --input-manifest-path $(CURDIR)/package.json --destination $(CURDIR)
	$(NODE_BIN) $(CURDIR)/tools/cp_files.mjs --basedir $(CURDIR) --source '$(CURDIR)/package.json' --destination $(DIST_DIR)


###########################
# Lint
###########################
.PHONY: typecheck
typecheck: ## Check static types
	$(NPM_BIN)/tsc -p $(CURDIR)/tsconfig.json --noEmit


###########################
# Test
###########################
.PHONY: test_distribution_contain_all
test_distribution_contain_all: build
	$(MAKE) run_test_distribution_contain_all

.PHONY: run_test_distribution_contain_all
run_test_distribution_contain_all:
	$(NODE_BIN) $(CURDIR)/tools/test_package_contains_expected_all.mjs --target $(DIST_DIR)

.PHONY: test_module_path_rewrite
test_module_path_rewrite: build
	$(MAKE) run_test_module_path_rewrite -C $(CURDIR)

.PHONY: run_test_module_path_rewrite
run_test_module_path_rewrite:
	$(NODE_BIN) $(CURDIR)/tools/test_path_rewrite.mjs --target $(DIST_DIR)

.PHONY: test_package_json_exports_field_format
test_package_json_exports_field_format: build
	$(MAKE) run_test_package_json_exports_field_format -C $(CURDIR)

.PHONY: run_test_package_json_exports_field_format
run_test_package_json_exports_field_format:
	TARGET_DIR=$(DIST_DIR) $(NODE_BIN) --test $(CURDIR)/tools/test_package_json_exports_field_format.mjs


###########################
# Tools
###########################
.PHONY: generate_import_path_list_md
generate_import_path_list_md: ## Generate all public import paths to docs/import_path.md
	$(NODE_BIN) $(CURDIR)/tools/generate_import_path_list_markdown.mjs --source ${SRC_DIR} --destination ${DOCS_DIR}

.PHONY: prepublish
prepublish: ## Run some commands for 'npm run prepublish'
	$(MAKE) clean -C $(CURDIR)
	$(MAKE) build -C $(CURDIR)
	$(MAKE) test_distribution_contain_all -C $(CURDIR)
	$(MAKE) run_test_module_path_rewrite -C $(CURDIR)
	$(MAKE) run_test_package_json_exports_field_format -C $(CURDIR)

.PHONY: publish
publish: ## Run some commands for 'npm publish'
	cd $(DIST_DIR) && npm publish

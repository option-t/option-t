INNER_PACKAGES_DIR := $(CURDIR)/packages
MAIN_PKG := $(INNER_PACKAGES_DIR)/option-t
API_TEST_PKG := $(INNER_PACKAGES_DIR)/api_tests
TYPE_IMPORT_TEST_UNDER_MODULE_RESOLUTION_NODE16_PKG := $(INNER_PACKAGES_DIR)/test_module_resolution_node16

DIST_DIR := $(MAIN_PKG)/__dist

NODE_BIN := node
NPM_MOD_DIR := $(CURDIR)/node_modules
NPM_BIN := $(NPM_MOD_DIR)/.bin
NPM_CMD := npm

PROJECT_NPMRC := $(DIST_DIR)/.npmrc

ESLINT_APPLIED_EXTENSIONS := .js,.jsx,cjs,.mjs,.ts,.tsx,.cts,.mts

all: help

help:
	@echo "Specify the task"
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@exit 1

###########################
# Setup
###########################
.PHONY: install
install: ## Install dependencies.
	$(NPM_CMD) ci


###########################
# Clean
###########################
CLEAN_TARGETS := \
	repo_root \
    main_pkg \

.PHONY: clean
clean: $(addprefix clean_, $(CLEAN_TARGETS)) ## Clean up generated items.

.PHONY: clean_main_pkg
clean_main_pkg:
	$(MAKE) clean -C $(MAIN_PKG)

.PHONY: clean_repo_root
clean_repo_root: clean_npmrc

.PHONY: clean_npmrc
clean_npmrc:
	$(NPM_BIN)/del $(PROJECT_NPMRC)


###########################
# Build
###########################
.PHONY: build
build:
	$(MAKE) $@ -C $(MAIN_PKG)


###########################
# Lint
###########################
.PHONY: lint
lint: eslint ## Run all lints

.PHONY: eslint
eslint:
	$(NPM_BIN)/eslint --ext $(ESLINT_APPLIED_EXTENSIONS) $(CURDIR)/

.PHONY: eslint_fix
eslint_fix: ## Apply ESLint's `--fix` mode
	$(NPM_BIN)/eslint --ext $(ESLINT_APPLIED_EXTENSIONS) --fix $(CURDIR)/

.PHONY: typecheck
typecheck: ## Check static types.
	$(MAKE) $@ -C $(MAIN_PKG)


###########################
# Test
###########################
.PHONY: test_unittest
test_unittest: build ## Build and run unit tests
	$(MAKE) run_test_unittest -C $(CURDIR)

.PHONY: test_import_types
test_import_types: build ## Build and run type import tests
	$(MAKE) run_test_import_types -C $(CURDIR)

.PHONY: run_test_import_types
run_test_import_types: __run_test_import_types_under_module_resolution_node16 ## Run type import tests

.PHONY: __run_test_import_types_under_module_resolution_node16
__run_test_import_types_under_module_resolution_node16:
	$(MAKE) test -C $(TYPE_IMPORT_TEST_UNDER_MODULE_RESOLUTION_NODE16_PKG)

.PHONY: run_test_unittest
run_test_unittest: ## Run unit tests only.
	$(MAKE) test -C $(API_TEST_PKG)

.PHONY: run_test_unittest_with_update_snapshots
run_test_unittest_with_update_snapshots: ## Run uni tests only with updating snapshots.
	$(MAKE) test_with_update_snapshots -C $(API_TEST_PKG)

.PHONY: test_distribution_contain_all
test_distribution_contain_all:
	$(MAKE) $@ -C $(MAIN_PKG)

.PHONY: test_module_path_rewrite
test_module_path_rewrite:
	$(MAKE) $@ -C $(MAIN_PKG)

.PHONY: test_package_json_exports_field_format
test_package_json_exports_field_format:
	$(MAKE) $@ -C $(MAIN_PKG)


###########################
# Tools
###########################
.PHONY: generate_import_path_list_md
generate_import_path_list_md: ## Generate all public import paths to docs/import_path.md
	$(MAKE) $@ -C $(MAIN_PKG)

.PHONY: format
format: ## Apply formatters
	$(NPM_BIN)/prettier --write $(CURDIR)

.PHONY: format_check
format_check: ## Check code formatting
	$(NPM_BIN)/prettier --check $(CURDIR)

.PHONY: prepublish
prepublish:
	$(MAKE) $@ -C $(MAIN_PKG)
	$(MAKE) run_test_import_types -C $(CURDIR)

.PHONY: publish
publish: copy_npmrc_to_project_root ## Run some commands for 'npm publish'
	$(MAKE) $@ -C $(MAIN_PKG)

.PHONY: copy_npmrc_to_project_root
copy_npmrc_to_project_root: clean_npmrc
	cp $(CURDIR)/tools/publish/.npmrc $(PROJECT_NPMRC)

.PHONY: git_diff
git_diff: ## Test whether there is no committed changes.
	git diff --exit-code

.PHONY: version_major
version_major: ## Alias to run `npm version major -ws`.
	$(NPM_CMD) version major --workspaces

.PHONY: version_minor
version_minor: ## Alias to run `npm version minor -ws`.
	$(NPM_CMD) version minor --workspaces

.PHONY: version_patch
version_patch: ## Alias to run `npm version patch -ws`.
	$(NPM_CMD) version patch --workspaces

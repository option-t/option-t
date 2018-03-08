NODE_MOD := $(CURDIR)/node_modules
NPM_BIN := $(NODE_MOD)/.bin
NPM_CMD := npm

all: help

help:
	@echo "Specify the task"
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@exit 1


# Test
git_diff: # Test whether there is no committed changes.
	git diff --exit-code


# CI
.PHONY: ci
ci:
	$(NPM_CMD) test
	$(MAKE) git_diff


# Tools
.PHONY: fmt
fmt: __eslint_fmt __tslint_fmt ## Apply all formatters

.PHONY: __eslint_fmt
__eslint_fmt: 
	$(NPM_BIN)/eslint $(CURDIR) $(CURDIR)/**/.eslintrc.js --ext .js --fix

.PHONY: __tslint_fmt
__tslint_fmt: 
	$(NPM_BIN)/tslint --config $(CURDIR)/tslint.json '$(CURDIR)/src/**/*.ts{,x}'

NPM_CMD := pnpm

all: help

help:
	@echo "Specify the task"
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@exit 1

###########################
# Test
###########################
.PHONY: test
test:
	$(NPM_CMD) run test

.PHONY: test_with_update_snapshots
test_with_update_snapshots:
	$(NPM_CMD) run test:update-snapshots

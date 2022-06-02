#!/bin/bash

REAL_PATH=$(realpath $0)
DIR_PATH=$(dirname $REAL_PATH)

docker run --env-file="${DIR_PATH}/.env" -e "CONFIG=$(cat "${DIR_PATH}/docsearch.json" | jq -r tostring)" algolia/docsearch-scraper

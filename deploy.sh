#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build

./ossutil64 cp -r -f dist oss://sorabuttons

cd -
#!/bin/bash

set -e

yarn version --prerelease --preid=rc
yarn build
npm publish --tag rc
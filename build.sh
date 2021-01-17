#!/usr/bin/env bash

DIR_CURRENT=$(cd $(dirname $0) && pwd)


pushd ${DIR_CURRENT} > /dev/null

    source ~/.bash_profile

    date

    mv tsconfig.module.json tsconfig.json
    npm run build_module
    mv tsconfig.json tsconfig.module.json

    date

    mv tsconfig.dist.json tsconfig.json
    npm run build_develop
    npm run build_production
    mv tsconfig.json tsconfig.dist.json

    date

popd > /dev/null

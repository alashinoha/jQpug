#!/usr/bin/env bash

DIR_CURRENT=$(cd $(dirname $0) && pwd)


pushd ${DIR_CURRENT} > /dev/null

    date

    source ~/.bash_profile
    npm run build_develop

    npm run build_production

    date

popd > /dev/null

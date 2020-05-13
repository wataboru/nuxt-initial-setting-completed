#!/bin/bash

if [ $# != 2 ]; then
  echo 'plese input title and description.'
  echo 'ex.) $ sh init.sh sample "for sample project"'
  echo 'end.'
  exit 1
fi

title=$1
description=$2

# README.md
#sed -i '' "s/nuxt-initial-setting-completed/$title/g" README.md 
#sed -i '' "s/description/$description/g" README.md 

# package.json
#sed -i '' "s/name: \'nuxt-initial-setting-completed\'/name: \'$title\'/g" package.json
#sed -i '' "s/description: \'description\'/description: \'$description\'/g" package.json

# index.vue
#sed -i '' "s/nuxt-initial-setting-completed/$title/g" pages/index.vue
#sed -i '' "s/description/$description/g" pages/index.vue

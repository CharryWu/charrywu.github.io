#!/usr/bin/env sh # abort on errors

set -e # build
yarn docs:build # navigate into the build output directory
cd docs/.vitepress/dist # if you are deploying to a custom domain

# echo 'www.example.com' > CNAME git init
git add -A
git commit -m 'deploy' # if you are deploying to https://<USERNAME>.github.io

git push -f git@github.com:CharryWu/charrywu.github.io.git master

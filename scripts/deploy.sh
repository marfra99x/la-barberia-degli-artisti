#!/usr/bin/env sh 

cd fe

set -e

npm run build

cd dist

git init 
git add -A
git commit -m 'Deploy'
# git push -f git@github.com:marfra99x/marfra99x.github.io.git master/gh-pages

git push -f git@github.com:marfra99x/la-barberia-degli-artisti.git master


cd -
#!/bin/sh

npm run-script build
cd ../hmol.github.io/

git pull
rm -r $(ls | grep -v CNAME)
cp -a ../personal/build/. .

git add .
git commit -m "new build of static content"
git push

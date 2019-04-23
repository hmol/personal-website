#!/bin/sh

npm run-script build
cd ../hmol.github.io/
rm -r $(ls | grep -v CNAME)
cp -a ../personal/build/. .

git pull
git add .
git commit -m "new build of static content"
git push

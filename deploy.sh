#!/bin/sh

npm run-script build
cd ~/dev/personal/hmol.github.io/

git pull
rm -r $(ls | grep -v CNAME)
cp -a ../personal-website/build/. .

git add .
git commit -m "new build of static content"
git push

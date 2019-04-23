#!/bin/sh

npm run-script build

rm -r ../hmol.github.io/*
cp -a ./build/. ../hmol.github.io/

cd ../hmol.github.io/
git pull
git add .
git commit -m "new build of static content"
git push

#!/bin/bash

cp -R ./codeigniter_src ./BACKENDBUILD
cd ./react_src
npm run build && 
cp -R build/. ./../BACKENDBUILD/public/



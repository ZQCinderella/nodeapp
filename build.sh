#!/bin/sh
# build过程
# 1、遍历当前目录
# 2、如果是普通文件 -f ，但不包括*.sh这些脚本拷贝到dist文件夹下
# 3、拷贝除了 dist和node_modules以外的文件夹到dist文件夹下， 如果已经存在则rm
# 4、修改 dist/bin 目录下文件的权限，赋予可执行权限
# 5、安装package

if [[ ! -d "./dist" ]]; then
  mkdir ./dist
fi

for file in ./*
do
  if [[ -f $file ]] && [[ "$file" == *package.json ]] && [[ "$file" != *build.sh ]]
  then
    cp $file ./dist/
  elif [[ -d $file ]] && [[ "$file" != "./dist" ]] && [[ "$file" != "./node_modules" ]]
  then
    if [[ -d ./dist/$file ]]
    then
      rm -rf ./dist/$file
    fi
    cp -R $file/ ./dist/$file
  fi
done

chmod -R a+x ./dist/bin/

cd ./dist/ && npm install --only=prod


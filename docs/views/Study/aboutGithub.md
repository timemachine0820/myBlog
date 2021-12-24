---
title: Github部署和问题
date: 2021-11-28 01:10
categories:
  - Blog搭建
  - GitHub
tags:
  - 部署
  - GitHub
# sticky: 
---

:::tip
Github部署和问题
:::

<!-- more -->

## 1. Git常用指令

**基本操作**  
+ 查看当前状态`git status`
+ 添加到缓存区(多个文件)`git add file1 file2 file3`
+ 添加整个目录`git add .` 
+ 提交到版本库`git commit -m'feat'`  

+ 提交&拉取`git push`&`git pull`

**版本操作**
+ 查看版本`git log`&`git log --pretty=oneline`
+ 回退`git reset --hard 提交编号`
+ 回退后再前进到新版本(获取新的commit id)`git reflog`

**分支操作**
+ 查看分支`git branch`
+ 创建分支`git branch 分支名`
+ 切换分支`git checkout 分支名`
+ 删除分支`git branch -d 分支名`
+ 合并分支`git merge 被合并的分支名`

## 2. 部署blog到github的一些问题
首先在根目录下,与包管理文件一层，创建`deploy.sh`文件
```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:timemachine0820/timemachine0820.github.io.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```
然后使用`yarn deploy`命令行把项目部署到github上。

这里有几个遇到的问题：
+ 虽然本地和github的分支都为main，但push那里的`master:gh-pages`，master却不能更改为main,会报`error:src refspec master does not match any`，因为不能识别。
+ 若发布到`username.github.io`，则仓库名就必须为`username.github.io`。
+ 若需要更改仓库名，更改后在本地需要把远程仓库的地址进行修改
  ```
  $ git remote -v 显示当前远程仓库地址
  $ git remote set-url origin git@github.con:账户名字/远程仓库名字.git
  $ git push -u origin master
  ```

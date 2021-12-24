(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{579:function(s,t,i){"use strict";i.r(t);var e=i(5),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"title"}),i("p",[s._v("Github部署和问题")])]),s._v(" "),i("h2",{attrs:{id:"_1-git常用指令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-git常用指令"}},[s._v("#")]),s._v(" 1. Git常用指令")]),s._v(" "),i("p",[i("strong",[s._v("基本操作")])]),s._v(" "),i("ul",[i("li",[i("p",[s._v("查看当前状态"),i("code",[s._v("git status")])])]),s._v(" "),i("li",[i("p",[s._v("添加到缓存区(多个文件)"),i("code",[s._v("git add file1 file2 file3")])])]),s._v(" "),i("li",[i("p",[s._v("添加整个目录"),i("code",[s._v("git add .")])])]),s._v(" "),i("li",[i("p",[s._v("提交到版本库"),i("code",[s._v("git commit -m'feat'")])])]),s._v(" "),i("li",[i("p",[s._v("提交&拉取"),i("code",[s._v("git push")]),s._v("&"),i("code",[s._v("git pull")])])])]),s._v(" "),i("p",[i("strong",[s._v("版本操作")])]),s._v(" "),i("ul",[i("li",[s._v("查看版本"),i("code",[s._v("git log")]),s._v("&"),i("code",[s._v("git log --pretty=oneline")])]),s._v(" "),i("li",[s._v("回退"),i("code",[s._v("git reset --hard 提交编号")])]),s._v(" "),i("li",[s._v("回退后再前进到新版本(获取新的commit id)"),i("code",[s._v("git reflog")])])]),s._v(" "),i("p",[i("strong",[s._v("分支操作")])]),s._v(" "),i("ul",[i("li",[s._v("查看分支"),i("code",[s._v("git branch")])]),s._v(" "),i("li",[s._v("创建分支"),i("code",[s._v("git branch 分支名")])]),s._v(" "),i("li",[s._v("切换分支"),i("code",[s._v("git checkout 分支名")])]),s._v(" "),i("li",[s._v("删除分支"),i("code",[s._v("git branch -d 分支名")])]),s._v(" "),i("li",[s._v("合并分支"),i("code",[s._v("git merge 被合并的分支名")])])]),s._v(" "),i("h2",{attrs:{id:"_2-部署blog到github的一些问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-部署blog到github的一些问题"}},[s._v("#")]),s._v(" 2. 部署blog到github的一些问题")]),s._v(" "),i("p",[s._v("首先在根目录下,与包管理文件一层，创建"),i("code",[s._v("deploy.sh")]),s._v("文件")]),s._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[s._v("#!/usr/bin/env sh\n\n# 确保脚本抛出遇到的错误\nset -e\n\n# 生成静态文件\nnpm run docs:build\n\n# 进入生成的文件夹\ncd docs/.vuepress/dist\n\n# 如果是发布到自定义域名\n# echo 'www.example.com' > CNAME\n\ngit init\ngit add -A\ngit commit -m 'deploy'\n\n# 如果发布到 https://<USERNAME>.github.io\ngit push -f git@github.com:timemachine0820/timemachine0820.github.io.git master:gh-pages\n\n# 如果发布到 https://<USERNAME>.github.io/<REPO>\n# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages\n\ncd -\n")])]),s._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[s._v("1")]),i("br"),i("span",{staticClass:"line-number"},[s._v("2")]),i("br"),i("span",{staticClass:"line-number"},[s._v("3")]),i("br"),i("span",{staticClass:"line-number"},[s._v("4")]),i("br"),i("span",{staticClass:"line-number"},[s._v("5")]),i("br"),i("span",{staticClass:"line-number"},[s._v("6")]),i("br"),i("span",{staticClass:"line-number"},[s._v("7")]),i("br"),i("span",{staticClass:"line-number"},[s._v("8")]),i("br"),i("span",{staticClass:"line-number"},[s._v("9")]),i("br"),i("span",{staticClass:"line-number"},[s._v("10")]),i("br"),i("span",{staticClass:"line-number"},[s._v("11")]),i("br"),i("span",{staticClass:"line-number"},[s._v("12")]),i("br"),i("span",{staticClass:"line-number"},[s._v("13")]),i("br"),i("span",{staticClass:"line-number"},[s._v("14")]),i("br"),i("span",{staticClass:"line-number"},[s._v("15")]),i("br"),i("span",{staticClass:"line-number"},[s._v("16")]),i("br"),i("span",{staticClass:"line-number"},[s._v("17")]),i("br"),i("span",{staticClass:"line-number"},[s._v("18")]),i("br"),i("span",{staticClass:"line-number"},[s._v("19")]),i("br"),i("span",{staticClass:"line-number"},[s._v("20")]),i("br"),i("span",{staticClass:"line-number"},[s._v("21")]),i("br"),i("span",{staticClass:"line-number"},[s._v("22")]),i("br"),i("span",{staticClass:"line-number"},[s._v("23")]),i("br"),i("span",{staticClass:"line-number"},[s._v("24")]),i("br"),i("span",{staticClass:"line-number"},[s._v("25")]),i("br")])]),i("p",[s._v("然后使用"),i("code",[s._v("yarn deploy")]),s._v("命令行把项目部署到github上。")]),s._v(" "),i("p",[s._v("这里有几个遇到的问题：")]),s._v(" "),i("ul",[i("li",[s._v("虽然本地和github的分支都为main，但push那里的"),i("code",[s._v("master:gh-pages")]),s._v("，master却不能更改为main,会报"),i("code",[s._v("error:src refspec master does not match any")]),s._v("，因为不能识别。")]),s._v(" "),i("li",[s._v("若发布到"),i("code",[s._v("username.github.io")]),s._v("，则仓库名就必须为"),i("code",[s._v("username.github.io")]),s._v("。")]),s._v(" "),i("li",[s._v("若需要更改仓库名，更改后在本地需要把远程仓库的地址进行修改"),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[s._v("$ git remote -v 显示当前远程仓库地址\n$ git remote set-url origin git@github.con:账户名字/远程仓库名字.git\n$ git push -u origin master\n")])]),s._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[s._v("1")]),i("br"),i("span",{staticClass:"line-number"},[s._v("2")]),i("br"),i("span",{staticClass:"line-number"},[s._v("3")]),i("br")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
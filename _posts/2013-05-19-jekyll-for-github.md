---
layout: post
title: "jekyll for github"
tagline: "jekyll for github 搭建"
category: tutorial
author: 'lemon郑'
indexImage: 'index.png'
pageImage: 'page.jpg'
tags: [jekyll]
---
{% include JB/setup %}

在Github搭建Jekyll的简单教程.让你专注于写文章.
<!--more-->
由于wordpress写文章很麻烦,特别是图片的使用.所以前很少写文章(好吧,其实是我懒).  
这里的文章也会同步到[coolicer](http://www.coolicer.com).顺便也在这里分类管理一下自己的文章

Github部分
==========
由于我是先丛gitbub开始的,所以先说明一下github的配置.  

1.  新建一个github的仓库,我这里就叫blog  
    <img src="{{BASE_PATH}}/images/{{page.title}}/create-blog.png" alt="" />  
    Initialize 选择 `Jekyll`  
    创建后可以通过 `用户名.github.io/Repository Name` 访问博客 所以我这里是 `lemonlwz.github.io/blog`  
1.  新建 `gh-pages` 分支,好像是只有在这个分支下的页面才会被github解析成github pages.
1.  clone`blog`至本地
1.  在 [themes.jekyllbootstrap.com/](http://themes.jekyllbootstrap.com/) 下载喜欢的皮肤放到blog里上传至blog `gh-pages` 分支
1.  现在访问 `用户名.github.io/Repository Name` 就可以看到博客  
    无法读取样式? 请继续往下看  

这样github的环境就创建好了,接下来就只要本地安装 `Jekyll` 方便本地预览.  

Jekyll部分
==========
1.  Jekyll是基于 ruby 的所以先安装它. 这里使用 `RubyInstaller` 安装 [rubyinstaller](http://rubyforge.org/frs/?group_id=167)
1.  在win7需先安装 `DevKit` [devkit](https://github.com/oneclick/rubyinstaller/downloads/)  路径不能含有中文  
    在命令行切换至 devkit 目录运行以下命令  
    `ruby dk.rb init`  
    `ruby dk.rb review`  
    `ruby dk.rb install`
1.  在命令行输入 `gem install jekyll` 安装 jekyll
1.  切换至博客的目录运行  
    `jekyll serve`  
    访问 [http://localhost:4000](http://localhost:4000) 就可以预览了  
  
至于样式不能访问就行修改 `_config.yml` 文件,修改如下  

      BASE_PATH : /blog

上传至gitbub.  

至此搭建完成,然后就继教折腾配置和样式,打造出自己喜欢的!~~

---
title: 学习笔记-HTML
date: 2021-12-05 13:10
categories:
  - 学习笔记
tags:
  - HTML
---

:::tip
本文记录HTML基础学习笔记
:::

<!-- more -->

## 1. HTML的概念

**HTML** 全称为 HyperText Markup Language，译为**超文本标记语言**。

HTML 不是一种编程语言，是一种描述性的**标记语言**。

**作用**：HTML是负责描述文档***语义***的语言。

###  文档声明头

HTML5的DTD（文档声明头）如下：

```html
<!DOCTYPE html>
```

**DTD可告知浏览器文档使用哪种 HTML 或 XHTML 规范**。

### 页面语言lang

下面这行标签，用于指定页面的语言类型：

```html
<html lang="en">
```

### 头标签 head

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta name="Author" content="">
    <meta name="Keywords" content="" />
    <meta name="Description" content="" />
    <title>Document</title>
</head>
```

- 头标签内部的常见标签如下：
  - `<title>`：指定整个网页的标题，在浏览器最上方显示。
  - `<base>`：为页面上的所有链接规定默认地址或默认目标。
  - `<meta>`：提供有关页面的基本信息。
    + 字符集 charset
    + 视口 viewport
    + 关键词 Keywords
    + 页面描述 Description
  - `<body>`：用于定义HTML文档所要显示的内容，也称为主体标签。我们所写的代码必须放在此标签內。
  - `<link>`：定义文档与外部资源的关系。
  
+ 需要记住：

  ```html
  <meta http-equiv="refresh" content="3;http://www.baidu.com">
  ```

  上面这个标签的意思是说，3秒之后，自动跳转到百度页面。



## 2. HTML标签

HTML标签是分等级的，HTML将所有的标签分为两种：

- **文本级标签**：p、span、a、b、i、u、em。文本级标签里只能放**文字、图片、表单元素**。（a标签里不能放a和input）
- **容器级标签**：div、h系列、li、dt、dd。容器级标签里可以放置任何东西。

 `超链接`的属性：

- `href`：目标URL

- `title`：悬停文本。

- `name`：主要用于设置一个锚点的名称。

- `target`：告诉浏览器用什么方式来打开目标页面。

  属性有以下几个值：
  - `_self`：在同一个网页中显示（默认值）
  - `_blank`：**在新的窗口中打开**。
  - `_parent`：在父窗口中显示
  - `_top`：在顶级窗口中显示  


无序列表`<ul>`、有序列表`<ol>`、定义列表`<dl>`、表格`<table><tr><td><th>` `<thead><tbody><tfoot>`、框架标签及内嵌框架`<iframe>`、表单`<form>`、输入标签`<input><textarea>`、下拉列表标签`<select><option>`  


`<fieldset>` 标签将表单里的内容进行打包，代表一组；而`<legend>`标签的则是 fieldset 里的元素定义标题。  

**定义列表`<dl>`**

> 定义列表的作用非常大。

`<dl>`英文单词：definition list，没有属性。dl的子元素只能是dt和dd。
- `<dt>`：definition title 列表的标题，这个标签是必须的
- `<dd>`：definition description 列表的列表项，如果不需要它，可以不加
备注：dt、dd只能在dl里面；dl里面只能有dt、dd。


## 3. HTML5
### H5中新增的**语义标签**

- `<section>` 表示区块
- `<article>` 表示文章。如文章、评论、帖子、博客
- `<header>` 表示页眉
- `<footer>` 表示页脚
- `<nav>` 表示导航
- `<aside>` 表示侧边栏。如文章的侧栏
- `<time>` 表示日期

本质上新语义标签与`<div>`、`<span>`没有区别，只是其具有表意性，使用时除了在HTML结构上需要注意外，其它和普通标签的使用无任何差别，可以理解成`<div class="nav">` 相当于`<nav>`。



### H5中新增的**表单类型**

- `email` 只能输入email格式。自动带有验证功能。
- `tel` 手机号码。
- `url` 只能输入url格式。
- `number` 只能输入数字。
- `search` 搜索框
- `range` 滑动条
- `color` 拾色器
- `time` 时间
- `date` 日期
- `datetime` 时间日期
- `month` 月份
- `week` 星期



**音频**`<audio>`

- `autoplay` 自动播放。写成`autoplay` 或者 `autoplay = ""`，都可以。
- `controls` 控制条。（建议把这个选项写上，不然都看不到控件在哪里）
- `loop` 循环播放。
- `preload` 预加载 同时设置 autoplay 时，此属性将失效。

**视频**`<video>`

- `autoplay` 自动播放。写成`autoplay` 或者 `autoplay = ""`，都可以。
- `controls` 控制条。（建议把这个选项写上，不然都看不到控件在哪里）
- `loop` 循环播放。
- `preload` 预加载 同时设置 autoplay 时，此属性将失效。
- `width`：设置播放窗口宽度。
- `height`：设置播放窗口的高度。



### **拖拽**

`draggable="true"`

**拖拽元素**的事件监听：（应用于拖拽元素）

- `ondragstart`当拖拽开始时调用
- `ondragleave` 当**鼠标离开拖拽元素时**调用
- `ondragend` 当拖拽结束时调用
- `ondrag` 整个拖拽过程都会调用

**目标元素**的事件监听：（应用于目标元素）

- `ondragenter` 当拖拽元素进入时调用
- `ondragover` 当拖拽元素停留在目标元素上时，就会连续一直触发（不管拖拽元素此时是移动还是不动的状态）
- `ondrop` 当在目标元素上松开鼠标时调用
- `ondragleave` 当鼠标离开目标元素时调用

>如果想让拖拽元素在目标元素里做点事情，就必须要在 `ondragover()` 里加`event.preventDefault()`这一行代码。如果没有这个方法，后面ondrop()方法无法触发



### **历史**

在HTML5中可以通过 `window.history` 操作访问历史状态，让一个页面可以有多个历史状态。

`window.history`对象可以让我们管理历史记录，可用于单页面应用，可以无刷新改变网页内容。

- `window.history.forward(); `// 前进
- `window.history.back();` // 后退
- `window.history.go();` // 刷新
- `window.history.go(n);` //n=1 表示前进；n=-1 后退；n=0s 刷新。如果移动的位置超出了访问历史的边界，会静默失败，但不会报错。



### **WEB存储**

H5 中有两种存储的方式：

1、**`window.sessionStorage` 会话存储：**

- 保存在内存中。
- **生命周期**为关闭浏览器窗口。也就是说，当窗口关闭时数据销毁。
- 在同一个窗口下数据可以共享。

2、**`window.localStorage` 本地存储**：

- 有可能保存在浏览器内存里，有可能在硬盘里。
- 永久生效，除非手动删除（比如清理垃圾的时候）。
- 可以多窗口共享。



 **Web 存储的特性**

（1）设置、读取方便。

（2）容量较大，sessionStorage 约5M、localStorage 约20M。

（3）只能存储字符串，可以将对象 JSON.stringify() 编码后存储。



**存储常见 API**

设置存储内容：`setItem(key, value);`

PS：可以新增一个 item，也可以更新一个 item。

读取存储内容：`getItem(key);`

根据键，删除存储内容：`removeItem(key);`

清空所有存储内容：`	clear();`

根据索引值来获取存储内容：`	key(n);`



### **网络状态**

我们可以通过 `window.onLine` 来检测用户当前的网络状况，返回一个布尔值。另外：

- window.online：用户网络连接时被调用。
- window.offline：用户网络断开时被调用（拔掉网线或者禁用以太网）。



### **CSS Reset**

如果我们不需要默认的样式，这里就需要引入一个概念：**CSS Reset**。

常见的 CSS Reset 方案

**方案一**：

CSS Tools: Reset CSS。链接：https://meyerweb.com/eric/tools/css/reset/

**方案二**：

雅虎的 CSS Reset。链接：https://yuilibrary.com/yui/docs/cssreset/

CDN 方式引入：

```html
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css">
```

**方式三**：（比较有争议）

```css
*{
    margin: 0;
    padding: 0;
}
```

上面何种写法，比较简洁，但也有争议。有争议的地方在于，可能会导致 css 选择器的性能问题。

**Normalize.css**

上面的几种 css reset 的解决思路是：将所有的默认样式清零。

但是，[Normalize.css](https://necolas.github.io/normalize.css/) 的思路是：既然浏览器提供了这些默认样式，那它就是有意义的。**既然不同浏览器的默认样式不一致，那么，`Normalize.css`就将这些默认样式设置为一致**。

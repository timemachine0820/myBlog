---
title: 学习笔记-CSS
date: 2021-12-09 22:55
categories:
  - 学习笔记
tags:
  - CSS
---

:::tip
本文记录CSS基础学习笔记
:::

<!-- more -->

## 1. 字体属性和文本属性

**字体属性**

html中的单位只有一种，那就是像素px，所以单位是可以省略的，但是在CSS中不一样。 **CSS中的单位是必须要写的**，因为它没有默认单位。



CSS样式中，常见的字体属性有以下几种：

```css
p{
	font-size: 50px; 		/*字体大小*/
	line-height: 30px;      /*行高*/
	font-family: 幼圆,黑体; 	/*字体类型：如果没有幼圆就显示黑体，没有黑体就显示默认*/
	font-style: italic ;		/*italic表示斜体，normal表示不倾斜*/
	font-weight: bold;	/*粗体*/
    font: 400 14px/24px "宋体"; /*连写font: 加粗 字号/行高/ 字体;至少要有字号和字体*/
	font-variant: small-caps;  /*小写变大写*/
}
```

为了严格保证字在行里面居中，我们的工程师有一个约定： **行高、字号，一般都是偶数**。这样可以保证，它们的差一定偶数，就能够被2整除。



`vertical-align: middle;` 属性

`vertical-align`属性可用于指定**行内元素**（inline）、**行内块元素**（inline-block）、**表格的单元格**（table-cell）的垂直对齐方式。主要是用于图片、表格、文本的对齐。



**文本属性**

![text](http://img.smyhvae.com/2015-10-03-css-18.png)



**overflow属性：超出范围的内容要怎么处理**

`overflow`属性的属性值可以是：

- `visible`：默认值。多余的内容不剪切也不添加滚动条，会全部显示出来。
- `hidden`：不显示超过对象尺寸的内容。
- `auto`：如果内容不超出，则不显示滚动条；如果内容超出，则显示滚动条。
- `scroll`：Windows 平台下，无论内容是否超出，总是显示滚动条。Mac 平台下，和 `auto` 属性相同。



**text-overflow语法：**
text-overflow : clip | ellipsis 

**text-overflow参数值和解释：**
clip : 　不显示省略标记（...），而是简单的裁切
ellipsis : 　当对象内文本溢出时显示省略标记（...）



## 2. 背景属性

+ `background-color:#ff99ff;` **设置元素的背景颜色**。

红色可以有下面的三种表示方法：

```css
	background-color: red;
	background-color: rgb(255,0,0);
	background-color: #ff0000;
```

关于设置透明度的其他方式：

（1）`opacity: 0.3;` 会将整个盒子及子盒子设置透明度。也就是说，当盒子设置半透明的时候，会影响里面的子盒子。

（2）`background: transparent;` 可以单独设置透明度，但设置的是完全透明（不可调节透明度）。



+ `background-repeat:no-repeat;`**设置背景图片是否重复及如何重复，默认平铺满。属性值可以是**：
- `no-repeat`（不要平铺）
  
- `repeat-x`（横向平铺）
  
- `repeat-y`（纵向平铺）



+ `background-position`属性指的是**背景定位**属性。
  + `background-position:向右偏移量 向下偏移量;`
  + `background-position: 描述左右的词 描述上下的词;`



- `background-attachment:scroll;`设置背景图片是否**固定**。属性值可以是：
  - `fixed`（背景就会被固定住，不会被滚动条滚走）。
  - `scroll`（与fixed属性相反，默认属性）



+ `background:red url(1.jpg) no-repeat 100px 100px fixed;`

  综合属性，上面的属性中，可以任意省略其中的一部分。

  

+ `background-size`属性：设置背景图片的尺寸。

  + `cover`：图片始终**填充满**容器，且保证**长宽比不变**。图片如果有超出部分，则超出部分会被隐藏。
  + `contain`：将图片**完整地**显示在容器中，且保证**长宽比不变**。可能会导致容器的部分区域留白。



## 3.  选择器

**基本选择器：**

- 标签选择器：针对**一类**标签
- ID 选择器：针对某**一个**特定的标签使用
- 类选择器：针对**你想要的所有**标签使用
- 通用选择器（通配符）：针对所有的标签都适用（不建议使用）



**高级选择器：**

- 后代选择器：用空格隔开

  - ```html
    .div1 p {
            color: red;
        }
    ```

- 交集选择器：选择器之间紧密相连

  - ```css
    h3.special {
        color: red;
    }
    ```

- 并集选择器（分组选择器）：用逗号隔开

  - ```css
    p,
    h1,
    #mytitle,
    .one {
        color: red;
    }
    ```

- 伪类选择器

  - **静态伪类**：只能用于**超链接**的样式。如下：
    - `:link` 超链接点击之前
    - `:visited` 链接被访问过之后
  - **动态伪类**：针对**所有标签**都适用的样式。如下：
    - `:hover` “悬停”：鼠标放到标签上的时候
    - `:active` “激活”： 鼠标点击标签，但是不松手时。
    - `:focus` 是某个标签获得焦点时的样式（比如某个输入框获得焦点）



**CSS3选择器**

+ 子代选择器，用符号>表示

```css
    div > p {
        color: red;
    }
```
  
+ 序选择器

```css
    ul li:first-child {
            color: red;
        }
```

+ 下一个兄弟选择器
  
```css
    h3 + p {
            color: red;
        }
```



## 4. 层叠性

![](http://img.smyhvae.com/20170727_2050.png)

- 选择上了，数权重，(id的数量，类的数量，标签的数量)。如果权重一样，谁写在后面听谁的。
- 没有选择上，通过继承影响的，就近原则，谁描述的近听谁的。如果描述的一样近，比如选择器权重，如果权重再一样重，谁写在后面听谁的。



**CSS样式表的冲突的总结**

- 1、对于相同的选择器（比如同样都是类选择器），其样式表排序：行级样式 > 内嵌样式表 > 外部样式表（就近原则）
- 2、对于相同类型的样式表（比如同样都是内部样式表），其选择器排序：ID选择器 > 类选择器 > 标签选择器
- 3、外部样式表的ID选择器 > 内嵌样式表的标签选择器

> 总结：就近原则。ID选择器优先级最大。

## 5. 盒模型

```css
    /* 设置当前盒子为 标准盒模型（默认） */
    box-sizing: content-box;
    /* 设置当前盒子为 IE盒模型 */
    box-sizing: border-box;
```

![](http://img.smyhvae.com/2015-10-03-css-27.jpg)

![](http://img.smyhvae.com/2015-10-03-css-30.jpg)CSS盒模型和IE盒模型的区别：

- 在 **标准盒子模型**中，**width 和 height 指的是内容区域**的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。
- **IE盒子模型**中，**width 和 height 指的是内容区域+border+padding**的宽度和高度。



margin塌陷/margin重叠:

- **margin塌陷:标准文档流中，竖直方向的margin不叠加，只取较大的值作为margin**(水平方向的margin是可以叠加的，即水平方向没有塌陷现象)。
- 解决方法：善于用父亲的padding，而不是儿子的margin



**边距重叠解决方案**

+ **BFC**（Block Formatting Context），块级格式化上下文，可以把它理解成一个独立的区域。
+ **原理**（渲染规则）：
  + BFC 内部的子元素，在垂直方向，边距会发生重叠。
  + BFC在页面中是独立的容器，外面的元素不会影响里面的元素，反之亦然。
  + BFC区域不与旁边的float box区域重叠，可以用来清除浮动。
  + 计算BFC的高度时，浮动的子元素也参与计算。
+ **如何生成BFC?**
    + 设置overflow属性是 hidden或auto。(常用)
    + 设置浮动。
    + 设置定位属性absolute或fixed。
    + display为inline-block, table-cell, table-caption, flex, inline-flex。
+ **解决margin重叠**
  当父元素和子元素发生 margin 重叠时，解决办法：给子元素或父元素创建BFC。（原理2）
+ **清除浮动**：将第2个盒子设置BFC。(原理3)
+ 儿子浮动了，但由于父亲没有设置高度，导致看不到父亲的背景色（此时父亲的高度为0）
  给父亲创建BFC（增加 overflow=hidden属性）即可。（原理4）



## 6. 浮动

![](http://img.smyhvae.com/20170729_1545.png)

**行内元素和块级元素的区别：**（非常重要）

行内元素：

- 与其他行内元素并排；
- 不能设置宽、高。默认的宽度，就是文字的宽度。

块级元素：

- 霸占一行，不能与其他任何元素并列；
- 能接受宽、高。如果不设置宽度，那么宽度将默认变为父亲的100%。



> CSS中一共有三种手段，使一个元素**脱离标准文档流**：
>- （1）浮动
>- （2）绝对定位
>- （3）固定定位



**浮动的清除**

+ 给浮动元素的祖先元素加高度
+ `clear:both;`margin会失效
+ 隔墙法
+ `overflow:hidden;`



## 7. 定位

**相对定位**`relative`：

+ 让元素相对于自己原来的位置，进行位置调整（可用于盒子的位置微调）。
+ 不脱标，老家留坑，**别人不会把它的位置挤走**。
+ **用途**：
  + （1）微调元素
  + （2）做绝对定位的参考，子绝父相



**绝对定位**`absolute`：

+ 绝对定位脱标，不区分行内元素、块级元素，不需要`display:block`就可以设置宽、高了。
+ 参考点
  + 如果用**top描述**，那么参考点就是**页面的左上角**。
  + 如果用**bottom描述**，那么参考点就是浏览器**首屏**窗口尺寸



**固定定位**`fixed`：

相对浏览器窗口进行定位。无论页面如何滚动，这个盒子显示的位置不变。



**z-index属性**

+ 只有定位了的元素，才能有z-index值。**而浮动的元素不能用**。
+ **从父现象**：父亲怂了，儿子再牛逼也没用。意思是，如果父亲1比父亲2大，那么，即使儿子1比儿子2小，儿子1也能在最上层。



## 8. CSS3-选择器 

+ **属性选择器**的标志性符号是 `[]`。`^：开头  $：结尾  *：包含`
  + `E[title]` 选中页面的E元素，并且E存在 title 属性即可。
  + `E[title="abc"]`选中页面的E元素，并且E需要带有title属性，且属性值**完全等于**`abc`。
  + `E[title^="abc"]` 选中页面的E元素，并且E需要带有 title 属性,属性值以 `abc `开头。



+  **结构伪类选择器**的标志性符号是 `:`。
  + `E:first-child` 匹配父元素的第一个子元素E。
  + `E:last-child` 匹配父元素的最后一个子元素E。
  + `E:nth-child(n)` 匹配父元素的第n个子元素E。**注意**，盒子的编号是从`1`开始算起，不是从`0`开始算起。
    + 如果选择器写成`li:nth-child(-n+5)`，则表示**前5个** li。
    + 如果选择器写成`li:nth-last-child(-n+5)`，则表示**最后5个** li。
  + `E:nth-child(odd)` 匹配奇数
  + `E:nth-child(even)` 匹配偶数
  + `E:nth-last-child(n)` 匹配父元素的倒数第n个子元素E。



>通过伪元素选择器，就可以添加出类似于span标签的效果（记得要结合 content 属性使用）。
>通过这两个属性添加的伪元素，是**行内元素**，需要转换成块元素才能设置宽高。

+ **伪元素选择器**的标志性符号是 `::`。

  + `E::before` 设置在 元素E 前面（依据对象树的逻辑结构）的内容，配合content属性一起使用。
  + `E::after` 设置在 元素E 后面（依据对象树的逻辑结构）的内容，配合content属性一起使用。




##  9. CSS3-属性

**文本阴影**

```css
text-shadow: 20px 27px 22px pink;/* 参数解释：水平位移 垂直位移 模糊程度 阴影颜色
```



**盒模型box-sizing属性**

```css
	/* 设置当前盒子为 标准盒模型（默认） */
	box-sizing: content-box;
	/* 设置当前盒子为 IE盒模型 */
	box-sizing: border-box;
```



处理兼容性问题：**私有前缀**

```html
    -webkit-: 谷歌 苹果
    -moz-:火狐
    -ms-：IE
    -o-：欧朋
```



**边框**

+ 圆角：`border-radius`
+ 阴影：`box-shadow`



**过渡**

- `transition-property: all;` 如果希望所有的属性都发生过渡，就使用all。
- `transition-duration: 1s;` 过渡的持续时间。
- `transition-timing-function: linear;` 运动曲线。属性值可以是：
  - `linear` 线性
  - `ease` 减速
  - `ease-in` 加速
  - `ease-out` 减速
  - `ease-in-out` 先加速后减速
- `transition-delay: 1s;` 过渡延迟。多长时间后再执行这个过渡动画。
```css
	/* transition: 让哪些属性进行过度 过渡的持续时间 运动曲线 延迟时间;*/
	transition: all 3s linear 0s;
```



**2D转换**

+ ```css
  /* transform: scale(x, y); 缩放，只写一个值就是等比例缩放 */
  transform: scale(2, 0.5);
  ```
  
+ ```css
  /* transform: translate(水平位移, 垂直位移);只写一个值，则表示水平移动。 */
  transform: translate(-50%, -50%);
  ```
  
+ ```css
  /* transform: rotate(角度); */
  transform: rotate(45deg);
  ```
  
  
  

**3D转换**

+ 透视`perspective: 500px;`

+ ```css
  transform: rotateX(360deg);    /* X 轴旋转360度 */
  transform: rotateY(360deg);    /* 左手法则 */
  transform: rotateZ(360deg);    
  ```
+ ```css
  transform: translateX(100px);    /* X轴移动 */
  transform: translateY(100px);    
  transform: translateZ(100px);    
  ```
  



**动画**

```
定义动画：
@keyframes 动画名{
	from{ 初始状态 }
	to{ 结束状态 }
}
调用：
animation: 定义的动画名称 持续时间 执行次数 是否反向 运动曲线 延迟执行。(infinite 表示无限次)
animation: move1 1s alternate linear 3 ;// steps(2)可以加步骤
animation: move2 4s;
```



## 10. Flex布局

flex 布局的**优势**：

+ **flex 布局的子元素不会脱离文档流**，很好地遵从了“流的特性”。
+ **flex 是一种现代的布局方式，是 W3C 第一次提供真正用于布局的 CSS 规范**。 flex 非常提供了丰富的属性，非常灵活，让布局的实现更佳多样化，且方便易用。

flex 唯一的缺点就在于，它不支持低版本的 IE 浏览器。



**概念**：

- **弹性盒子**：指的是使用 `display:flex` 或 `display:inline-flex` 声明的**父容器**。

  - `flex-direction`：用于设置盒子中**子元素**的排列方向（设置主轴方向）。属性值可以是：

    | 属性值         | 描述                             |
    | :------------- | :------------------------------- |
    | row            | 从左到右水平排列子元素（默认值） |
    | column         | 从上到下垂直排列子元素           |
    | row-reverse    | 从右向左排列子元素               |
    | column-reverse | 从下到上垂直排列子元素           |
    
  - `flex-wrap`：控制子元素溢出时的换行处理。
  
  - **`justify-content`**：控制子元素在**主轴上的排列方式**。
  
    - `flex-start` 从主轴的起点对齐（默认值）
    - `flex-end` 从主轴的终点对齐
    - `center` 居中对齐
    - `space-around` 在父盒子里平分
    - `space-between` 两端对齐 平分
  
  - **`align-items`**：设置子元素在**侧轴上的对齐方式**。
  
    - `flex-start` 从侧轴开始的方向对齐 
    - `flex-end` 从侧轴结束的方向对齐 
    - `baseline` 基线 默认同flex-start 
    - `center ` 中间对齐 
    - `stretch` 拉伸
  
- **子元素/弹性元素**：指的是父容器里面的子元素们（父容器被声明为 flex 盒子的情况下）

  - `flex`属性：设置子盒子的权重




## 11. 布局

**常见的布局方法**

+ **table 表格布局**：早期使用的布局，如今用得很少。

+ **float 浮动 + margin**：为了兼容低版本的IE浏览器，很多网站（比如腾讯新闻、网易新闻、淘宝等）都会采用 float 布局。
  + 是 CSS 中一种比较麻烦的属性，涉及到 BFC 和清除浮动。
  + float 属性的特点
    - 元素浮动
    - **脱离文档流，但不脱离文本流**

+ **inline-block 布局**：对外的表现是行内元素（不会独占一行），对内的表现是块级元素（可以设置宽高）。
  + 像文本一样去排列 block 元素，没有清除浮动等问题。
  + 需要处理间隙。因为inline-block被当作文本，文本和文本之间，本身就会存在间隙。解决：
    + 办法1：设置父元素的字体大小为0，即`font-size: 0`
    + 办法2：在写法上，去掉`div1`和`div2`之间的换行。

+ **flex 布局**：为布局而生，非常灵活，是最为推荐的布局写法。唯一的缺点是兼容性问题。

+ **响应式布局**。



## 12. 如何让元素水平垂直居中？

**行内元素**

```
.father{
   text-align: center;// 水平居中
   
   height: 20px;
   line-height: 20px;// 垂直居中
   }
```



**块级元素**

```
	margin: auto;
	margin: 0 auto; // 水平居中
	
	垂直居中：
	1.绝对定位+margin(需要制定子元素宽高)
	2.绝对定位+translate
	3.Flex(所有子元素都居中了)
		justify-content: center //水平居中
		align-items: center //垂直居中
	4.Flex+margin:auto
```


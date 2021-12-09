---
title: 学习笔记-JavaScript
date: 2021-12-09 22:59
categories:
  - 学习笔记
tags:
  - JavaScript
---

:::tip
本文记录JavaScript基础学习笔记
:::

<!-- more -->

## 1. 简介

1.**JavaScript** 的组成分为三个部分：

- **ECMAScript**：JavaScript 的**语法标准**。包括变量、表达式、运算符、函数、if 语句、for 语句等。
- **DOM**：Document Object Model（文档对象模型），JS 操作**页面上的元素**（标签）的 API。比如让盒子移动、变色、改变大小、轮播图等等。
- **BOM**：Browser Object Model（浏览器对象模型），JS 操作**浏览器部分功能**的 API。通过 BOM 可以操作浏览器窗口，比如弹框、控制浏览器跳转、获取浏览器分辨率等等。

通俗理解就是：ECMAScript 是 JS 的语法；DOM 和 BOM 是浏览器运行环境为 JS 提供的 API。



2.**关于 window.onload：先加载，最后执行**

浏览器默认会**从上至下**解析网页（这句话很重要）。当你**需要通过 JS 来操作界面上的标签元素**的时候，假如将 JS 代码、`<script>`标签写到`<head>`标签中，或者写在页面标签元素的前面，那么这样的 JS 是无效的，因为标签元素在此时都还没来得及加载，自然无法操作这个元素。

如果实在想把 JS 写到`<head>`标签中，那么就必须用 window.onload 将 JS 代码进行包裹。代码格式如下：

```html
<head>
  window.onload = function(){
    // 这里可以写操作界面元素的JS代码，等页面加载完毕后再执行
    ...
  }
</head>
```



3.**JavaScript输出语句**

+ 弹窗：alert()语句
+ 弹窗：confirm()语句（含确认/取消）
+ 弹出输入框：prompt()语句
+ 网页内容区域输出：document.write()语句
+ 控制台输出：console.log() 打印日志





## 2. 常量和变量

1.**常量**也称之为“字面量”，是固定值，不可改变。看见什么，它就是什么。

常量有下面这几种：

- 数字常量（数值常量）
- 字符串常量
- 布尔常量
- 自定义常量

2.**变量**表示可以被修改的数据。我们通过「变量名」获取数据，甚至修改数据。变量还可以用来保存常量。

第一次给变量赋值，称之为“**变量的初始化**”，一个变量如果没有进行初始化（只声明，不赋值），那么这个变量中存储的值是`undefined`。

```javascript
var a = 100; // ES5语法
console.log(a);

const b = hello; // ES6 语法

let c = world; // ES6 语法
c = WORLD; // 修改 变量 C 的值
```





## 3. 标识符、关键字、保留字

+ **标识符**：在 JS 中所有的可以由我们**自主命名**的都可以称之为标识符。
  包括：**变量名、函数名、属性名、参数名**都是属于标识符。

+ **关键字**：被JS赋予了特殊含义的单词。

+ **保留字**：实际上就是预留的“关键字”。



**变量的命名规则**

- 只能由字母(A-Z、a-z)、数字(0-9)、下划线(_)、美元符( $ )组成。
- 不能以数字开头，变量名中不能出现**中划线**`-`。
- 严格区分大小写（JS 是区分大小写的语言）。
- 不用使用 JS 语言中保留的「关键字」和「保留字」作为变量名。
- 变量名长度不能超过 255 个字符。





## 4. 变量的数据类型

1.**数据类型**

- **基本数据类型（值类型）**：String 字符串、Number 数值、Boolean 布尔值、Null 空值、Undefined 未定义。
- **引用数据类型（引用类型）**：Object 对象。

注意：内置对象 Function、Array、Date、RegExp、Error 等都是属于 Object 类型。也就是说，除了那五种基本数据类型之外，其他的，都称之为 Object 类型。

**数据类型之间最大的区别**：

- 基本数据类型：参数赋值的时候，传数值。
- 引用数据类型：参数赋值的时候，传地址（修改的同一片内存空间）。



2.**栈内存和堆内存**

> JS 中，所有的**变量**都是保存在**栈内存**中的。

**基本数据类型**：

基本数据类型的值，直接保存在栈内存中。
值与值之间是独立存在，修改一个变量不会影响其他的变量。

**引用数据类型**：

对象是保存到**堆内存**中的。
每创建一个新的对象，就会在堆内存中开辟出一个新的空间；而**变量保存了对象的内存地址**（对象的引用），保存在栈内存当中。
如果两个变量保存了同一个对象的引用，当一个通过一个变量修改属性时，另一个也会受到影响。





## 5. 基本数据类型

1.**String字符串**

+ 字符串型可以是引号中的任意文本，其语法为：双引号 `""` 或者单引号 `''`。
+ 在字符串中我们可以使用`\`作为转义字符，比如`\"` 表示 `"` 双引号。
+ 可以通过字符串的` length` 属性可以获取整个字符串的长度。
+ 多个字符串之间可以使用加号 `+` 进行拼接。
+ ES6中引入了**模板字符串**
+ 值不可被改变。虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间。



2.**Boolean布尔值**



3.**Number数值型**

+ 在 JS 中所有的数值都是 Number 类型，包括整数和浮点数（小数）。
+ 数值范围：
  + 最大值：`Number.MAX_VALUE`
  + 最小值：`Number.MIN_VALUE`
  + 无穷大（正无穷）：Infinity
  + 无穷小（负无穷）：-Infinity
+ **NaN**：是一个特殊的数字。
+ 隐式转换：`-`、`*`、`/`、`%`这几个符号会自动进行隐式转换。
+ **小数的运算，可能会得到一个不精确的结果**。可以使用 `toFixed()` 方法进行小数的截取。



4.**Null空对象**

+ null 专门用来定义一个**空对象**（例如：`let a = null`）。
+ 使用 typeof 检查一个 null 值时，会返回 object。



5.**undefined**

+ **声明**了一个变量，但没有**赋值**，此时它的值就是 `undefined`。
+ **从未声明**一个变量，就去使用它，则会**报错**。用`typeof` 检查这个变量时，会返回 `undefined`。
+ 如果一个**函数**没有返回值，那么，这个函数的返回值就是 `undefined`。
+ 调用**函数**时，如果没有**传参**，那么，这个参数的值就是 undefined。



> null 和 undefined 

null 和 undefined 有很大的相似性。看看 `null == undefined` 的结果为 `true` 也更加能说明这点。

但是 `null === undefined` 的结果是 false。它们虽然相似，但还是有区别的，其中一个区别是，和数字运算时：

- 10 + undefined 结果为 NaN。
- 10 + null 结果为 10。

规律总结：

- 任何数据类型和 undefined 运算都是 NaN;
- 任何值和 null 运算，null 可看做 0 运算。





## 6. 数据类型转换

类型转换分为两种：显示类型转换、隐式类型转换。

1.**显示类型转换**

- toString()
- String()
- Number()
- parseInt(string)
- parseFloat(string)
- Boolean()

2.**隐式类型转换**

- isNaN ()
- 自增/自减运算符：`++`、`—-`
- 正号/负号：`+a`、`-a`
- 加号：`+`
- 运算符：`-`、`*`、`/`

3.**隐式类型转换（特殊）**

- 逻辑运算符：`&&`、`||`、`！` 。非布尔值进行**与或**运算时，会先将其转换为布尔值，然后再运算，但运算结果是**原值**。
- 关系运算符：`<`、`>` `<=` `>=`等。关系运算符，得到的运算结果都是布尔值：要么是 true，要么是 false。





## 7. 流程控制语句：选择结构

**选择结构**：if 语句、switch 语句

下面是几种写法择优：

```javascript
// 写法1：不推荐
let retCode = 1003; 
if (retCode == 0) {
    alert('接口联调成功');
} else if (retCode == 101) {
    alert('活动不存在');
} else if (retCode == 103) {
    alert('活动未开始');
} else if (retCode == 104) {
    alert('活动已结束');
} else if (retCode == 1001) {
    alert('参数错误');
} else if (retCode == 1002) {
    alert('接口频率限制');
} else if (retCode == 1003) {
    alert('未登录');
} else if (retCode == 1004) {
    alert('（风控用户）提示 活动太火爆啦~千军万马都在挤，请稍后再试');
} else {
    // 其他异常返回码
    alert('系统君失联了，请稍候再试');
}
```

```javascript
// 写法2：改用方法return
let retCode = 1003; 
handleRetCode(retCode);

// 方法：根据接口不同的返回码，处理前端不同的显示状态
function handleRetCode(retCode) {
    if (retCode == 0) {
        alert('接口联调成功');
        return;
    }
    if (retCode == 101) {
        alert('活动不存在');
        return;
    }
    if (retCode == 103) {
        alert('活动未开始');
        return;
    }
    if (retCode == 104) {
        alert('活动已结束');
        return;
    }
    if (retCode == 1001) {
        alert('参数错误');
        return;
    }
    if (retCode == 1002) {
        alert('接口频率限制');
        return;
    }
    if (retCode == 1003) {
        alert('未登录');
        return;
    }
    if (retCode == 1004) {
        alert('（风控用户）提示 活动太火爆啦~千军万马都在挤，请稍后再试');
        return;
    }
    // 其他异常返回码
    alert('系统君失联了，请稍候再试');
    return;
}
```

```javascript
// 写法3：if else改为switch
let retCode = 1003; 
switch (retCode) {
    case 0:
        alert('接口联调成功');
        break;
    case 101:
        alert('活动不存在');
        break;
    case 103:
        alert('活动未开始');
        break;
    case 104:
        alert('活动已结束');
        break;
    case 1001:
        alert('参数错误');
        break;
    case 1002:
        alert('接口频率限制');
        break;
    case 1003:
        alert('未登录');
        break;
    case 1004:
        alert('（风控用户）提示 活动太火爆啦~千军万马都在挤，请稍后再试');
        break;
    // 其他异常返回码
    default:
        alert('系统君失联了，请稍候再试');
        break;
}
```

另外一个return改写if else的例子：

```js
// 写法一：不推荐
if (res) {
    if (+res.retCode == 0) {
        resolve(res);
    } else if (+res.retCode == 8888) {
        goLogin();
    } else {
        reject(res);
    }
} else {
    reject();
}

// 写法二：推荐
if (!res || +res.retCode !== 0) {
    if (+res.retCode === 8888) {
        // 未登录
        goLogin();
    }
    reject(res);
    return;
}
resolve(res.data);
```





## 8. 流程控制语句：循环结构

**循环语句**：for循环、while循环

```javascript
for (var i = 1; i <= 100; i++) {
    console.log(i);
}

while(条件表达式){
	语句...
}
    
do{
	语句...
}while(条件表达式)
```

1.**while 循环和 do...while 循环的区别**：

while 是先判断后执行，而 do...while 是先执行后判断。
也就是说，do...while 可以保证循环体至少执行一次，而 while 不能。



2.**break和continue**

+ **break**

  - break 可以用来退出 switch 语句或退出**整个**循环语句（循环语句包括 for 循环、while 循环。不包括 if。单独的 if 语句里不能用 break 和 continue，否则会报错）。

  - break 会立即终止离它**最近**的那个循环语句。

  - 可以为循环语句创建一个 **label**，来标识当前的循环（格式：**label:循环语句**）。使用 break 语句时，可以在 break 后跟着一个 label，这样 break 将会结束**指定**的循环，而不是最近的。

+ **continue**

  - continue 可以用来跳过**当次**循环，继续下一次循环。
  - 同样，continue 默认只会离他**最近**的循环起作用。
  - 同样，如果需要跳过指定的当次循环，可以使用 label 标签。

例子：99乘法表

```javascript
			//创建外层循环，用来控制乘法表的高度
            for (var i = 1; i <= 9; i++) {
                //创建一个内层循环来控制图形的宽度
                for (var j = 1; j <= i; j++) {
                    document.write('<span>' + j + '*' + i + '=' + i * j + '</span>');
                }

                //输出一个换行
                document.write('<br />');
            }
```





## 9. 对象

在 JavaScript 中，对象是一组**无序**的相关属性和方法的集合。

**对象的作用是：封装信息**。比如Student类里可以封装学生的姓名、年龄、成绩等。

对象具有**特征**（属性）和**行为**（方法）。



指向相同的地址：

```javascript
var obj1 = new Object();
obj1.name = "孙悟空";

// 1.传址
var obj2 = obj1; // 将 obj1 的地址赋值给 obj2。从此， obj1 和 obj2 指向了同一个堆内存空间
// 修改obj2的name属性
obj2.name = "猪八戒";// 输出obj2.name仍然为孙悟空

// 2.传值
// 复制对象：把 obj1 赋值给 obj3。两者之间互不影响
var obj3 = Object.assign({}, obj1);
obj2.name = "猪八戒";// 输出obj3.name为z
```





## 10. 基本包装类型

**基本数据类型**不能绑定属性和方法，**引用数据类型**可以。

```javascript
var str = '张三';
str.age = 18;
console.log(typeof str); //打印结果：string
console.log(str.age); //打印结果：undefined

var strObj = new String('张三');
strObj.age = 18;
console.log(typeof strObj); //打印结果：Object
console.log(strObj.age);//打印结果：18
```

JS提供了三个基本包装类：

+ String()：将基本数据类型字符串，转换为 String 对象。

+ Number()：将基本数据类型的数字，转换为 Number 对象。

+ Boolean()：将基本数据类型的布尔值，转换为 Boolean 对象。

> **要注意的是**：我们在实际应用中一般不会使用基本数据类型的对象。如果使用基本数据类型的对象，在做一些比较时可能会带来一些**不可预期**的结果。



> **基本包装类型的作用**:
> 当我们对一些基本数据类型的值去调用属性和方法时，浏览器会**临时使用包装类将基本数据类型转换为引用数据类型**，这样的话，基本数据类型就有了属性和方法，然后再调用对象的属性和方法；调用完以后，再将其转换为基本数据类型。





## 11. 内置对象：String

> JavaScript 中的对象分为3种：自定义对象 、内置对象、 浏览器对象。

**内置对象**：就是指这个语言自带的一些对象，供开发者使用，这些对象提供了一些常用或者最基本而必要的功能（属性和方法）。

**JavaScript的内置对象**：

| 内置对象  | 对象说明       |
| :-------- | :------------- |
| Arguments | 函数参数集合   |
| Array     | 数组           |
| Boolean   | 布尔对象       |
| Math      | 数学对象       |
| Date      | 日期时间       |
| Error     | 异常对象       |
| Function  | 函数构造器     |
| Number    | 数值对象       |
| Object    | 基础对象       |
| RegExp    | 正则表达式对象 |
| String    | 字符串对象     |

> **字符串方法**：**字符串的所有方法，都不会改变原字符串**（字符串的不可变性），操作完成后会返回一个新的值。

**查找字符串**：

+ *获取字符串中指定内容的**索引**：`indexOf('str',[position])/lastIndexOf()`，返回<u>索引或-1</u>
+ 也是获取**索引**，参数一般为正则：`search('//')`，返回<u>索引或-1</u>
+ *字符串中**是否包含**指定的内容：`includes('str', [position])`，返回<u>true或false</u>
+ 字符串是否以指定的内容**开头**：`startsWith('str', [position])`，返回<u>true或false</u>
+ 字符串是否以指定的内容**结尾**：`endsWith('str', [position])`，返回<u>true或false</u>



**获取指定位置的字符**：

+ `str.charAt(index)`
+ `str[index]`



**字符串截取**：

+ *`str.slice(开始索引, 结束索引)`
  + `(2, 5)` 截取时，包左不包右。
  + `(2)` 表示**从指定的索引位置开始，截取到最后**。
  + `(-3)` 表示从倒数第三个开始，截取到最后。
  + `(1, -1)` 表示从第一个截取到倒数第一个。
  + `(5, 2)` 表示前面的大，后面的小，返回值为空。
+ `str.substring(开始索引, 结束索引)`
  + 与slice()方法类似，但不能接受负值为参数
+ `str.substr(开始索引, 截取的长度)`



***字符串转换为数组**（重要）：`str.split('分隔符')`

```javascript
var str = '马刺|快船|魔术|公牛'; // 用|隔开的字符串
var array = str.split('|'); // 将字符串 str 拆分成数组，通过|来拆分
console.log(array); // 打印结果是数组：["马刺", " 快船", " 魔术", " 公牛"]
```


***去除字符串前后空白**：`str.trim()`

字符串连接（基本不用，数组常用）：`str1.concat(str2)`

替换字符（匹配第一个，全局需要正则）：`str.replace(被替换的字符，新的字符)`

重复字符串：`str.repeat(重复的次数)`

大小写转换：`str.toLowerCase()` `str.toUpperCase()`





## 12. 内置对象：Number和Math

1. **Number常见方法：**

+ 判断是否为整数：`Number.isInteger(数字) `
+ **小数点后保留多少位**：`toFixed(num)`，返回<u>String</u>



2.**Math：**

Math 和其他的对象不同，它不是一个构造函数，不需要创建对象。所以我们不需要 通过 new 来调用，而是直接使用里面的属性和方法即可。

| 方法          | 描述                                       | 备注              |
| :------------ | :----------------------------------------- | :---------------- |
| Math.PI       | 圆周率                                     | Math对象的属性    |
| Math.abs()    | **返回绝对值**                             |                   |
| Math.random() | 生成0-1之间的**随机浮点数**                | 取值范围是 [0，1) |
| Math.floor()  | **向下取整**（往小取值）                   |                   |
| Math.ceil()   | **向上取整**（往大取值）                   |                   |
| Math.round()  | 四舍五入取整（正数四舍五入，负数五舍六入） |                   |

*随机点名：*

```javascript
    // 生成两个整数之间的随机整数，并且要包含这两个整数
	function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const arr = ['张三', '李四', '王五', '赵六'];
    const index = getRandom(0, arr.length - 1); // 生成随机的index
    console.log(arr[index]); // 随机点名
```



3.**内置对象：Date**

>与 Math 对象不同，Date 对象是一个**构造函数** ，需要**先实例化**后才能使用。

| 方法名            | 含义              | 备注                 |
| ----------------- | ----------------- | -------------------- |
| getFullYear()     | 获取年份          |                      |
| getMonth()        | **获取月： 0-11** | 0代表一月            |
| getDate()         | **获取日：1-31**  | 获取的是几号         |
| getDay()          | **获取星期：0-6** | 0代表周日，1代表周一 |
| getHours()        | 获取小时：0-23    |                      |
| getMinutes()      | 获取分钟：0-59    |                      |
| getSeconds()      | 获取秒：0-59      |                      |
| getMilliseconds() | 获取毫秒          | 1s = 1000ms          |

*获取时间戳：*

```js
// 方式一：最常用的写法
const timestamp1 = +new Date();
console.log(timestamp1); 

// 方式二：较常用的写法
const timestamp2 = new Date().getTime();
console.log(timestamp2); 

// 方式三：较常用的写法
console.log(Date.now()); 
```





## 13. 内置对象：Array

数组的存储性能比普通对象要好。在实际开发中我们经常使用数组来存储一些数据（尤其是**列表数据**），使用频率非常高。

1.**修改数组的长度（修改 length）**

- 如果修改的 length 大于原长度，则多出部分会空出来，置为 null。
- 如果修改的 length 小于原长度，则多出的元素会被删除，数组将从后面删除元素。

*冒泡：*

```javascript
var arr = [20, 10, 50, 30, 40];
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
```



2.**数组的类型相关**

| 方法                             | 描述                               |
| :------------------------------- | :--------------------------------- |
| Array.isArray()                  | 判断是否为数组                     |
| toString()                       | 将数组转换为字符串                 |
| Array.from(arrayLike)            | 将**伪数组**转化为**真数组**       |
| Array.of(value1, value2, value3) | 创建数组：将**一系列值**转换成数组 |



**数组元素的添加和删除**

| 方法      | 描述                                                                       | 备注         |
| :-------- | :------------------------------------------------------------------------- | :----------- |
| push()    | 向数组的**最后面**插入一个或多个元素，返回结果为新数组的**长度**           | 会改变原数组 |
| pop()     | 删除数组中的**最后一个**元素，返回结果为**被删除的元素**                   | 会改变原数组 |
| unshift() | 在数组**最前面**插入一个或多个元素，返回结果为新数组的**长度**             | 会改变原数组 |
| shift()   | 删除数组中的**第一个**元素，返回结果为**被删除的元素**                     | 会改变原数组 |
| slice()   | 从数组中**提取**指定的一个或多个元素，返回结果为**新的数组**               | 不改变原数组 |
| splice()  | 从数组中**删除**指定的一个或多个元素，返回结果为**被删除元素组成的新数组** | 会改变原数组 |
| fill()    | 填充数组：用固定的值填充数组，返回结果为**新的数组**                       | 不改变原数组 |

```javascript
var arr = ['张三', '李四', '王五'];

//下面各语句独立
var result = arr.push('赵六'); // result=4
console.log(arr); //['张三','李四','王五','赵六']

var result = arr.pop(); // result=王五
console.log(arr); //['张三','李四']

var result = arr.unshift(); // result=4
console.log(arr); //['熊二','张三','李四','王五']

var result = arr.shift(); // result=张三
console.log(arr); //['李四','王五']

var result = arr.slice(0,2); // result=['张三', '李四']

var result = arr.splice(1,1); // result=['李四']，从index=1开始删除1个元素并返回
console.log(arr); //['张三','王五']

var result = arr.fill('熊大'); // result=['熊大', '熊大','熊大']
```



**数组的合并和拆分**

| 方法     | 描述                                                 | 备注           |
| :------- | :--------------------------------------------------- | :------------- |
| concat() | 合并数组：连接两个或多个数组，返回结果为**新的数组** | 不会改变原数组 |
| join()   | 将数组转换为字符串，返回结果为**转换后的字符串**     | 不会改变原数组 |

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2)) // [1,2,3,4,5,6]
console.log([...arr1,...arr2]) // [1,2,3,4,5,6]

var str = arr1.join('-');
console.log(str) // 1-2-3 
var arr3 = str.split('-'); // 字符串转换为数组
console.log(arr3) // [1, 2, 3]
```



**数组排序**

| 方法      | 描述                                                    | 备注         |
| :-------- | :------------------------------------------------------ | :----------- |
| reverse() | 反转数组，返回结果为**反转后的数组**                    | 会改变原数组 |
| sort()    | 对数组的元素,默认按照**Unicode 编码**，从小到大进行排序 | 会改变原数组 |

```js
let arr = [5, 2, 11, 3, 4, 1];
// 自定义排序规则：升序排列
let result = arr.sort((a, b) => a - b);
// let result = arr.sort((a, b) =>{
	//return b - a;降序
});
```



**查找数组的元素**

| 方法                  | 描述                                                                           | 备注                                                     |
| :-------------------- | :----------------------------------------------------------------------------- | :------------------------------------------------------- |
| indexOf(value)        | 从前往后索引，检索一个数组中是否**含有**指定的元素                             |                                                          |
| lastIndexOf(value)    | 从后往前索引，检索一个数组中是否含有指定的元素                                 |                                                          |
| includes(item)        | 数组中是否**包含**指定的内容                                                   |                                                          |
| find(function())      | 找出**第一个**满足「指定条件返回 true」的元素                                  |                                                          |
| findIndex(function()) | 找出**第一个**满足「指定条件返回 true」的元素的 index                          |                                                          |
| every()               | 确保数组中的每个元素都满足「指定条件返回 true」，则停止遍历，此方法才返回 true | 全真才为真。要求每一项都返回 true，最终的结果才返回 true |
| some()                | 数组中只要有一个元素满足「指定条件返回 true」，则停止遍历，此方法就返回 true   | 一真即真。只要有一项返回 true，最终的结果就返回 true     |



**遍历数组**

| 方法      | 描述                                                                       | 备注                                                   |
| :-------- | :------------------------------------------------------------------------- | :----------------------------------------------------- |
| for 循环  |                                                                            | 还有for of                                             |
| forEach() | 和 for 循环类似，但需要兼容 IE8 以上                                       | forEach() 没有返回值。也就是说，它的返回值是 undefined |
| map()     | 对原数组中的每一项进行加工，将组成新的数组                                 | 不会改变原数组                                         |
| filter()  | **过滤**数组：返回结果是 true 的项，将组成新的数组，返回结果为**新的数组** | 不会改变原数组                                         |
| reduce    | 接收一个函数作为**累加器**，返回值是回调函数累计处理的结果                 |                                                        |

```javascript
let arr = [1,2,3];

arr.forEach((item, index, arr) => {});// 遍历
arr.map(function (item, index, arr) { // 遍历加工
    return newItem;
});
arr.filter(function (item, index, arr) { // 遍历并返回符合条件的数组
    return true;
});
arr.reduce(function (previousValue, currentValue, currentIndex, arr) {}, initialValue);
```



## 14. 函数

1.关于函数的**核心内容**：

- 函数有哪几种定义和调用方式
- this：函数内部的 this 指向、如何改变 this 的指向。
- 函数的严格模式
- 高阶函数：函数作为参数传递、函数作为返回值传递
- 闭包：闭包的作用
- 递归：递归的两个条件
- 深拷贝和浅拷贝的区别



2.**函数**：就是将一些功能或语句进行**封装**，在需要的时候，通过**调用**的形式，执行这些语句。

- **函数也是一个对象**
- 使用`typeof`检查一个函数对象时，会返回function

**函数的作用**：

- 将大量重复的语句抽取出来，写在函数里，以后需要这些语句的时候，可以直接调用函数，避免重复劳动。
- 简化编程，让编程模块化。高内聚、低耦合。



2.1.**函数的定义/声明**

+ ```javascript
  // 函数关键字（命名函数）
  function fun1(a, b){
  	return a+b;
  }
  ```
  
+ ```javascript
  // 函数表达式（匿名函数）
  var fun2 = function() {
  	console.log("我是匿名函数中封装的代码");
  };
  ```
  
+ ```javascript
  // 构造函数 new Function()
  var fun3 = new Function('a', 'b', 'console.log("我是函数内部的内容");
  ```
  



2.2.**函数的调用**

+ ```javascript
  fn1(); // 调用函数
  fn2.call(); // 调用函数
  ```

+ ```javascript
  var obj = {
  	fn2: function() {
  		console.log('123');
  };
  obj.fn2(); // 通过对象的方法来调用
  ```

+ ```javascript
  (function() {
  	console.log('我是立即执行函数');
  })();
  ```

+  事件绑定、定时器



2.3.**fn() 和 fn 的区别【重要】**

- `fn()`：调用函数。调用之后，还获取了函数的返回值。
- `fn`：函数对象。相当于直接获取了整个函数对象。



3.**作用域和变量提升**

在 JS 中，一共有两种作用域（ES5 中）：

- **全局作用域**：作用于整个 script 标签内部，或者作用于一个独立的 JS 文件。
- **函数作用域**（局部作用域）：作用于函数内的代码环境。



3.1**变量的作用域：**

**全局变量**：

- 在全局作用域下声明的变量，叫「全局变量」。在全局作用域的任何一地方，都可以访问这个变量。
- 在全局作用域下，使用 var 声明的变量是全局变量。
- 特殊情况：在函数内不使用 var 声明的变量也是全局变量（不建议这么用）。

**局部变量**：

- 定义在函数作用域的变量，叫「局部变量」。仅限函数内部访问这个变量。
- 在函数内部，使用 var 声明的变量是局部变量。
- 函数的**形参**也是属于局部变量。

从执行效率来看全局变量和局部变量：

- 全局变量：只有浏览器关闭时才会被销毁，比较占内存。
- 局部变量：当其所在的代码块运行结束后，就会被销毁，比较节约内存空间。



3.2**预处理**：

将当前 JS 代码中所有**变量的定义**和**函数的定义**，放到所有代码的最前面。

+ 变量的声明提前（变量提升）
+ 函数的声明提前（使用`函数表达式`创建的函数`var foo = function(){}`，**不会被声明提前**）



3.3**作用域链**：

内部函数访问外部函数的变量，采用的是链式查找的方式来决定取哪个值，这种结构称之为作用域链。查找时，采用的是**就近原则**。



4.**函数内 this 的指向【非常重要】**

根据函数的调用方式的不同，this 会指向不同的对象：

- 1.以函数的形式（包括普通函数、定时器函数、立即执行函数）调用时，this 的指向永远都是 window。比如`fun();`相当于`window.fun();`
- 2.以方法的形式调用时，this 指向调用方法的那个对象
- 3.以构造函数的形式调用时，this 指向实例对象
- 4.以事件绑定函数的形式调用时，this 指向**绑定事件的对象**
- 5.使用 call 和 apply 调用时，this 指向指定的那个对象
- 6.ES6 中的箭头函数并不会使用上面的准则，而是会继承外层函数调用的 this 绑定（无论 this 绑定到什么）。



4.1**call()方法**

call() 方法的作用：可以**调用**一个函数，与此同时，它还可以改变这个函数内部的 this 指向。

call() 方法的另一个应用：**可以实现继承**。之所以能实现继承，其实是利用了上面的作用。

+ ```js
  const obj1 = {
      name: '张三',
      age: 18,
  };
  function fn1() {
      console.log(this); // window
      console.log(this.name); // undefined
  }
  fn1.call(this); // this的指向并没有被改变，此时相当于 fn1();
  ```

+ ```js
  const obj1 = {
      name: '张三',
      age: 18,
  };
  function fn1(a, b) {
      console.log(this); // obj1
      console.log(this.name);// 张三
      console.log(a + b);// 6
  }
  fn1.call(obj1, 2, 4); // 先将 this 指向 obj1，然后执行 fn1() 函数
  ```

+ ```js
  // 给 Father 增加 name 和 age 属性
  function Father(myName, myAge) {
      this.name = myName;
      this.age = myAge;
  }
  function Son(myName, myAge) {
      // 【下面这一行，重要代码】
      // 通过这一步，将 father 里面的 this 修改为 Son 里面的 this；另外，给 Son 加上相应的参数，让 Son 自动拥有 Father 里的属性。最终实现继承
      Father.call(this, myName, myAge);
  }
  
  const son1 = new Son('张三', 18);
  console.log(son1.name); // 张三
  ```



4.2**apply() 方法**

call() 和 apply() 方法的作用是相同的。唯一的区别在于，apply() 里面传入的**实参，必须是数组（或者伪数组）**。

> 巧妙应用：求数组的最大值

```js
const arr1 = [3, 7, 10, 8];

// 下面这一行代码的目的，无需改变 this 指向，所以：第一个参数填 null，或者填 Math，或者填 this 都可以。严格模式中，不让填null。
const maxValue = Math.max.apply(Math, arr1); // 求数组 arr1 中元素的最大值
console.log(maxValue);

const minValue = Math.min.apply(Math, arr1); // 求数组 arr1 中元素的最小值
console.log(minValue);
```



4.3**bind() 方法**

bind() 方法**不会调用函数**，但是可以改变函数内部的 this 指向。

```js
新函数 = fn1.bind(想要将this指向哪里, 函数实参1, 函数实参2);
```

参数：

- 第一个参数：在 fn1 函数运行时，指定 fn1 函数的this 指向。如果不需要改变 this 指向，则传 null。
- 其他参数：fn1 函数的实参。

解释：它不会调用 fn1 函数，但会返回 由指定this 和指定实参的**原函数拷贝**。可以看出， bind() 方法是有返回值的。



5.**高阶函数**

高阶函数的概念

当 *函数 A* 接收 *函数 B* 作为**参数**，或者把 *函数 C* 作为**返回值**输出时，我们称 *函数 A* 为高阶函数。

通俗来说，高阶函数是 *对其他函数进行操作* 的函数。



6.**闭包**

**闭包**（closure）：指有权**访问**另一个函数作用域中**变量**的**函数**。

简单理解就是：如果**这个作用域可以访问另外一个函数内部的`局部变量`**，那就产生了闭包。

```js
// 闭包的作用:延伸变量的作用范围
function fn1() {
    let a = 20;
    return function () {
        console.log(a);
    };
}
const foo = fn1(); // 执行 fn1() 之后，会得到一个返回值。这个返回值是函数
foo();
```





## 15. 面向对象

**面向对象**（OOP，Object Oriented Programming）：以对象功能来划分问题，而不是步骤。

优点：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统更加灵活、更加易于维护。

缺点：性能比面向过程低。

特性：

- 封装性
- 继承性
- 多态性



> JS 中的面向对象，是基于**原型**的面向对象。

另外，在ES6中，新引入了 类（Class）和继承（Extends）来实现面向对象。

**基于原型的面向对象**

JS 中的对象（Object）是依靠构造器（constructor）和原型（prototype）构造出来的。



1.**对象的创建&构造函数**

```javascript
// 方法一：对象字面量
const obj = {
    name: "张三",
    age: 18,
    isBoy: true,
    test: {
        id: 123
    }
    sayName: function() {
        console.log(this.name);
    }
};

obj2.sayName();
```

```javascript
// 方法二：工厂模式
function createPerson(name, age, gender) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.gender = gender;
    obj.sayName = function () {
        alert(this.name);
    };
    return obj;
}

var obj2 = createPerson('张三', 18, '男');
var obj3 = createPerson('李四', 17, '女');
var obj4 = createPerson('王五', 16, '女');
```
**弊端**：

使用工厂方法创建的对象，使用的构造函数都是 Object。所以创建的对象都是 Object 这个类型，就导致我们无法区分出多种不同类型的对象。

```javascript
// 方法三：利用构造函数
var stu1 = new Student('张三');
console.log(stu1);
stu1.sayHi();

var stu2 = new Student('李四');
console.log(stu2);
stu2.sayHi();

// 创建一个构造函数
function Student(name) {
    this.name = name; //this指的是当前对象实例【重要】
    this.sayHi = function () {
        console.log(this.name);
    };
}
```



+ 构造函数的概念

是一种特殊的函数，主要用来创建和初始化对象，也就是为对象的成员变量赋初始值。它与 `new` 一起使用才有意义。

+ 构造函数和普通函数的区别

构造函数的创建方式和普通函数没有区别，不同的是构造函数习惯上首字母大写。

构造函数和普通函数的区别就是**调用方式**的不同：普通函数是直接调用，而构造函数需要使用 new 关键字来调用。

+ **this 的指向也有所不同**：
  - 1.以函数的形式调用时，this 永远都是 window。比如`fun();`相当于`window.fun();`
  - 2.以方法的形式调用时，this 是调用方法的那个对象。
  - 3.以构造函数的形式调用时，this 是新创建的实例对象。



2.**静态成员和实例成员**

```javascript
function Hero(name, blood, weapon) {
      // 实例成员:跟实例对象相关的成员，将来使用对象的方式来调用
      this.name = name;
      this.blood = blood;
      this.weapon = weapon;
      this.attack = function () {
        console.log(this.weapon + ' 攻击敌人');
      }
    } 
    // 静态成员：直接给构造函数添加的成员
    Hero.version = '1.0';

    var hero = new Hero('刘备', 100, '剑');
    hero.attack();

    var hero1 = new Hero('关羽', 100, '刀');
    hero1.attack();
    
    console.log(hero.version);// 静态成员不能使用对象的方式来调用×

    console.log(Hero.version);// 静态成员使用构造函数来调用√
```



3.**对象的基本操作**

3.1创建对象

使用 new 关键字调用的函数，是构造函数 constructor。**构造函数是专门用来创建对象的函数**。

```javascript
var obj = new Object();
```
3.2添加属性
```javascript
obj.name = '张三';
```

3.3 获取对象中的属性

`obj.name` 、`obj['name']（可以存放变量）`

3.4修改对象的属性值

```javascript
obj.name = '李四';
```

3.5删除属性

```javascript
delete obj.name;
```

3.6检查对象是否含有指定属性

```javascript
'name' in obj;   // 1

if (obj.name) {  // 2
}
```

3.7遍历对象

```js
for (const key in obj) {
console.log('属性名:' + key);
    
// 注意，因为这里的属性名 key 是变量,不能写成 obj.key，而是要写成 obj[key]
console.log('属性值:' + obj[key]); 
}
```



4.**浅拷贝和深拷贝**

4.1**浅拷贝实现方式**

+ for in
+ Object.assgin()（推荐）

```js
const obj1 = {
    name: '张三',
    age: 18,
    info: {
        desc:'NICE'
    }
};

const obj2 = {
    name: '李四',
    sex: '女',
};

// 浅拷贝：把 obj1 赋值给 obj2。这一行，是关键代码。这行代码的返回值也是 obj2
Object.assign(obj2, obj1);

// obj1=>obj2,属性相同会覆盖
// 第一层name,age,sex是独立的，第二层desc则指向相同堆地址
console.log(JSON.stringify(obj2));
```

4.2**深拷贝**

递归浅拷贝

```js
let obj1 = {
    name: '张三',
    age: 18,
    info: {
        desc:'NICE'
    },
    gf:['李四','王五']
};
let obj2 = {};

deepCopy(obj2, obj1);
console.log(obj2.info.desc);//NICE 
obj1.info.desc = 'BAD';
console.log(obj2.info.desc);//BAD

// 方法：深拷贝
function deepCopy(newObj, oldObj) {
    for (let key in oldObj) {
        let item = oldObj[key];
        // 判断这个值是否是数组
        if (item instanceof Array) {
            newObj[key] = [];
            deepCopy(newObj[key], item);
        } else if (item instanceof Object) {
            // 判断这个值是否是对象
            newObj[key] = {};
            deepCopy(newObj[key], item);
        } else {
            // 简单数据类型，直接赋值
            newObj[key] = item;
        }
    }
}
```



## 16. 正则表达式



## 17. 事件

1.**事件**：就是文档或浏览器窗口中发生的一些特定的交互瞬间。

```js
var div = document.querySelector("#demo");// 写法一
var div = document.getElementById("demo");// 写法二

div.addEventListener("click", function(){ // 写法一
	alert("我是弹出的内容");
});

div.onclick = function () { // 写法二
	alert("我是弹出的内容");
}
```

![](http://img.smyhvae.com/20180126_1553.png)

鼠标拖拽事件：

（1）`onmousedown`：当鼠标在被拖拽元素上按下时，开始拖拽；

（2）`onmousemove`：当鼠标移动时被拖拽元素跟随鼠标移动；

（3）`onmouseup`：当鼠标松开时，被拖拽元素固定在当前位置。

滚轮事件：

`onmousewheel`：鼠标滚轮滚动的事件，会在滚轮滚动时触发。但是火狐不支持该属性。



**键盘事件**：

+ `onkeydown`：按键被按下。

+ `onkeyup`：按键被松开。

可以通过`event`事件对象的`keyCode`来获取按键的编码。

此外，`event`事件对象里面还提供了以下几个属性：

- altKey
- ctrlKey
- shiftKey

上面这三个属性，可以用来判断`alt`、`ctrl`、和`shift`是否被按下。



2.**事件对象event **
![](http://img.smyhvae.com/20180203_1739.png)



3.**事件的传播和冒泡**

事件传播的三个阶段是：事件捕获、事件冒泡和目标。

- 事件捕获阶段：事件从祖先元素往子元素查找（DOM树结构），直到捕获到事件目标 target。在这个过程中，默认情况下，事件相应的监听函数是不会被触发的。
- 事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行。
- 事件冒泡阶段：事件从事件目标 target 开始，从子元素往冒泡祖先元素冒泡，直到页面的最上一级标签。

![](http://img.smyhvae.com/20180204_1218.jpg)

3.1**事件捕获阶段**

事件依次传递的顺序是：window --> document --> html--> body --> 父元素、子元素、目标元素。

- 如果想获取 `html`节点，方法是`document.documentElement`。
- 如果想获取 `body` 节点，方法是：`document.body`。

3.2**事件冒泡阶段**

冒泡指的是：**子元素的事件被触发时，父元素的同样的事件也会被触发**。

冒泡顺序：div -> body -> html -> document -> window

`event.bubbles`检测该事件是否会冒泡

`event.stopPropagation()`**阻止冒泡**



4.**事件委托**

为**父节点**注册事件，在**子节点**触发事件时，父节点利用**冒泡**执行方法，再通过`event.target`获取触发事件的子节点。

**总结**：事件委托是利用了冒泡机制，减少了事件绑定的次数，减少内存消耗，提高性能。

## 18. DOM

**DOM**：Document Object Model，文档对象模型。DOM 为文档提供了结构化表示，并定义了如何通过脚本来访问文档结构。目的其实就是为了能让js操作html元素而制定的一个规范。

DOM就是由节点组成的。

![](http://img.smyhvae.com/20180126_2105.png)

1.**DOM可以做什么**

- 找对象（元素节点）
- 设置元素的属性值
- 设置元素的样式
- 动态创建和删除元素
- 事件的触发响应：事件源、事件、事件的驱动程序

![](http://img.smyhvae.com/20180126_2145.png)

 2.**DOM节点的操作（重要）**

```javascript
newDiv = document.createElement("div");// 创建节点

div.appendChild(newDiv);// 插入节点
div.insertBefore(newDiv,参考的子节点);// 参考点前插入

div.removeChild(newDiv);// 用父节点删除子节点，必须要指定是删除哪个子节点
newDiv.parentNode.removeChild(newDiv);// 自己删除自己

newDiv.cloneNode();// 只复制节点本身，不复制子节点。
newDiv.cloneNode(true);// 既复制节点本身，也复制其所有的子节点。
```

3.**节点的属性**

```js
newDiv = document.querySelect("div");// 获取节点

// 1.获取节点属性值
// 写法一(直接操作标签)
console.log(newDiv.src);
console.log(newDiv.className);
console.log(newDiv.title);

console.log(newDiv['src']);
console.log(newDiv['className']);
console.log(newDiv['title']);
// 写法二(推荐)(把标签作为DOM节点)
console.log(newDiv.getAttribute("src"));
console.log(newDiv.getAttribute("class"));
console.log(newDiv.getAttribute("title"));

// 2.设置节点的属性值
// 写法一
newDiv.src = "images/1.jpg";
newDiv.className = "image-box"; 
// 写法二
newDiv.setAttribute("src","images/1.jpg");
newDiv.setAttribute("class","image-box");

// 3.删除节点属性
newDiv.removeAttribute("src");
newDiv.removeAttribute("class");
```

**总结**：

+ **如果是节点的“原始属性”**，**方式1和方式2是等价的**，可以混用。
+ 如果是节点的“非原始属性”
  + 方式1 的`元素节点.属性`和`元素节点[属性]`：绑定的属性值**不会**出现在标签上。
  + 方式2 的`get/set/removeAttribut`：绑定的属性值**会**出现在标签上。
  + **这两种方式不能交换使用**，get值和set值必须使用同一种方法。



4.**style属性的获取和修改**

```text
newDiv.style.width = "300px";
newDiv.style.backgroundColor = "red"; // 驼峰命名法
```





## 19. JS动画

JS动画的主要内容如下：

+ 三大家族和一个事件对象：

  - 三大家族：offset/scroll/client。也叫三大系列。

  - 事件对象/event（事件被触动时，鼠标和键盘的状态）（通过属性控制）。

+ 动画(闪现/匀速/缓动)

+ 冒泡/兼容/封装



1.**获取元素尺寸**：

- 获取宽高（**宽高 + padding + border**，不包括margin）
  - offsetWidth
  - offsetHight
- 获取当前元素的**定位父元素**
  - offsetParent
- 前元素相对于其**定位父元素**的偏移量
  - offsetLeft
  - offsetTop



> offsetLeft 和 style.left 区别
>
> + 获取偏移量
>   + offsetLeft 若无定位父元素的偏移量，则body为准。
>   + style.left 只能获取行内样式，如果父元素中都没有设置定位，则返回空
> + 返回值
>   + offsetLeft 数字
>   + style.left 数字px
> + 读写性
>   + offsetLeft 和 offsetTop **只读**
>   + style.left 和 style.top **可读写**



2.**scroll滚动属性**

+ 获取滚动区域宽高（包括 width 和 padding，不包括 border和margin）
  + scrollWidth
  + scrollHeight
+ 滚动条滚动的距离
  + scrollLeft
  + scrollTop

**注意**：

1.`scrollHeight` 的特点是：如果内容超出了盒子，`scrollHeight`为内容的高（包括超出的内容）；如果不超出，`scrollHeight`为盒子本身的高度。`ScrollWidth`同理。

2.当某个元素满足`scrollHeight - scrollTop == clientHeight`时，说明垂直滚动条滚动到底了。当某个元素满足`scrollWidth - scrollLeft == clientWidth`时，说明水平滚动条滚动到底了。



**封装scroll**

```js
// 满足兼容性
function scroll() {
        return { //此函数的返回值是对象
            top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
            left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
        }
    }
```



**缓动动画**

```js
    btn[1].onclick = function () {
        animate(div, 400);
    }

    //缓动动画封装
    function animate(ele, target) {
        //要用定时器，先清定时器
        clearInterval(ele.timer);
        //定义定时器
        ele.timer = setInterval(function () {
            //获取步长
            var step = (target - ele.offsetLeft) / 10;
            //大于0向上取整,小于0向下取整
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            //动画原理： 目标位置 = 当前位置 + 步长
            ele.style.left = ele.offsetLeft + step + "px";
            console.log(step);
            if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        }, 30);
    }
```



3.**client可视区属性**

元素调用时：

- clientWidth：获取元素的可见宽度（width + padding）。
- clientHeight：获取元素的可见高度（height + padding）。

body/html 调用时：

- clientWidth：获取网页可视区域宽度。
- clientHeight：获取网页可视区域高度。

**clientX 和 clientY**

event调用：

- clientX：鼠标距离可视区域左侧距离。
- clientY：鼠标距离可视区域上侧距离。



**三大家族offset/scroll/client的区别**

- **区别1：宽高**

  - offsetWidth = width + padding + border
  - offsetHeight = height + padding + border
  - scrollWidth = 内容宽度（不包含border）
  - scrollHeight = 内容高度（不包含border）
  - clientWidth = width + padding
  - clientHeight = height + padding

- **区别2：上左**

  offsetTop/offsetLeft：

  - 调用者：任意元素。(盒子为主)
  - 作用：距离父系盒子中带有定位的距离。

  scrollTop/scrollLeft：

  - 调用者：document.body.scrollTop（window调用）(盒子也可以调用，但必须有滚动条)
  - 作用：浏览器无法显示的部分（被卷去的部分）。

  clientY/clientX：

  - 调用者：event
  - 作用：鼠标距离浏览器可视区域的距离（左、上）。





## 20. BOM

**BOM**：浏览器对象模型（Browser Object Model），操作**浏览器部分功能**的API。比如让浏览器自动滚动。

常见的 BOM对象有：

- Window：代表整个浏览器的窗口，同时 window 也是网页中的全局对象。

- Navigator：代表当前浏览器的信息，通过该对象可以识别不同的浏览器。

- Location：代表当前浏览器的地址栏信息，通过 Location 可以获取地址栏信息，或者操作浏览器跳转页面。
  ```text
    location.href // 获取当前url
    location.href = 'www.baidu.com';// 跳转指定页
    location.assign(str);// 跳转指定页
    location.reload([true]);// 刷新，带true强制清空缓存刷新
    location.replace();// 替换当前页面，不会生成历史记录
  ```
  
- History：代表浏览器的历史记录，通过该对象可以操作浏览器的历史记录。由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页，而且该操作只在当次访问时有效。
  ```text
    history.back();// 回退
    history.forward();// 前进
    history.go( 0 );// 刷新
  ```

- Screen：代表用户的屏幕信息，通过该对象可以获取用户的显示器的相关信息。





## 21. 定时器

常见方法：

- setInterval()：循环调用。将一段代码，**每隔一段时间**执行一次。（循环执行）
- setTimeout()：延时调用。将一段代码，等待一段时间之后**再执行**。（只执行一次）

```js
  let num = 1;
  const timer = setInterval(function () {
        console.log(num);  //每间隔一秒，打印一次num的值
        num ++;
        if(num === 5) {  //打印四次之后，就清除定时器
            clearInterval(timer);
        }

    }, 1000);
```





## 22. 原型对象

```javascript
    // 定义构造函数
	function Person() {}

	var per1 = new Person();
	var per2 = new Person();

	console.log(Person.prototype); // 打印结果：[object object] 
	console.log(per1.__proto__ == Person.prototype); // 打印结果：true
```

**原型链**
原型对象也是对象，所以它也有原型，当我们使用或访问一个对象的属性或方法时：

- 它会先在对象自身中寻找，如果有则直接使用；
- 如果没有则会去原型对象中寻找，如果找到则直接使用；
- 如果没有则去原型的原型中寻找，直到找到Object对象的原型。
- Object对象的原型没有原型，如果在Object原型中依然没有找到，则返回 null

![](http://img.smyhvae.com/20180306_1853.png)



一个例子：

```js
// 构造函数
function E(id) {
    this.e = document.getElementById(id)
};
//定义一个写入内容的方法
E.prototype.html = function(val){
   // var tempE = this.e;
    if(val){
        this.e.innerHTML = val;
        return this;// 返回this，即返回实例，可以链式调用
    }else {
        return tempE.innerHTML 
    }
}
//定义一个事件
E.prototype.on = function(type,fn){
    var tempE = this.e;
    tempE.addEventListener(type,fn);
    return this;
}

var divDom = new E('example');
divDom.html('<p>hello world</p>').on('click',function(){
  console.log('i am coming')
}).html('<h1>footer</h1>')
```



几个问题：

+ 如何判断一个变量是否为数组类型

  ```javascript
  var arr1 = [];
      console.log(arr1 instanceof Array); //打印结果：true。
      console.log(typeof arr1);           //打印结果：object。typeof 方法无法判断是否为数组
  ```

+ 写一个原型链继承的例子

+ 描述 new 一个对象的过程

  1. 创建一个新对象
  2. this 指向这个新对象
  3. 执行代码（对this 赋值）
  4. 返回this



callback && callback()

```js
function fn(callback){
  console.log('fn执行')
  callback && callback()
}
fn(()=>{
  console.log('fn1执行')
})

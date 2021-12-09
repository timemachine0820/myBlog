---
title: 学习笔记-JS(ES6)
date: 2021-12-09 23:00
categories:
  - 学习笔记
tags:
  - JavaScript
  - ES6
---

:::tip
本文记录JS(ES6)学习笔记
:::

<!-- more -->

## 1. 简介

ES6 是新的 JS 语法标准。**ES6 实际上是一个泛指，泛指 ES 2015 及后续的版本**。

ES6 的改进如下：

- ES6 之前的变量提升，会导致程序在运行时有一些不可预测性。而 ES6 中通过 let、const 变量优化了这一点。
- ES6 增加了很多功能，比如：**常量、作用域、对象代理、异步处理、类、继承**等。这些在 ES5 中想实现，比较复杂，但是 ES6 对它们进行了封装。
- ES6 之前的语法过于松散，实现相同的功能，不同的人可能会写出不同的代码。



## 2. 严格模式

**目的**：

- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
- 消除代码运行的一些不安全之处，为代码的安全运行保驾护航
- 为未来新版本的Javascript做好铺垫



**使用**：

- 针对整个脚本文件：将`use strict`放在脚本文件的第一行，则整个脚本文件将以严格模式运行。
- 针对单个函数：将`use strict`放在函数体的第一行，则整个函数以严格模式运行。



**语法和行为改变**：

- 变量必须声明后再使用
- 禁止自定义的函数中的this指向window
- 创建eval作用域
- 对象不能有重名的属性
- 构造函数必须通过new实例化对象





## 3. ES5扩展

1.JSON对象

+ js对象(数组) --> json对象(数组)：

```javascript
	JSON.stringify(obj/arr)
```

+ json对象(数组) --> js对象(数组)：

```javascript
	JSON.parse(json)
```

上面这两个方法是ES5中提供的。

通常说的“json字符串”，只有两种：**json对象、json数组**。

`typeof json字符串`的返回结果是string。



2.Object扩展

+ 指定对象为原型，创建新的对象 
	```javascript
  // Object.create(prototype, [descriptors])
  
  obj2 = Object.create(obj1, {
          sex: {//给obj2添加新的属性`sex`。注意，这一行的冒号不要漏掉
              value: '男',  //通过value关键字设置sex的属性值
              writable: false, // 标识当前属性值是否可修改。默认为false。
              configurable: true,// 标识当前属性是否可以被删除。默认为false。
              enumerable: true // 标识当前属性是否能用 for in 枚举。默认为false。

+ ```javascript
   var obj = {
          firstName : 'kobe',
          lastName : 'bryant',
          get fullName(){
              return this.firstName + ' ' + this.lastName
          },
          set fullName(data){
              var names = data.split(' ');
              this.firstName = names[0];
              this.lastName = names[1];
          }
      };
      console.log(obj.fullName);
      obj.fullName = 'stephen curry';
      console.log(obj.fullName);
  ```



3.函数的扩展bind()

> 见JavaScript基础篇-函数

**问题**：

call()、apply()和bind()的区别：

- 都能改变this的指向
- call()/apply()是**立即调用函数**，apply()传入的**实参必须为数组或伪数组**。
- bind()：绑定完this后，不会立即调用当前函数，而是**将函数返回**，因此后面还需要再加`()`才能调用。





## 4. ES6 的let\const和块级作用域

+ let定义局部变量

  ```javascript
  for (var i = 0; i < 10; i++) {
      console.log('循环体中:' + i);
  }
  console.log('循环体外:' + i); // 可以打印
  
  for (let i = 0; i < 10; i++) {
      console.log('循环体中:' + i); 
  }
  console.log('循环体外:' + i); // 报错，因为i被声明在块级作用域内
  ```

+ const定义常量

  ```js
  const list = [10, 20, 30];
  list[0] = 11;//可以修改数组某个值
  list = [11, 12, 13]; //报错，不能修改整个数组
  ```

 **let 和 const 的特点【重要】**

- 不属于顶层对象 Window
- 不允许重复声明
- 不存在变量提升
- 暂时性死区
- 支持块级作用域



同步和异步的一个注意点：

```js
for (let i = 0; i < 4; i++) {
    setTimeout(function(){
        console.log(i); // 0,1,2,3
        },1000);
}

for (var i = 0; i < 4; i++) {
    setTimeout(function(){
        console.log(i);// 4,4,4,4
        },1000);
}
```



暂时性死区TDC

ES6 规定：使用 let/const 声明的变量，会使区块形成封闭的作用域。若在声明之前使用变量，就会报错。

也就是说，在使用 let/const 声明变量时，**变量需要先声明，再使用**（声明语句必须放在使用之前）。这在语法上，称为 “暂时性死区”（ temporal dead zone，简称 TDZ）。

DTC 其实是一种保护机制，可以让我们养成良好的编程习惯。





## 5. 解构赋值

+ 数组

  ```javascript
  {
      let [a = true] = [];
      console.log(a); //输出结果：true
  }
  
  {
      let [a, b] = ['这是a']; //a 赋值为：这是a。b没有赋值
      console.log(a + ',' + b); //输出结果：这是a,undefined
  }
  
  {
      let [a, b = '这是b'] = ['这可以是a']; //a 赋值为：这可以是a。b 采用默认值 这是b
      console.log(a + ',' + b); //输出结果：这可以是a,这是b
  }
  ```

+ 对象

  ```js
  const person = { name: '张三', age: 18 };
  let { name: myName, age: myAge } = person; // 对象的结构赋值
  
  console.log(myName); // 打印结果：张三
  console.log(myAge); // 打印结果：18
  
  console.log(name); // 打印报错：Uncaught ReferenceError: name is not defined
  console.log(age); // 打印报错：Uncaught ReferenceError: age is not defined
  ```

+ 字符串

  字符串也可以解构，这是因为，此时字符串被转换成了一个类似数组的对象。

  ```javascript
  const [a, b, c, d] = 'hello';
  console.log(a); // h
  console.log(b); // e
  console.log(c); // l
  
  console.log(typeof a); //输出结果：string
  ```





## 6. 箭头函数

```javascript
const fn1 = (a, b) => {
    console.log('addNum');
    return a + b;
};

console.log(fn1(1, 2)); //输出结果：3

const fn2 = a => a + 1;
console.log(fn2(1)); //输出结果：2
```

- 如果有且仅有 1 个形参，则`()`可以省略
- 如果函数体内有且仅有 1 条语句，则`{}`可以省略，但前提是，这条语句必须是 return 语句。



**箭头函数的this指向：**

**箭头函数本身不绑定 this**，this 指向的是**箭头函数定义位置的 this**（也就是说，箭头函数在哪个位置定义的，this 就跟这个位置的 this 指向相同）。



**参数默认值：**

```javascript
// 传统写法：
function fn(param) {
    let p = param || 'hello';
    console.log(p);
}

// ES6写法：
let fn=(param='hello')=>{
    console.log(param);
}
```





## 7. 剩余参数和扩展运算符

**剩余参数：**

+ **注意**：args 参数之后，不能再加别的参数，否则编译报错。

```js
let fn=(n1,...args)=>{  // n1=1,args=[2,3]
  return n1 + args.reduce((pre,cur)=>{
    return pre+=cur
  },0)
}
console.log(fn(1,2,3))  // 6
```



**扩展运算符（展开语法）**：

```js
const arr = [1, 2, 3];
console.log(...arr); // 1 2 3
```

+ 应用1：数组赋值

  ```javascript
  let arr1 = [1, 2, 3];
  let arr2 = [...arr1]; //[重要代码]arr2 会重新开辟内存地址
  console.log('arr1:' + arr1);
  console.log('arr2:' + arr2);
  console.log('---------------------');
  
  arr2.push(4); //往arr2 里添加一部分内容
  console.log('arr1:' + arr1); // 1，2，3
  console.log('arr2:' + arr2); // 1，2，3，4
  ```

+ 应用2：合并数组

  ```js
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  
  // 方法1
  let arr3 = [...arr1, ...arr2];
  console.log(arr3); // [1，2，3，4，5，6]
  
  // 方法2
  arr1.push(...arr2);
  console.log(arr1); // [1，2，3，4，5，6]
  
  // 方法3 
  console.log(arr1.concat(arr2));// [1，2，3，4，5，6,4,5,6]
  ```

+ 应用3：将伪数组转换为真正的数组

  ```js
  const myDivs = document.getElementsByClassName('div');
  // 方法1
  const divArr1 = [...myDivs]; // 利用扩展运算符，将伪数组转为真正的数组
  // 方法2
  let divArr2 = Array.from(myDivs);
  ```





## 8. 字符串、数组、对象的扩展

1.字符串的扩展：

- `includes(str)`：判断是否包含指定的字符串
- `startsWith(str)`：判断是否以指定字符串开头
- `endsWith(str)`：判断是否以指定字符串结尾
- `repeat(count)`：重复指定次数



2.Number的扩展

- `Number.isFinite(i)`：判断是否为有限大的数。比如`Infinity`这种无穷大的数，返回的就是 false。
- `Number.isNaN(i)`：判断是否为 NaN。
- `Number.isInteger(i)`：判断是否为整数。
- `Number.parseInt(str)`：将字符串转换为对应的数值。
- `Math.trunc(i)`：去除小数部分。



3.数组的扩展（详细见[js基础](./JavaScript.md)-数组）

+ Array.from()
+ find()
+ findIndex()



4.对象的扩展

+ `Object.is(v1, v2);`**作用：判断两个数据是否完全相等。底层是通过字符串**来判断的。
+ ` Object.assign();`详细见js基础-面向对象
+ `__proto__`属性



5.Set 数据结构

Set 类似于**数组**，但成员的值都是**唯一**的，没有重复的值。 

可以用来做数组去重。

```js
const set = new Set([1,2,3,4,5,2,4,5]); // 注意，这个数组里有重复的值

// 注意，这里的 set 并不是数组，而是一个单纯的 Set 数据结构
console.log(set); // Set(5) {1, 2, 3, 4, 5}

// 注意，到这一步，才获取到了真正的数组
console.log([...set]); // [1, 2, 3, 4, 5]
```  

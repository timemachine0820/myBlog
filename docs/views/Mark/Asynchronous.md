---
title: 学习笔记-异步编程
date: 2021-12-24 10:27
categories:
  - 学习笔记
tags:
  - 异步
  - Promise
---

:::tip
本文记录异步编程学习笔记
:::

<!-- more -->

## 1. 单线程与异步

JavaScript 语言和执行环境是**单线程**。即同一时间，只能处理一个任务。

**同步与异步**

![Image](https://raw.githubusercontent.com/timemachine0820/images/main/Image.png?token=AWTODXEOA7CYPJ3W2LSIIPTBWWCDO)

![img](https://pic2.zhimg.com/v2-d1ca0d6b13501044a5f74c99becbcd3d_b.webp)

**常见的异步场景如下：**

- 定时器：setTimeout（定时炸弹）、setInterval（循环执行）
- 事件绑定
- 网络请求（含接口请求）：ajax 请求、网络图片加载
- ES6 中的 Promise



**接口调用的方式**

- 原生 ajax、基于 jQuery 的 ajax
- Promise
- Fetch
- axios



**事件循环机制**

![img](http://img.smyhvae.com/20210517_1431.png)

执行顺序如下：

- 同步任务：进入主线程后，立即执行。
- 异步任务：会先进入 Event Table；等时间到了之后，再进入 Event Queue，然后排队（为什么要排队？因为同一时间，JS 只能执行一个任务）。比如说，`setTimeout(()=> {}, 1000)`这种定时器任务，需要等一秒之后再进入 Event Queue。
- 当主线程的任务执行完毕之后，此时主线程处于空闲状态，于是会去读取 Event Queue 中的任务队列，如果有任务，则进入到主线程去执行。





## 2. Ajax

在浏览器中，我们可以在不刷新页面的情况下，通过 Ajax 的方式去获取一些新的内容。

Ajax：Asynchronous Javascript And XML（异步 JavaScript 和 XML）。它并不是凭空出现的新技术，而是对于现有技术的结合。Ajax 的核心是 js 对象：**XMLHttpRequest**。

**发送 Ajax 请求的五个步骤：**

（1）创建异步对象，即 XMLHttpRequest 对象。

（2）使用 open 方法设置请求参数。`open(method, url, async)`。参数解释：请求的方法、请求的 url、是否异步。第三个参数如果不写，则默认为 true。

（3）发送请求：`send()`。

（4）注册事件：注册 onreadystatechange 事件，状态改变时就会调用。

如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。

（5）服务端响应，获取返回的数据。  



> 手写Ajax

```javascript
//【发送ajax请求需要五步】
//（1）创建XMLHttpRequest对象
var xmlhttp = new XMLHttpRequest();

//（2）设置请求的参数。包括：请求的方法、请求的url。
xmlhttp.open('get', '02-ajax.php');
// 下面是post方法必须添加
// xmlhttp.open('post', '02.post.php');
// xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

//（3）发送请求
xmlhttp.send();
// xmlhttp.send('name=fox&age=18'); post方法

//（4）注册事件。 onreadystatechange事件，状态改变时就会调用。
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //（5）服务端相应：如果能够进入这个判断，说明数据请求成功了
        console.log('数据返回成功：' + JSON.stringify(xmlhttp.responseText));
    }
};
```

封装

```js
// 封装 Ajax为公共函数：传入回调函数 success 和 fail
function myAjax(url, success, fail) {
    // 1、创建XMLHttpRequest对象
    var xmlhttp;
    // 2、发送请求
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
    // 3、服务端响应
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var obj = JSON.parse(xmlhttp.responseText);
            console.log('数据返回成功：' + obj);
            success && success(xmlhttp.responseText);
        } else {
            fail && fail(new Error('接口请求失败'));
        }
    };
}

// 单次调用 ajax
myAjax('a.json', (res) => {
    console.log(res);
});

// 多次调用 ajax。接口请求顺序：a --> b --> c
myAjax('a.json', (res) => {
    console.log(res);
    myAjax('b.json', (res) => {
        console.log(res);
        myAjax('c.json', (res) => {
            console.log(res);
        });
    });
});
```





## 3. Promise

**1. 回调的定义**

把函数 A 传给另一个函数 B 调用，那么函数 A 就是回调函数。
如果我们希望在异步结束之后执⾏某个操作，就只能通过**回调函数**这样的⽅式进⾏操作。
为了能使回调函数以更优雅的⽅式进⾏调⽤，在 ES6 语法中，新增了⼀个名为 **Promise** 的新规范

**回调的缺点**:回调的写法比较直观，不需要 return，层层嵌套即可。但也存在两个问题：

- 1、如果嵌套过深，则会出现**回调地狱**的问题。
- 2、不同的函数，回调的参数，在写法上可能不一致，导致不规范、且需要**单独记忆**。



**2. 使用 Promise 的基本步骤**

（1）通过 `new Promise()` 构造出一个 Promise 实例。Promise 的构造函数中传入一个参数，这个参数是一个函数，该函数用于处理异步任务。

（2）函数中传入两个参数：resolve 和 reject，分别表示异步执行成功后的回调函数和异步执行失败后的回调函数。代表着我们需要改变当前实例的状态到**已完成**或是**已拒绝**。

（3）通过 promise.then() 和 promise.catch() 处理返回结果（这里的 `promise` 指的是 Promise 实例）。

promise.then()方法：**只有 promise 的状态被改变之后，才会走到 then 或者 catch**。也就是说，在 new Promise()的时候，如果没有写 resolve()，则 promise.then() 不执行；如果没有写 reject()，则 promise.catch() 不执行。

```javascript
// 创建 promise 实例
let promise = new Promise((resolve, reject) => {
    //进来之后，状态为pending
    console.log('同步代码'); //这行代码是同步的
    //开始执行异步操作（这里开始，写异步的代码，比如ajax请求 or 开启定时器）
    if (异步的ajax请求成功) {
        console.log('333');
        resolve('请求成功，并传参'); //如果请求成功了，请写resolve()，此时，promise的状态会被自动修改为fulfilled（成功状态）
    } else {
        reject('请求失败，并传参'); //如果请求失败了，请写reject()，此时，promise的状态会被自动修改为rejected（失败状态）
    }
});
console.log('222');

//调用promise的then()：开始处理成功和失败
promise.then(
    (successMsg) => {
        // 处理 promise 的成功状态：如果promise的状态为fulfilled，则执行这里的代码
        console.log(successMsg, '成功了'); // 这里的 successMsg 是前面的 resolve('请求成功，并传参')  传过来的参数
    },
    (errorMsg) => {
        //处理 promise 的失败状态：如果promise的状态为rejected，则执行这里的代码
        console.log(errorMsg, '失败了'); // 这里的 errorMsg 是前面的 reject('请求失败，并传参') 传过来的参数
    }
);
```



**3. Promise 的状态改变，是不可逆的**

1、promise 有三种状态：等待中、成功、失败。等待中状态可以更改为成功或失败，已经更改过状态后⽆法继续更改（例如从失败改为成功）。

2、promise 实例中需要传⼊⼀个函数，这个函数接收两个参数，执⾏第⼀个参数之后就会改变当前 promise 为「成功」状态，执⾏第⼆个参数之后就会变为「失败」状态。

3、通过 .then ⽅法，即可在上⼀个 promise 达到成功时继续执⾏下⼀个函数或 promise。同时通过 resolve 或 reject 时传⼊参数，即可给下⼀个函数或 promise 传⼊初始值。

4、失败的 promise，后续可以通过 promise 自带的 .catch ⽅法或是 .then ⽅法的第⼆个参数进⾏捕获。



**4. Promise封装Ajax**

```js
function ajax(url, success, fail) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            success && success(xmlhttp.responseText);
        } else {
            fail && fail(new Error('接口请求失败'));
        }
    };
}
// 写法1：函数
function promiseA() {
    return new Promise((resolve, reject) => {
        ajax('xxx_a.json', (res) => {
            if (res.retCode == 0) {
                resolve('request success' + res);
            } else {
                reject({ retCode: -1, msg: 'network error' });
            }
        });
    });
}

// 业务层的接口调用。这里的 data 就是 从 resolve 和 reject 传过来的，也就是从接口拿到的数据
promiseA()
    .then((res) => {
        // 从 resolve 获取正常结果：接口请求成功后，打印接口的返回结果
        console.log(res);
    })
    .catch((err) => {
        // 从 reject 获取异常结果
        console.log(err);
    });

// 写法2：变量
const promiseB = new Promise((resolve, reject) => {
    ajax('xxx_a.json', (res) => {
        if (res.retCode == 0) {
            resolve('request success' + res);
        } else {
            reject({ retCode: -1, msg: 'network error' });
        }
    });
});

promiseB
    .then((res) => {
        // 从 resolve 获取正常结果
        console.log(res);
    })
    .catch((err) => {
        // 从 reject 获取异常结果
        console.log(err);
    });
```

**注意**：

+ 写法 1（将 promise 实例定义为函数），则调用 promise 的时候是`promiseA().then()`
+ 写法 2（将 promise 实例定位为变量），则调用的时候用的是`promiseB.then()`



**5. reject 失败状态的两种写法**

```js
function promiseA() {
    return new Promise((resolve, reject) => {
        // 这里做异步任务（比如 ajax 请求接口，或者定时器）
            ...
            ...
    });
}

// 写法1
promiseA()
    .then((res) => {
        // 从 resolve 获取正常结果
        console.log('接口请求成功时，走这里');
        console.log(res);
    })
    .catch((err) => {
        // 从 reject 获取异常结果
        console.log('接口请求失败时，走这里');
        console.log(err);
    })
    .finally(() => {
        console.log('无论接口请求成功与否，都会走这里');
    });


// 写法 2：（和写法 1 等价）
promiseA()
    .then(
        (res) => {
            // 从 resolve 获取正常结果
            console.log('接口请求成功时，走这里');
            console.log(res);
        },
        (err) => {
            // 从 reject 获取异常结果
            console.log('接口请求失败时，走这里');
            console.log(err);
        }
    )
    .finally(() => {
        console.log('无论接口请求成功与否，都会走这里');
    });
```







## 4. Promise链式调用

**1.  Promise 链式调用（封装多个接口）**

```js
// 封装 ajax 请求：传入回调函数 success 和 fail
function ajax(url, success, fail) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            success && success(xmlhttp.responseText);
        } else {
            fail && fail(new Error('接口请求失败'));
        }
    };
}

// Promise 封装接口1
function request1() {
    return new Promise((resolve, reject) => {
        ajax('https://www.baidu.com', (res) => {
            if (res.retCode == 201) {
                // 接口请求成功时调用：这里的 res 是接口1的返回结果
                resolve('request1 success' + res);
            } else {
                // 接口请求异常时调用异常
                reject('接口1请求失败');
            }
        });
    });
}

// Promise 封装接口2
function request2() {
    return new Promise((resolve, reject) => {
        ajax('https://www.jd.com', (res) => {
            if (res.retCode == 202) {
                // 这里的 res 是接口2的返回结果
                resolve('request2 success' + res);
            } else {
                reject('接口2请求失败');
            }
        });
    });
}

// Promise 封装接口3
function request3() {
    return new Promise((resolve, reject) => {
        ajax('https://www.taobao.com', (res) => {
            if (res.retCode == 203) {
                // 这里的 res 是接口3的返回结果
                resolve('request3 success' + res);
            } else {
                reject('接口3请求失败');
            }
        });
    });
}

// 先发起request1，等resolve后再发起request2；紧接着，等 request2有了 resolve之后，再发起 request3
request1()
    .then((res1) => {
        // 接口1请求成功
        console.log(res1);
        return request2();
    })
    .then((res2) => {
        // 接口2请求成功
        console.log(res2);
        return request3();
    })
    .then((res3) => {
        // 接口3请求成功
        console.log(res3);
    })
    .catch((err) => {
        // 从 reject中获取异常结果
        console.log(err);
    });
```



**2. 链式调用处理reject**

```js
getPromise('a.json')
    .then((res) => {
        console.log(res);
        return getPromise('b.json'); // 继续请求 b
    })
    .then((res) => {
        // b 请求成功
        console.log(res);
        return getPromise('c.json'); // 继续请求 c
    })
    .then((res) => {
        // c 请求成功
        console.log('c：success');
    })
    .catch((err) => {
        // 统一处理请求失败
        console.log(err);
    });
```

上面的代码中，由于是统一处理多个请求的异常，所以**只要有一个请求失败了，就会马上走到 catch**，剩下的请求就不会继续执行了。



**3. return的返回值**

return 后面的返回值，有两种情况：

- 情况 1：返回 Promise 实例对象。返回的该实例对象会调用下一个 then。
- 情况 2：返回普通值。返回的普通值会直接传递给下一个 then，通过 then 参数中函数的参数接收该值。





## 5. Promise静态方法

实例方法

- promise.then()：获取异步任务的正常结果。
- promise.catch()：获取异步任务的异常结果。
- promise.finaly()：异步任务无论成功与否，都会执行。

静态方法

- `Promise.resolve()`
- `Promise.reject()`
- `Promsie.all()`：并发处理多个异步任务，所有任务都执行成功，才算成功（走到 resolve）；只要有一个失败，就会马上走到 reject，整体都算失败。
- `Promise.race()`：并发处理多个异步任务，返回的是第一个执行完成的 promise，且状态和第一个完成的任务状态保持一致。
- `Promise.allSettled()`：并发处理多个异步任务，返回所有任务的执行结果（包括成功、失败）。当你有多个彼此不依赖的异步任务执行完成时，或者你想知道每个 promise 的结果时，通常使用它。
- `Promise.any()`



**1. Promise.resolve() 和 Promise.reject()**

有些场景下，我们并没有异步操作，但**仍然想调用 promise.then**，此时，可以用`Promise.resolve()` 将其包装成成功的状态。同理，`Promise.reject()`可以包装成失败的状态。

```js
function foo(flag) {
    if (flag) {
        // Promise的静态方法：直接返回字符串
        return Promise.resolve('success');
    } else {
        // Promise的静态方法：直接返回字符串
        return Promise.reject('fail');
    }
}
// 执行 reslove 的逻辑
foo(true).then((res) => {
    console.log(res);
});
// 执行 reject 的逻辑
foo(false).catch((err) => {
    console.log(err);
});
```



**2. Promise.all()**

`Promsie.all([p1, p2, p3])`：并发处理多个异步任务，所有任务都执行成功，才算成功（才会走到 then）；只要有一个任务失败，就会马上走到 catch，整体都算失败。参数里传的是 多个 promise 实例组成的数组。

```js
const imgArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
const promiseArr = [];
imgArr.forEach((item) => {
    const p = new Promise((resolve, reject) => {
        // 在这里做图片上传的异步任务。图片上传成功后，接口会返回图片的 url 地址
        //  upload img ==> return imgUrl
        if (imgUrl) {
            // 单张图片上传完成
            resolve(imgUrl);
        } else {
            reject('单张图片上传失败');
        }
    });
    promiseArr.push(p);
});
Promise.all(promiseArr)
    .then((res) => {
        console.log('图片全部上传完成');
        console.log('九张图片的url地址，组成的数组：' + res);
    })
    .catch((res) => {
        console.log('部分图片上传失败');
    });
```



**3. Promise.race()**

`Promise.race([p1, p2, p3])`：并发处理多个异步任务，返回的是**第一个**执行完成的 promise，且状态和第一个完成的任务状态保持一致。参数里传的是多个 promise 实例组成的数组。

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise1');
        resolve('promise 1 成功');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise2');
        // 第二个任务执行失败时
        reject('promise 2 失败');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise3');
        resolve('promise 3 成功');
    }, 3000);
});

Promise.race([promise1, promise2, promise3])
    .then((res) => {
        // 第一个完成的任务，如果执行成功，就会走到这里
        console.log('走到then:' + res);
    })
    .catch((err) => {
        // 第一个完成的任务，如果执行失败，就会走到这里
        console.log('走到catch:' + err);
    });


// 结果
// 1秒后
执行 promise1
走到then:promise 1 成功

// 2秒后
执行 promise2

// 3秒后
执行 promise3
```



例子：网络请求超时

```js
function ask(){
  let prom1= new Promise((reslove,reject)=>{
    setTimeout(()=>{
      reslove('请求成功')
    },4000) 
  })
  let prom2= new Promise((reslove,reject)=>{
    setTimeout(()=>{
      reject('请求失败')
    },3000)
  })
 	return Promise.race([prom1,prom2])
}

ask().then((res=>{
  console.log(res)
})).catch((err)=>{
  console.log(err)
})
```





## 6. 宏任务与微任务

- 在执行一个 Promise 对象的时候，当走完`resolve();`之后，就会立刻把 `.then()`里面的代码加入到**微任务队列**当中。
- 任务的一般执行顺序（同一层）：**同步任务 --> 微任务 --> 宏任务**。

```js
function app() {
      setTimeout(() => {
        console.log("1-1"); // 第一层宏任务
        Promise.resolve().then(() => {
          console.log("2-1");// 第二层微任务
        });
      });
      console.log("1-2"); // 同步任务
      Promise.resolve().then(() => {
        console.log("1-3");// 第一层微任务
        setTimeout(() => {
          console.log("3-1"); // 第二层宏任务
        });
      });
    }
    app();

// 1-2 1-3 1-1 2-1 3-1
```

![微信图片_20211213234400](https://raw.githubusercontent.com/timemachine0820/images/main/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211213234400.jpg)

**封装SetTimeout定时器**

```javascript
function delaySeconds(delay=2000){
  return new Promise((reslove)=>{
  setTimeout(reslove,delay)
})
}

delaySeconds(1000).then(res=>{
  console.log('111') 
  return prm(3000)
}).then(res=>{
  console.log('222')
})
```



## 7. Async/Await

[理解 JavaScript 的 async/await](https://segmentfault.com/a/1190000007535316)








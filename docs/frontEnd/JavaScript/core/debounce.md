# 节流和防抖

## 是什么

本质上是优化高频率执行代码的一种手段

如：浏览器的 resize、scroll、keypress、mousemove 等事件在触发时，会不断地调用绑定在事件上的回调函数，极大地浪费资源，降低前端性能

为了优化体验，需要对这类事件进行调用次数的限制，对此我们就可以采用 throttle（防抖）和 debounce（节流）的方式来减少调用频率

## 定义

节流: n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效
防抖: n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时

## 代码实现

### 节流

1. 使用时间戳写法，事件会立即执行，停止触发后没有办法再次执行

```js
function throttled1(fn, delay = 500) {
  let oldtime = Date.now()
  return function (...args) {
    let newtime = Date.now()
    if (newtime - oldtime >= delay) {
      fn.apply(null, args)
      oldtime = Date.now()
    }
  }
}
```

2. 使用定时器写法，delay 毫秒后第一次执行，第二次事件停止触发后依然会再一次执行

```js
function throttled2(fn, delay = 500) {
  let timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
    }
  }
}
```

3. 可以将时间戳写法的特性与定时器写法的特性相结合，实现一个更加精确的节流。实现如下

```js
function throttled(fn, delay) {
  let timer = null
  let starttime = Date.now()
  return function () {
    let curTime = Date.now() // 当前时间
    let remaining = delay - (curTime - starttime) // 从上一次到现在，还剩下多少多余时间
    let context = this
    let args = arguments
    clearTimeout(timer)
    if (remaining <= 0) {
      fn.apply(context, args)
      starttime = Date.now()
    } else {
      timer = setTimeout(fn, remaining)
    }
  }
}
```

### 防抖

1. 简单版本的实现

```js
function debounce(func, wait) {
  let timeout

  return function () {
    let context = this // 保存this指向
    let args = arguments // 拿到event对象

    clearTimeout(timeout)
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}
```

2. 防抖如果需要立即执行，可加入第三个参数用于判断，实现如下：

```js
function debounce(func, wait, immediate) {
  let timeout

  return function () {
    let context = this
    let args = arguments

    if (timeout) clearTimeout(timeout) // timeout 不为null
    if (immediate) {
      let callNow = !timeout // 第一次会立即执行，以后只有事件执行后才会再次触发
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if (callNow) {
        func.apply(context, args)
      }
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
  }
}
```

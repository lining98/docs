# JavaScript 节流和防抖

> 在 JavaScript 中，节流（Throttling）和防抖（Debouncing）是两种常见的性能优化技术，用于限制函数的执行频率。它们可以帮助控制事件处理函数的触发次数，以减少资源消耗和提升用户体验。

**本质上是优化高频率执行代码的一种手段**

如：浏览器的 resize、scroll、keypress、mousemove 等事件在触发时，会不断地调用绑定在事件上的回调函数，极大地浪费资源，降低前端性能

为了优化体验，需要对这类事件进行调用次数的限制，对此我们就可以采用 throttle（防抖）和 debounce（节流）的方式来减少调用频率

## 节流

节流函数适用事件：

- window 的 resize、scroll
- mousedown、mousemove
- keyup、keydown ...

### 定义

节流是一种控制函数执行频率的技术。当一个函数被频繁调用时，节流可以限制函数在一定时间间隔内只执行一次。

节流的实现思路是设置一个定时器，在函数被调用时先检查定时器是否存在。如果定时器不存在，则立即执行函数并设置定时器；如果定时器存在，则忽略该次函数调用。当定时器触发后，清除定时器，以便在下次函数调用时重新开始计时。

以下是一个简单的节流函数的实现示例：

```js
function throttle(func, delay) {
  let timer
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args)
        timer = null
      }, delay)
    }
  }
}
```

::: tip
在上述示例中，throttle 函数接收一个要节流的函数 func 和延迟时间 delay。返回一个新的函数，该函数在延迟时间内只能执行一次。当函数被调用时，如果定时器不存在，则立即执行函数并设置定时器；如果定时器存在，则忽略该次函数调用。当定时器触发后，清除定时器，以便在下次函数调用时重新开始计时。
:::

### 其他写法

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

2. 可以将时间戳写法的特性与定时器写法的特性相结合，实现一个更加精确的节流。实现如下

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

## 防抖

防抖函数适用事件：

- window 的 resize、scroll
- mousedown、mousemove、keyup、keydown
- 表单事件 ...

### 定义

防抖是一种控制函数执行频率的技术。当一个函数被频繁调用时，防抖可以延迟函数的执行，直到某个连续的时间段内没有新的函数调用发生。

防抖的实现思路是设置一个定时器，在函数被调用时先清除之前的定时器，并设置一个新的定时器。如果在指定的时间内没有新的函数调用发生，那么定时器触发后执行函数；如果在指定时间内又有新的函数调用发生，则重新开始计时。

以下是一个简单的防抖函数的实现示例：

```js
function debounce(func, delay) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
```

### 立即执行

防抖如果需要立即执行，可加入第三个参数用于判断，实现如下：

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

## 用法

1. 导入或定义防抖|节流函数

```js
function debounce(func, delay) {
  let timerId
  return function (...args) {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

function throttle(func, delay) {
  let timerId
  return function (...args) {
    if (!timerId) {
      timerId = setTimeout(() => {
        func.apply(this, args)
        timerId = null
      }, delay)
    }
  }
}
```

2. 定义要进行的函数

```js
function handleScroll() {
  // 处理滚动事件的逻辑
}
```

3. 创建函数

```js
const throttleHandleScroll = throttle(handleScroll, 500)

const debounceHandleScroll = debounce(handleScroll, 500)
```

4. 将函数绑定到事件上

```js
window.addEventListener('scroll', throttleHandleScroll)

window.addEventListener('scroll', debounceHandleScroll)
```

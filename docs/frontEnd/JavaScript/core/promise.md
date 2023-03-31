# promise

## 是什么

`promise`是一种异步编程的解决方案，它可以避免回调地狱，使代码更加简洁易读。`promise`对象代表一个异步操作的最终完成或失败，并返回一个值。

在 JavaScript 中，`promise`有三种状态：`pending（进行中）`、`fulfilled（已成功）`和`rejected（已失败）`。当`promise`对象的状态从`pending`变为`fulfilled`或`rejected`时，会调用相应的回调函数。

以下是一个简单的`promise`示例：

```js
const promise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    const result = Math.random() > 0.5
    if (result) {
      resolve('成功')
    } else {
      reject('失败')
    }
  }, 1000)
})

promise
  .then((value) => {
    console.log(value) // 成功
  })
  .catch((reason) => {
    console.log(reason) // 失败
  })
```

## 实现一个 promise

```js
// 实现一个promise
class MyPromise {
  constructor(executor) {
    this.status = 'pending' // 初始状态为pending
    this.value = undefined // 成功的值
    this.reason = undefined // 失败的原因

    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled' // 状态变为fulfilled
        this.value = value // 保存成功的值
      }
    }

    const reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected' // 状态变为rejected
        this.reason = reason // 保存失败的原因
      }
    }

    try {
      executor(resolve, reject) // 执行executor函数
    } catch (error) {
      reject(error) // 如果执行过程中出现错误，直接reject
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === 'fulfilled') {
      onFulfilled(this.value) // 如果状态为fulfilled，执行onFulfilled函数
    }

    if (this.status === 'rejected') {
      onRejected(this.reason) // 如果状态为rejected，执行onRejected函数
    }
  }
}

// 使用示例
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})

promise.then((value) => {
  console.log(value) // 输出'success'
})
```

在以上代码中，`MyPromise` 是 JavaScript 中 `Promise` 类的自定义实现。它接受一个 `executor` `函数作为参数，该函数立即被调用并接收两个函数作为参数：resolve` 和 `reject。当异步操作成功时，调用` `resolve` 函数，当它失败时，调用 `reject` 函数。

`MyPromise` 类有一个 `then` 方法，它接受两个参数：`onFulfilled` 和 `onRejected`。如果 `promise` 被 `fulfilled`，`onFulfilled` 函数将使用传递给 `resolve` 的值调用。如果 `promise` 被 `rejected`，`onRejected` 函数将使用传递给 `reject` 的原因调用。

在以上的代码中，我们创建了一个 MyPromise 的新实例，并传递了一个在 1 秒后 resolve 的 executor 函数。然后调用了 promise 的 then 方法，并传递了一个将 resolved 值记录到控制台的函数。

# JavaScript 简介

`JavaScript` 是一种脚本语言，通常用于在 Web 浏览器中编写交互式前端代码。它也可以在服务器端运行，用于编写后端代码。

`JavaScript` 的语法类似于 C 语言，但它是一种解释性语言，不需要编译。`JavaScript` 可以与 HTML 和 CSS 一起使用，用于创建动态网页和 Web 应用程序。

以下是一个简单的 `JavaScript` 示例：

```js
// 输出Hello, World!
console.log('Hello, World!')
```

在上面的示例中，console.log 函数用于将文本输出到控制台。`JavaScript` 还有许多其他的内置函数和对象，可以用于处理字符串、数字、数组、日期等数据类型。

`JavaScript` 也支持面向对象编程，可以使用 class 关键字定义类和对象。以下是一个简单的类定义示例：

```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }
}

const person = new Person('Alice', 30)
person.sayHello() // 输出：Hello, my name is Alice and I am 30 years old.
```

`JavaScript` 还有许多其他的特性和用法，包括异步编程、模块化、函数式编程等。其中，异步编程是 `JavaScript` 中最重要的特性之一，可以使用 promise、async/await 等语法来处理异步操作。

# ECMAScript 的介绍

## ES6 入门教程
[阮一峰ECMAScript 6 入门](https://es6.ruanyifeng.com/)

## ECMAScript 简介

> ECMAScript（简称 ES）是一种由 ECMA 国际（European Computer Manufacturers Association）**制定和维护的脚本语言标准**。它是 JavaScript（JS）的基础，并且也被其他编程语言（如 ActionScript、JScript 等）所使用。

ECMAScript 定义了脚本语言的语法规范、类型、操作符、对象和一系列的内置函数等内容。JavaScript 作为 ECMAScript 的一种实现，是最广泛使用的一种。其他脚本语言可以基于 ECMAScript 标准进行实现，以保持互操作性和一致性。

## ECMAScript 与 JavaScript 的关系？

- ECMAScript 简称 ES。ES 是一个脚本语言。注意，是 ES 也是脚本语言。
- ES 通常可以看作是 JavaScript 的标准化规范。
- ES 只提供了最基本的语法。如：怎样定义变量和函数。
- JS 实现了 ES 的语言标准。JS 还在此基础上新增了一些拓展，使得我们可以在浏览器可以操作 DOM/BOM，在 Node 环境中可以读写文件等操作。
- 因为 JS 是在 ES 基础上的拓展，所有 JS 是 ES 的扩展语言。
- JS 在浏览器环境中的组成关系：ES + Web Apis (BOM + DOM 等)。
- JS 在 Node 环境中的组成关系：ES + Node Apis（fs + net 等）。

## ECMAScript 版本发布记录

以下是每个 ECMAScript 版本的主要内容概述：

1. ECMAScript 1 (ES1) - 1997:

   - 第一个 ECMAScript 版本，定义了基本的语法和数据类型，包括变量、操作符、函数和控制结构等。

2. ECMAScript 2 (ES2) - 1998:

   - 对 ES1 进行了一些修订，没有引入大的新功能。

3. ECMAScript 3 (ES3) - 1999:

   - 在 ES2 的基础上做了大量改进，包括正则表达式、异常处理、更严格的错误定义等。

4. ECMAScript 4 (ES4) - 未完成（被放弃）:

   - 在制定过程中遇到了较大的争议和复杂性，最终被放弃，相关特性后来分别在后续版本中被引入。

5. ECMAScript 5 (ES5) - 2009:

   - 添加了严格模式（strict mode），提供更安全的编程环境。
   - 新增了 JSON 对象，使得操作 JSON 数据更方便。
   - 引入了`Object.defineProperty`，允许更灵活地定义对象属性。
   - 提供了`Array`方法（如`forEach`、`map`、`reduce`等），方便数组处理。
   - 改进了`Function`对象，引入了`bind`方法。

6. ECMAScript 6 (ES6) / ECMAScript 2015 (ES2015) - 2015:

   - 引入了`let`和`const`关键字，提供块级作用域。
   - 支持箭头函数（`=>`），简化函数定义和`this`的处理。
   - 新增模板字符串，支持多行字符串和插入表达式。
   - 引入了解构赋值，可以方便地从数组或对象中提取值。
   - 提供了类和模块化的支持，更接近传统面向对象编程。
   - 添加了`Promise`对象，用于更好地处理异步操作。
   - 新增了`for...of`循环，用于遍历可迭代对象。
   - 引入`Symbol`类型，用于创建唯一的对象属性名。

7. ECMAScript 7 (ES7) / ECMAScript 2016 (ES2016) - 2016:

   - 引入了`Array.prototype.includes`方法，用于检查数组是否包含某个元素。
   - 引入指数运算符（`**`）。

8. ECMAScript 8 (ES8) / ECMAScript 2017 (ES2017) - 2017:

   - 引入了`Object.entries`和`Object.values`方法，用于遍历对象的键值对和值。
   - 添加了`String.prototype.padStart`和`String.prototype.padEnd`方法，用于字符串填充。
   - 引入`async/await`语法，更方便地处理异步操作。
   - 添加了`Object.getOwnPropertyDescriptors`方法，返回对象属性的描述符。

9. ECMAScript 9 (ES9) / ECMAScript 2018 (ES2018) - 2018:

   - 引入了`Promise.prototype.finally`方法，用于在 Promise 结束时执行回调。
   - 引入了`Rest/Spread`属性，提供了更便捷的对象和数组操作。

10. ECMAScript 10 (ES10) / ECMAScript 2019 (ES2019) - 2019:
    - 引入了`Array.prototype.flat`和`Array.prototype.flatMap`方法，用于数组的扁平化和映射。
    - 添加了`String.prototype.trimStart`和`String.prototype.trimEnd`方法，用于去除字符串两端的空白字符。
    - 引入`Object.fromEntries`方法，用于将键值对列表转换为对象。

从 ES6 开始，ECMAScript 标准每年都会发布一个新版本，每个版本都会引入一些新的特性和改进，以使 JavaScript 语言变得更加强大、现代和易用。

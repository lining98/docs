# JavaScript 作用域

作用域是指变量和函数在代码中可访问的范围。JavaScript 中有两种主要的作用域类型：全局作用域和局部作用域。

## 全局作用域

全局作用域是指在代码的任何地方都可访问的变量和函数。在全局作用域中声明的变量和函数可以被代码中的任何地方访问。

```javascript
var globalVariable = 'Global'

function globalFunction() {
  console.log(globalVariable) // 输出：Global
}

console.log(globalVariable) // 输出：Global
globalFunction()
```

在上述示例中，`globalVariable` 是一个全局变量，在任何地方都可以访问。`globalFunction` 是一个全局函数，也可以在任何地方调用。

## 局部作用域

局部作用域是指在特定代码块（如函数、循环或条件语句）内部声明的变量和函数。这些变量和函数只能在其声明的代码块内部访问。

```javascript
function outerFunction() {
  var outerVariable = 'Outer'

  function innerFunction() {
    var innerVariable = 'Inner'
    console.log(innerVariable) // 输出：Inner
    console.log(outerVariable) // 输出：Outer
  }

  innerFunction()
}

outerFunction()
```

在上述示例中，`outerVariable` 是 `outerFunction` 函数的局部变量，在该函数内部和其嵌套函数中可访问。`innerVariable` 是 `innerFunction` 函数的局部变量，在该函数内部可访问。

## 作用域链

作用域链是指 JavaScript 引擎在查找变量时的嵌套作用域链条。当访问一个变量时，JavaScript 引擎首先在当前作用域的变量对象中查找，如果找不到，就会向上一级作用域继续查找，直到找到该变量或达到全局作用域。

```javascript
var globalVariable = 'Global'

function outerFunction() {
  var outerVariable = 'Outer'

  function innerFunction() {
    console.log(innerVariable) // 输出：Inner
    console.log(outerVariable) // 输出：Outer
    console.log(globalVariable) // 输出：Global
  }

  innerFunction()
}

outerFunction()
console.log(globalVariable) // 输出：Global
```

在上述示例中，`innerFunction` 内部可以访问它的父级作用域中的变量 `innerVariable` 和 `outerVariable`。如果在 `innerFunction` 中找不到变量，引擎会向上查找并找到全局作用域中的 `globalVariable`。

## 词法作用域

JavaScript 中的作用域是通过代码的结构和位置来确定的，而不是通过运行时的状态。这被称为词法作用域。函数在定义时就确定了自己的作用域，而不是在调用时。

```javascript
var variable = 'Global'

function outerFunction() {
  var variable = 'Outer'

  function innerFunction() {
    console.log(variable) // 输出：Outer
  }

  innerFunction()
}

outerFunction()
```

在上述示例中，`innerFunction` 内部的 `console.log(variable)` 输出的是外部作用域的 `variable` 值，而不是全局作用域的值。这是因为 JavaScript 的词法作用域规则决定了函数在定义时就创建了自己的作用域。

::: tip
作用域是 JavaScript 中重要的概念之一，了解作用域的工作原理和规则对于正确编写和组织 JavaScript 代码至关重要。作用域确定了变量和函数的可见性和访问范围，可以帮助避免命名冲突和错误，并使代码更清晰和可维护。
:::

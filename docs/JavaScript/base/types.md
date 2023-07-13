# JavaScript 数据类型

## 一、基本类型

基本类型主要为以下 6 种：

- Number
- String
- Boolean
- Undefined
- null
- symbol

### Number

数值最常见的整数类型格式则为十进制，还可以设置八进制（零开头）、十六进制（0x 开头）

```js
let intNum = 55 // 10进制的55
let num1 = 070 // 8进制的56
let hexNum1 = 0xa //16进制的10
```

浮点类型则在数值汇总必须包含小数点，还可通过科学计数法表示

```js
let floatNum1 = 1.1
let floatNum2 = 0.1
let floatNum3 = 0.1 // 有效，但不推荐
let floatNum = 3.125e7 // 等于 31250000
```

在数值类型中，存在一个特殊数值`NaN`，意为“不是数值”，用于表示本来要返回数值的操作失败了（而不是抛出错误）

```js
console.log(0 / 0) // NaN
console.log(-0 / +0) // NaN
```

### Undefined

`Undefined` 类型只有一个值，就是特殊值 `undefined`。当使用 `var `或 `let `声明了变量但没有初始化时，就相当于给变量赋予了 `undefined `值

```js
let message
console.log(message == undefined) // true
```

包含` undefined` 值的变量跟未定义变量是有区别的

```js
let message // 这个变量被声明了，只是值为 undefined

console.log(message) // "undefined"
console.log(age) // 没有声明过这个变量，报错
```

### String

字符串可以使用双引号（"）、单引号（'）或反引号（`）标示

```js
let firstName = 'John'
let lastName = 'Jacob'
let lastName = `Jingleheimerschmidt`
```

字符串是不可变的，意思是一旦创建，它们的值就不能变了

```js
let lang = 'Java'
lang = lang + 'Script' // 先销毁再创建
```

### Null

`Null `类型同样只有一个值，即特殊值 `null`

逻辑上讲， null 值表示一个空对象指针，这也是给`typeof `传一个 `null` 会返回 `"object"` 的原因

```js
let car = null
console.log(typeof car) // "object"
```

`undefined` 值是由 `null `值派生而来

```js
console.log(null == undefined) // true
```

只要变量要保存对象，而当时又没有那个对象可保存，就可用 `null `来填充该变量

### Boolean

`Boolean `（布尔值）类型有两个字面值： `true` 和` false`

通过`Boolean`可以将其他类型的数据转化成布尔值

规则如下：

```js
数据类型      				转换为 true 的值      				转换为 false 的值
 String        				 非空字符串          					""
 Number 				非零数值（包括无穷值）						0 、 NaN
 Object 					 任意对象 							   null
Undefined 					N/A （不存在） 						undefined
```

### Symbol

Symbol （符号）是原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险

```js
let genericSymbol = Symbol()
let otherGenericSymbol = Symbol()
console.log(genericSymbol == otherGenericSymbol) // false

let fooSymbol = Symbol('foo')
let otherFooSymbol = Symbol('foo')
console.log(fooSymbol == otherFooSymbol) // false
```

## 二、引用类型

复杂类型统称为`Object`，我们这里主要讲述下面三种：

- Object
- Array
- Function

### Object

创建`object`常用方式为对象字面量表示法，属性名可以是字符串或数值

```js
let person = {
  name: 'Nicholas',
  age: 29,
  5: true
}
```

### Array

`JavaScript`数组是一组有序的数据，但跟其他语言不同的是，数组中每个槽位可以存储任意类型的数据。并且，数组也是动态大小的，会随着数据添加而自动增长

```js
let colors = ['red', 2, { age: 20 }]
colors.push(2)
```

### Function

函数实际上是对象，每个函数都是 `Function`类型的实例，而 `Function `也有属性和方法，跟其他引用类型一样

函数存在三种常见的表达方式：

- 函数声明

```js
// 函数声明
function sum(num1, num2) {
  return num1 + num2
}
```

- 函数表达式

```js
let sum = function (num1, num2) {
  return num1 + num2
}
```

- 箭头函数

函数声明和函数表达式两种方式

```js
let sum = (num1, num2) => {
  return num1 + num2
}
```

### 其他引用类型

除了上述说的三种之外，还包括`Date`、`RegExp`、`Map`、`Set`等......

## 三、类型转换

类型转换指将一种数据类型转换为其他类型

### 转换为字符串

```js
// 1. 把数字转换为字符串型 变量.toString()
var num = 10
var str = num.toString()
console.log(typeof str, str) // string '10'

// 2. 利用String(变量)
console.log(String(num)) // '10'

// 3. 利用 + 拼接字符串的方法实现转换效果 隐式转换
console.log(num + '')
```

### 转换为数字型

> 将其他的数据类型转换为数值

使用 Number()函数来将其他类型转换为数值
转换的情况：

- 字符串：
  - 如果字符串是一个合法的数字，则会自动转换为对应的数字
  - 如果字符串不是合法数字，则转换为 NaN
  - 如果字符串是空串或纯空格的字符串，则转换为 0
- 布尔值： - true 转换为 1，false 转换为 0
- null 转换为 0
- undefined 转换为 NaN

```js
let a = '123' // 123
a = 'abc' // NaN
a = '3.1415926' // 3.1415926
a = '11px' // NaN
a = '' // 0
a = '    ' // 0

a = true // 1
a = false // 0

a = null // 0
a = undefined // NaN

// console.log(typeof a, a)

a = Number(a)
// console.log(typeof a, a)
```

专门用来将字符串转换为数值的两个方法

- parseInt() —— 将一个字符串转换为一个整数
  - 解析时，会自左向右读取一个字符串，直到读取到字符串中所有的有效的整数
  - 也可以使用 parseInt()来对一个数字进行取整
- parseFloat() —— 将一个字符串转换为浮点数 - 解析时，会自左向右读取一个字符串，直到读取到字符串中所有的有效的小数

```js
let b = '123px'
b = 'a123'
b = '123.45'
// b = 456.123
console.log(typeof b, b)

b = parseInt(b)
console.log(typeof b, b)
```

### 转换为布尔型

使用 Boolean()函数来将其他类型转换为布尔值

- 转换的情况：

  数字：

  - 0 和 NaN 转换为 false
  - 其余是 true

  字符串：
  - 空串 转换为 false
  - 其余是 true

  null 和 undefined 都转换为 false

  对象：对象会转换为 true

- 所有表示空性的没有的错误的值都会转换为 false：
  0、NaN、空串、null、undefined、false

```js
// 只用这5种情况，其他都为true
console.log(Boolean('')) // false
console.log(Boolean(0)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
```

## 四、存储区别

基本数据类型和引用数据类型存储在内存中的位置不同：

- 基本数据类型存储在栈中

- 引用类型的对象存储于堆中

当我们把变量赋值给一个变量时，解析器首先要确认的就是这个值是基本类型值还是引用类型值

下面来举个例子

### 基本类型

```js
let a = 10
let b = a // 赋值操作
b = 20
console.log(a) // 10值
```

`a`的值为一个基本类型，是存储在栈中，将`a`的值赋给`b`，虽然两个变量的值相等，但是两个变量保存了两个不同的内存地址

### 引用类型

```js
var obj1 = {}
var obj2 = obj1
obj2.name = 'zs'
console.log(obj1.name) // zs
```

引用类型数据存放在堆中，每个堆内存对象都有对应的引用地址指向它，引用地址存放在栈中。

`obj1`是一个引用类型，在赋值操作过程汇总，实际是将堆内存对象在栈内存的引用地址复制了一份给了`obj2`，实际上他们共同指向了同一个堆内存对象，所以更改`obj2`会对`obj1`产生影响

### 小结

- 声明变量时不同的内存地址分配：
  - 简单类型的值存放在栈中，在栈中存放的是对应的值
  - 引用类型对应的值存储在堆中，在栈中存放的是指向堆内存的地址
- 不同的类型数据导致赋值变量时的不同：
  - 简单类型赋值，是生成相同的值，两个对象对应不同的地址
  - 复杂类型赋值，是将保存对象的内存地址赋值给另一个变量。也就是两个变量指向堆内存中同一个对象

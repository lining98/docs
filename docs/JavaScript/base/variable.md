# JavaScript 变量

## var 关键字

```js
var msg // 默认 undefined
```

声明后可以改变类型，但不推荐

```js
var msg = 'hi'
msg = 100 // 合法，但不推荐
```

var 声明作用域，一个函数内部定义一个变量，在函数退出时被销毁

```js
function test() {
  var msg = 'hi' // 局部变量
}
test()
console.log(msg) // 出错！
```

在函数内定义变量时省略 var 操作符，可以创建一个全局变量：

```js{2}
function test() {
	msg = "hi"; // 全局变量
	// 在严格模式下，如果像这样给未声明的变量赋值，则会导致抛出ReferenceError。
}
test();
console.log(msg); // "hi"
```

定义多个变量

```js
var msg = 'hi',
  found = false,
  age = 29
//在严格模式下，不能定义名为eval 和arguments 的变量，否则会导致语法错误。
```

var 声明提升

```js
function foo() {
  console.log(age)
  var age = 18
}
foo() // undefined
```

关键字声明的变量会自动提升到函数作用域顶部，相当于：

```js
function foo() {
  var age
  console.log(age)
  age = 18
}
foo() // undefined
```

反复多次使用 var 声明同一个变量也没有问题

```js
function foo() {
  var age = 10
  var age = 18
  var age = 30
  console.log(age)
}
foo() // 30
```

## let 声明

let 声明的范围是块作用域：

```js
if (true) {
  var name = 'zhangsan'
  console.log(name) // zhangsan
}
console.log(name) // zhangsan

if (true) {
  let age = 18
  console.log(age) // 18
}
console.log(age) // ReferenceError: age 没有定义
```

不能重复声明

```js
let age
let age // SyntaxError；标识符age 已经声明过了
```

块作用域没有重复声明则使用相同标识符则不会报错

```js
var name = 'lisi'
console.log(name) // 'lisi'
if (true) {
  var name = 'zhangsan'
  console.log(name) // 'zhangsan'
}
let age = 30
console.log(age) // 30
if (true) {
  let age = 18
  console.log(age) // 18
}
```

两个关键字不能重复声明

```js
var name
let name // SyntaxError
let age
var age // SyntaxError
```

### 暂时性死区

```js
// name 会被提升
console.log(name) // undefined
var name = 'zhangsan'
// age 不会被提升
console.log(age) // ReferenceError：age 没有定义
let age = 18
```

### 全局声明

let 在全局作用域中声明的变量不会成为 window 对象的属性（var 声明的变量则会）

```js
var name = 'zhangsan'
console.log(window.name) // 'zhangsan'
let age = 18
console.log(window.age) // undefined
```

:::tip 注意

不过 let 声明还是在全局作用域中发生的，变量会在整个页面生命周期内续存。所以不要重复声明同一个变量，避免 SyntaxError

:::

### 条件声明

```html
<script>
  var a = 1
  let b = 2
</script>
<script>
  console.log(a) // 1
  console.log(b) // 2
</script>
```

JavaScript 引擎会自动将多余的声明在作用域顶部合并为一个声明。但是 let 是块级作用域，所以检查不到之前是否声明过。

```html
<script>
  var name = 'lisi'
  let age = 18
</script>
<script>
  // 假设脚本不确定页面中是否已经声明了同名变量
  // 那它可以假设还没有声明过
  var name = 'zhangsan'
  // 这里没问题，因为可以被作为一个提升声明来处理
  // 不需要检查之前是否声明过同名变量

  let age = 30 // age 之前声明过，这里会报错
</script>
```

try/catch 语句或 typeof 操作符也不能解决

```html
<script>
  let name = 'lisi'
  let age = 30
</script>
<script>
  if (typeof name === 'undefined') {
    let name // name 被限制在if {} 块的作用域内
  }
  name = 'zhangsan' // 因此这个赋值形同全局赋值
  try {
    console.log(age) // 如果age 没有声明过，则会报错
  } catch (error) {
    let age // age 被限制在catch {}块的作用域内
  }
  age = 18 // 这个赋值形同全局赋值
</script>
```

### for 循环中的 let 声明

使用 var 时变量会渗透到外面

```js
for (var i = 0; i < 5; ++i) {
  // 循环逻辑
}
console.log(i) // 5
```

let 之后则不会，因为遇到 {} 就会形成作用域块

```js
for (let i = 0; i < 5; ++i) {
  // 循环逻辑
}
console.log(i) // ReferenceError: i 没有定义
```

常见的异步循环问题

```js
for (var i = 0; i < 5; ++i) {
  setTimeout(() => console.log(i), 0)
}
// 你可能以为会输出0、1、2、3、4
// 实际上会输出5、5、5、5、5
```

在延迟定时器执行时，他是异步的，循环已经结束了，最后的值始终都是 5。

使用 let 才是期望的值

```js
for (let i = 0; i < 5; ++i) {
  setTimeout(() => console.log(i), 0)
}
// 会输出0、1、2、3、4
```

每次迭代循环声明一个新的迭代变量，每个 setTimeout 引用的都是不同的变量实例。这种风格也适用于 for in、for of。

## const 声明

`const` 的行为与 `let` 基本相同，但是他是常量，声明之后不能修改，尝试修改 `const` 声明的变量会导致运行时错误。

```js
const age = 18
age = 30 // TypeError: 给常量赋值

// const 也不允许重复声明
const name = 'zhangsan'
const name = 'lisi' // SyntaxError

// const 声明的作用域也是块
const name = 'zhangsan'
if (true) {
  const name = 'lisi'
}
console.log(name) // zhangsan
```

## 函数声明提升与 var 声明提升

```js
var a = 'Tom'
function a() {}

console.log(a) // 'Tom'
```

`function`与`var`都存在变量提升，但`function`比`var`优先级高。上面的代码就相当于：

```js
function a() {}
var a
a = 'Tom'

console.log(a) // 'Tom'
```

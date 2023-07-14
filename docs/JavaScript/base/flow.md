# JavaScript 流程控制

## if 语句

流程控制语句可以用来改变程序执行的顺序

1. 条件判断语句
2. 条件分支语句
3. 循环语句

```js
if (i > 1) {
  alert('yes')
} else {
  alert('no')
}

// 可以省略{}
if (false) alert('哈哈哈')
```

::: tip if 语句 执行流程

if 语句在执行会先对 if 后的条件表达式进行求值判断，

      如果结果为true，则执行if后的语句
      如果为false则不执行

if 语句只会控制紧随其后其后的那一行代码，如果希望可以控制多行代码，可以使用{}将语句扩起来

      最佳实践：即使if后只有1行代码，我们也应该编写代码块，这样结构会更加的清晰

如果 if 后的添加表达式不是布尔值，会转换为布尔值然后再运算

:::

## if-else

if-else 语句：

- 语法：

```js
if(条件表达式){
  语句...
}else if(条件表达式1){
  语句...
}else if(条件表达式2){
  语句...
}else{
  语句...
}
```

::: tip if-else 语句 执行流程
if-else 语句，会自上向下依次对 if 后的条件表达式进行求值判断:

    如果条件表达式结果为 true，则执行当前 if 后的语句，执行完毕语句结束
    如果条件表达式结果为 false，则继续向下判断，直到找到 true 为止
    如果所有的条件表达式都是 false，则执行 else 后的语句

:::

```js
//从键盘输入小明的期末成绩
let score = +prompt('请输入小明的期末成绩：')

// 检查score是否合法
if (isNaN(score) || score < 0 || score > 100) {
  alert('请输入一个合法的分数')
} else {
  // 当成绩为100时，'奖励一辆BMW'
  if (score === 100) {
    alert('汽车一辆~')
  } else if (score >= 80) {
    // 当成绩为[80-99]时，'奖励一台iphone'
    alert('手机一台~')
  } else if (score >= 60) {
    // 当成绩为[60-79]时，'奖励一本参考书'
    alert('参考书一本~')
  } else {
    // 其他时，什么奖励也没有
    alert('啥也没有~')
  }
}
```

::: tip 注意：
if-else 语句中只会有一个代码块被执行，

    一旦有执行的代码块，下边的条件都不会在继续判断了
    所以一定要注意，条件的编写顺序

:::

## switch 语句

switch 语句 - 语法：

```js

switch(表达式){
    case 表达式1:
        代码...
        break
    case 表达式2:
        代码...
        break
    case 表达式3:
        代码...
        break
    default:
        代码...
        break
}
```

::: tip switch 执行的流程
switch 语句在执行时，会依次将 switch 后的表达式和 case 后的表达式进行全等比较

    如果比较结果为 true，则自当前 case 处开始执行代码
    如果比较结果为 false，则继续比较其他 case 后的表达式，直到找到 true 为止
    如果所有的比较都是 false，则执行 default 后的语句

:::

## 循环语句

- 通过循环语句可以使指定的代码反复执行
- JS 中一共有三种循环语句

  - while 语句
  - do-while 语句
  - for 语句 - while 语句 - 语法：

### while

```js
// while(条件表达式){
//     语句...
// }
var i = 0
while (i < 10) {
  i += 2
}
```

::: tip while 执行流程：
while 语句在执行时，会先对条件表达式进行判断:

    如果结果为 true，则执行循环体，执行完毕，继续判断
    如果为 true，则再次执行循环体，执行完毕，继续判断，如此重复
    知道条件表达式结果为 false 时，循环结束

:::

### do-while

```js
let i = 10
do {
  console.log(i)
  i++
} while (i < 5)
```

::: tip `do-while` 执行顺序

do-while 语句在执行时，会先执行 do 后的循环体

    执行完毕后，会对while后的条件表达式进行判断
    如果为false，则循环终止
    如果为true，则继续执行循环体，以此类推

和 while 的区别：

    while语句是先判断再执行
    do-while语句是先执行再判断

实质的区别：

    do-while语句可以确保循环至少执行一次

:::

### for

#### `for` 循环

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

#### `for in` 循环

- 用于遍历对象的可枚举属性。
- 语法：

```js
for (变量 in 对象) {
  // 需要执行的代码
}
```

示例：

```js
const obj = { a: 1, b: 2, c: 3 }
for (let prop in obj) {
  console.log(prop) // 输出 'a'、'b'、'c'
  console.log(obj[prop]) // 输出 1、2、3
}
```

::: tip 注意：
不应该用它来遍历数组，因为它还会遍历从对象原型继承的可枚举属性。
:::

#### ` for of` 循环

- 用于遍历可迭代的集合，如数组、字符串、映射（Map）、集合（Set）等。

- 语法：

```js
for (变量 of 可迭代对象) {
  // 需要执行的代码
}
```

- 示例：

```js
const arr = [1, 2, 3]
for (let element of arr) {
  console.log(element) // 输出 1、2、3
}
```

::: tip 注意：
它不能直接用于遍历普通的对象。要遍历对象属性，需要使用 “Object.entries()” 或 “Object.keys()” 将对象转换为可迭代对象后再使用。
:::

::: tip 总结：
`for…in` 用于遍历对象属性，而 `for…of` 用于遍历可迭代集合，如数组。
:::

## break 和 continue

- break

  - break 用来终止 switch 和循环语句
  - break 执行后，当前的 switch 或循环会立刻停止
  - break 会终止离他最近的循环

```js
for (let i = 0; i < 5; i++) {
  console.log(i)

  for (let j = 0; j < 5; j++) {
    if (j === 1) break
    console.log('内层循环--->', j)
  }
}

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break
  }
  console.log(i)
}
```

- continue
  - continue 用来跳过当次循环

```js
for (let i = 0; i < 5; i++) {
  console.log(i)

  for (let j = 0; j < 5; j++) {
    if (j === 1) continue
    console.log('内层循环--->', j)
  }
}

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue
  }
  console.log(i)
}
```

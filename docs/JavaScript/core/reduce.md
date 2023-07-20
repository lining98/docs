# 详解数组中的 reduce 方法

`reduce()`是 JavaScript 数组的一个高阶函数，它用于对数组中的元素进行累积操作，将数组缩减为单个值。

通过`reduce()`方法，我们可以对数组中的每个元素进行自定义的累积运算，最终得到一个累积结果。

## 语法如下

```js
array.reduce(callbackfn, initialValue)
```

- callbackfn 是回调函数，它接受四个参数：前一个值（prev）、当前值（currentValue）、当前索引（index）和数组本身（array）
- initialValue 是初始值，可选参数。

## 示例

### （1）计算数组累积结果

- 演示如何使用`reduce()`方法来计算数组中所有元素的和：

```js{5}
const numbers = [1, 2, 3, 4]

const sum = numbers.reduce((prev, cur) => {
  return prev + cur
}, 0)

console.log(sum) // 输出结果为 10
```

> 打印结果
>
> 1 2 1
>
> 3 3 2
>
> 6 4 3
>
> [ 1, 2, 3, 4 ] 10

- 设置初始值

```js{5}
const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((prev, cur) => {
  return prev + cur
}, 5)

console.log(sum) // 输出结果为 15
```

> 打印结果
>
> 5 1 0
>
> 6 2 1
>
> 8 3 2
>
> 11 4 3
>
> [ 1, 2, 3, 4 ] 15

在上面的示例中，`reduce()`方法从数组的第一个元素开始累加，`prev`初始值为 0（提供了`initialValue`），然后依次将每个元素与`prev`相加，得到最终的累积结果 15。

### （2）计算数组中每个元素出现的次数

```js
var arr = ['one', 'two', 'two', 'three', 'two', 'six', 'four', 'five', 'four', 'six']

var newArr = arr.reduce((pre, cur) => {
  console.log(cur, pre)
  if (cur in pre) {
    pre[cur]++
  } else {
    pre[cur] = 1
  }
  return pre
}, {}) //这里注意初始值要默认赋予空对象，不然会报错
console.log(newArr)
```

> 打印结果
>
> `one {}`
>
> `two {one: 1}`
>
> `two {one: 1, two: 1}`
>
> `three {one: 1, two: 2}`
>
> `two {one: 1, two: 2, three: 1}`
>
> `six {one: 1, two: 3, three: 1}`
>
> `four {one: 1, two: 3, three: 1, six: 1}`
>
> `five {one: 1, two: 3, three: 1, six: 1, four: 1}`
>
> `four {one: 1, two: 3, three: 1, six: 1, four: 1, five: 1}`
>
> `six {one: 1, two: 3, three: 1, six: 2, four: 2, five: 1}`
>
> `{one: 1, two: 3, three: 1, six: 2, four: 2, five:1}`

### （3）数组去重

```js
let arr = [1, 2, 3, 4, 4, 1]
let newArr = arr.reduce((pre, cur) => {
  if (!pre.includes(cur)) {
    return pre.concat(cur)
  } else {
    return pre
  }
}, [])
console.log(newArr) // [1, 2, 3, 4]
```

### （4）数组扁平化 二维转一维

```js
let arr = [
  [0, 1],
  [2, 3],
  [4, 5]
]
let newArr = arr.reduce((pre, cur) => {
  return pre.concat(cur)
}, [])
console.log(newArr) // [0, 1, 2, 3, 4, 5]
```

### （5）数组扁平化 多维转一维

```js
let arr = [
  [0, 1],
  [2, 3],
  [4, [5, 6, 7]]
]
const newArr = function (arr) {
  return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? newArr(cur) : cur), [])
}
console.log(newArr(arr)) // [0, 1, 2, 3, 4, 5, 6, 7]
```

### （6）对象属性求和

```js
var result = [
  {
    subject: 'math',
    score: 10
  },
  {
    subject: 'chinese',
    score: 20
  },
  {
    subject: 'english',
    score: 30
  }
]

var sum = result.reduce(function (prev, cur) {
  return cur.score + prev
}, 0)
console.log(sum) // 60
```

## 注意事项

::: tip 注意

1. `reduce()`方法适用于对数组的每个元素执行同一个累积操作，并将结果返回为单个值的情况。

2. 在使用`reduce()`方法时，建议始终提供`initialValue`来明确指定累加器的初始值，以避免空数组或其他边界情况可能导致的错误。

3. `reduce()`方法不会修改原始数组，它始终返回一个新的累积结果。如果需要对原始数组进行修改，请使用其他数组方法，如`map()`、`filter()`、`forEach()`等。

4. `reduce()`方法在处理大量数据时可能不太高效，因为它是顺序执行的，每个元素依赖前一个元素的累积结果。

5. 在使用`reduce()`方法时，务必确保回调函数的正确性和无副作用，以免产生意外的结果。

`reduce()`方法是一个非常强大和灵活的数组方法，通过合理使用它，可以简化对数组的复杂计算和操作。

:::

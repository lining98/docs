# 常见的数组方法

以下是一些常用的数组方法：
push：向数组末尾添加一个或多个元素，并返回新的长度。

```js
const arr = [1, 2, 3]
const len = arr.push(4, 5)
console.log(arr) // [1, 2, 3, 4, 5]
console.log(len) // 5
```

pop：从数组末尾删除一个元素，并返回该元素的值。

```js
const arr = [1, 2, 3]
const val = arr.pop()
console.log(arr) // [1, 2]
console.log(val) // 3
```

shift：从数组开头删除一个元素，并返回该元素的值。

```js
const arr = [1, 2, 3]
const val = arr.shift()
console.log(arr) // [2, 3]
console.log(val) // 1
```

unshift：向数组开头添加一个或多个元素，并返回新的长度。

```js
const arr = [1, 2, 3]
const len = arr.unshift(0, -1)
console.log(arr) // [0, -1, 1, 2, 3]
console.log(len) // 5
```

slice：返回数组的一个子数组，不会修改原数组。

```js
const arr = [1, 2, 3, 4, 5]
const subArr = arr.slice(1, 4)
console.log(subArr) // [2, 3, 4]
console.log(arr) // [1, 2, 3, 4, 5]
```

splice：从数组中删除、替换或插入元素，并返回被删除的元素。

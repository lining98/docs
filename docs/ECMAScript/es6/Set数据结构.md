# Set 数据结构

## 简述

`Set`对象是值的集合，你可以按照插入的顺序迭代它的元素。Set 中的元素只会**出现一次**，即 `Set` 中的元素是唯一的。

## 实例的方法与属性

### add(value) 方法

在 Set 对象尾部添加一个元素。返回该 Set 对象。

```js
const s = new Set()
s.add(0)
// 可以连写
s.add(1).add(2).add(2).add(3)
console.log(s) // Set(4) { 0, 1, 2, 3 }
```

### clear() 方法

移除 Set 对象内的所有元素。

```js
const s = new Set()
s.add(0)
s.add(1).add(2).add(2).add(3)
s.clear()
console.log(s) // Set(0) {}
```

### delete(value) 方法

移除值为 value 的元素，并返回一个布尔值来表示是否移除成功。Set.prototype.has(value) 会在此之后返回 false。

```js
const s = new Set()
s.add(0)
s.add(1).add(2).add(2).add(3)
s.delete(2)
// 使用 delete 删除不存在的成员，什么都不会发生，也不会报错
s.delete(4)
console.log(s) // Set(3) { 0, 1, 3 }
```

### entries() 方法

返回一个新的迭代器对象，该对象包含 Set 对象中的按插入顺序排列的所有元素的值的 [value, value] 数组。为了使这个方法和 Map 对象保持相似，每个值的键和值相等。

```js
const set1 = new Set()
set1.add(30)
set1.add('thirty')

const iterator1 = set1.entries()

for (const entry of iterator1) {
  console.log(entry)
  // 输出: Array [30, 30]
  // 输出: Array ["thirty", "thirty"]
}
```

### has(value) 方法

返回一个布尔值，表示该值在 Set 中存在与否。

```js
const s = new Set()
s.add(0)
s.add(1).add(2).add(2).add(3)
console.log(s.has(1)) // true
console.log(s.has(4)) // false
```

### values() 方法

返回一个新的迭代器对象，该对象包含 Set 对象中的按插入顺序排列的所有元素的值。

```js
const set1 = new Set()
set1.add(42)
set1.add('forty two')

const iterator1 = set1.values()

console.log(iterator1.next().value) // 42

console.log(iterator1.next().value) // "forty two"
```

### keys() 方法

与 values() 方法相同，返回一个新的迭代器对象，该对象包含 Set 对象中的按插入顺序排列的所有元素的值。

### size 属性

返回 Set 对象中的值的个数

```js
const s = new Set()
s.add(0)
s.add(1).add(2).add(2).add(3)

console.log(s.size) // 4
```

## 使用 Set 实现的一些方法

### 转换

```js
// Array 转 Set
var mySet = new Set(['value1', 'value2', 'value3']) // {"value1", "value2", "value3"}

// 用...操作符，将 Set 转 Array
var myArray = [...mySet] // ["value1", "value2", "value3"]

// String
// String 转 Set
var mySet = new Set('hello') // Set(4) {"h", "e", "l", "o"}
// 注：Set 中 toString 方法是不能将 Set 转换成 String
```

### 去重

```js
var mySet = new Set([1, 2, 2, 1, 3, 4, 4])
;[...mySet] // [1, 2, 3, 4]
```

### 并集

```js
var a = new Set([1, 2, 3])
var b = new Set([4, 3, 2])
var union = new Set([...a, ...b]) // {1, 2, 3, 4}
/* 解构传入，唯一值，相当于去重 */
```

### 交集

```js
var a = new Set([1, 2, 3])
var b = new Set([4, 3, 2])

var intersect = new Set([...a].filter((x) => b.has(x))) // {2, 3}
```

使用 has() 方法判断当前 set 对象 中是否含有 x，返回 true/false。
`[...a]` 解构成数组。filter 过滤

传入 x，返回 set 对象 b 中是否存在 x

存在返回 true，不存在返回 false 被过滤掉

### 差集

```js
var a = new Set([1, 2, 3])
var b = new Set([4, 3, 2])
var difference = new Set([...a].filter((x) => !b.has(x))) // {1}
```

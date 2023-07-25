# Map 数据结构

## 简述

Map 是 ES6 中一种强大的数据结构，它是一种用于存储键值对的集合。

## 方法

在 ES6 中，Map 数据结构提供了以下常用的方法：

1. `set(key, value)`: 向 Map 中添加键值对，如果键已存在，则更新对应的值。
2. `get(key)`: 获取指定键对应的值，如果键不存在则返回`undefined`。
3. `has(key)`: 判断 Map 中是否包含指定的键，返回布尔值。
4. `delete(key)`: 从 Map 中删除指定键及其对应的值，返回一个布尔值，表示是否删除成功。
5. `clear()`: 清空 Map 中的所有键值对。
6. `size`: 属性，用于获取 Map 中键值对的数量。
7. `keys()`: 返回一个包含 Map 中所有键的迭代器。
8. `values()`: 返回一个包含 Map 中所有值的迭代器。
9. `entries()`: 返回一个包含 Map 中所有键值对的迭代器。
10. `forEach(callbackFn[, thisArg])`: 遍历 Map 中的所有键值对，对每个键值对执行回调函数。

```js
const myMap = new Map()

// 添加键值对
myMap.set('name', 'John')
myMap.set('age', 30)

// 获取值
console.log(myMap.get('name')) // "John"

// 判断键是否存在
console.log(myMap.has('age')) // true
console.log(myMap.has('city')) // false

// 删除键值对
myMap.delete('age')
console.log(myMap.has('age')) // false

// 清空Map
myMap.clear()
console.log(myMap.size) // 0

// 初始化Map
const initialMap = new Map([
  ['key1', 'value1'],
  ['key2', 'value2']
])

// 遍历Map
initialMap.forEach((value, key) => {
  console.log(key, value)
})

// 使用迭代器遍历Map的键
const keysIterator = initialMap.keys()
for (const key of keysIterator) {
  console.log(key)
}

// 使用迭代器遍历Map的值
const valuesIterator = initialMap.values()
for (const value of valuesIterator) {
  console.log(value)
}

// 使用迭代器遍历Map的键值对
const entriesIterator = initialMap.entries()
for (const [key, value] of entriesIterator) {
  console.log(key, value)
}
```

## 对象操作

### 转换

```js
var kvArray = [
  ['key1', 'value1'],
  ['key2', 'value2']
]
// 可以将 二维 键值对数组转换 Map 对象

var myMap = new Map(kvArray) // {"key1" => "value1", "key2" => "value2"}
// Array.from 函数将 Map 对象转回去

var outArray = Array.from(myMap) // [["key1", "value1"], ["key2", "value2"]]
```

### 克隆

```js
var myMap1 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2']
])
var myMap2 = new Map(myMap1)
/* {"key1" => "value1", "key2" => "value2"} */

console.log(myMap1 === myMap2) // false 新地址
```

### 合并

```js
var first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
])
var second = new Map([
  [1, 'uno'],
  [2, 'dos']
])
// 合并两个 Map 对象时，有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three

var merged = new Map([...first, ...second]) // 解构传参
console.log(merged) // {1 => "uno", 2 => "dos", 3 => "three"}
```

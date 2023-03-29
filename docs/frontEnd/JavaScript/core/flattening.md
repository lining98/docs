# 数组扁平化

> 数组扁平化是指将一个多维数组变为一个一维数组

```js
const arr = [1, [2, [3, [4, 5]]], 6]
// => [1, 2, 3, 4, 5, 6]
```

## 1. 使用 flat()

```js
const res1 = arr.flat()
// 使用Infinity，无论多少层都将扁平化为一维数组。
const res1 = arr.flat(Infinity)
```

## 2. 利用正则

```js
const res2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',')

// 优化
const res3 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']')
```

## 3. 使用 reduce

```js
const flatten = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}
const res4 = flatten(arr)
```

## 4. 函数递归

```js
const res5 = []
const fn = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      fn(arr[i])
    } else {
      res5.push(arr[i])
    }
  }
}
fn(arr)
```

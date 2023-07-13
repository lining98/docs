# 数组去重

```js
const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]
```

## 1. 使用 set

```js
const newArr = Array.from(new Set(arr))
```

## 2. for 循环

```js
const unique = (arr) => {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        // 每删除一个树，j--保证j的值经过自加后不变。同时，len--，减少循环次数提升性能
        len--
        j--
      }
    }
  }
  return arr
}
```

## 3. 使用 indexOf

```js
const unique = (arr) => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) res.push(arr[i])
  }
  return res
}
```

## 4. 使用 include

```js
const unique = (arr) => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) res.push(arr[i])
  }
  return res
}
```

## 5. 使用 filter

```js
const unique = (arr) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}
```

## 6. 使用 Map

```js
const unique = (arr) => {
  const map = new Map()
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true)
      res.push(arr[i])
    }
  }
  return res
}
```

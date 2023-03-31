# 深拷贝



```js
function deepCopy(obj) {
  // 如果不是对象或者为null，直接返回
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let copy;

  // 如果是数组，遍历每个元素进行深拷贝
  if (Array.isArray(obj)) {
    copy = [];

    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i]);
    }
  } else {
    // 如果是对象，遍历每个属性进行深拷贝
    copy = {};

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
  }

  return copy;
}

// 使用示例
const original = { a: 1, b: { c: 2 } };
const copy = deepCopy(original); // 创建原始对象的深拷贝

// 现在复制和原始对象是完全独立的，对一个的更改不会影响另一个：
copy.b.c = 3;
console.log(original.b.c); // 输出2，因为原始对象没有被修改。
```
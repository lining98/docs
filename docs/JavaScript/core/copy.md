# JavaScript 深浅拷贝

## 浅拷贝

浅拷贝是创建一个新对象，新对象的属性值是原始对象属性值的引用。也就是说，新对象和原始对象共享相同的引用类型属性，对其中一个对象的修改会影响到另一个对象。

在 JavaScript 中，可以使用一些简单的方法来实现浅拷贝，例如：

- **使用 `Object.assign()` 方法：**

```js
const shallowCopy = Object.assign({}, originalObject)
```

- **使用扩展运算符：**

```js
const shallowCopy = { ...originalObject }
```

这些方法都会创建一个新对象 `shallowCopy` ，并将原始对象 `originalObject` 的属性复制到新对象中。但是，如果原始对象的属性是引用类型（如对象或数组），新对象和原始对象的该属性仍然引用同一个对象。

## 深拷贝

深拷贝是创建一个新对象，新对象的属性值与原始对象的属性值完全独立，二者互不影响。

在 JavaScript 中，由于对象的属性可能是引用类型，所以需要递归复制对象的所有属性，包括嵌套的对象和数组。以下是一些常用的实现深拷贝的方法：

- **使用 JSON.parse() 和 JSON.stringify() 方法：**

```js
const deepCopy = JSON.parse(JSON.stringify(obj))
```

::: tip
此方法将原始对象转换为 JSON 字符串，然后再将 JSON 字符串解析为一个新的对象，从而实现深拷贝。但是，需要注意的是，此方法对于无法序列化的属性（如函数、正则表达式、循环引用等）会丢失或报错。
:::

- **使用递归函数：**

```js
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  const newObj = Array.isArray(obj) ? [] : {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }

  return newObj
}

const deepCopy = deepClone(originalObject)
```

::: tip
此方法使用递归函数 deepClone 来复制对象的所有属性，包括嵌套的对象和数组。递归函数首先检查属性是否是基本类型或 null，如果是，则直接返回该属性。如果是引用类型，则创建一个新的对象或数组，并递归复制嵌套的属性。

需要注意的是，深拷贝可能会涉及到循环引用的问题，即对象内部存在相互引用的属性。在实现深拷贝时，需要处理循环引用的情况，以避免无限递归和栈溢出。
:::

综上所述，浅拷贝和深拷贝是 JavaScript 中常用的对象复制技术。**浅拷贝只复制对象的引用**，而**深拷贝创建一个独立的副本**。

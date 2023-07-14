# 内置对象 Number 和 Math

## Number

### 数字方法

| **方法**             | **描述**                                                 |
| -------------------- | -------------------------------------------------------- |
| Number.parseFloat()  | 将字符串转换成浮点数，和全局方法 parseFloat() 作用一致。 |
| Number.parseInt()    | 将字符串转换成整型数字，和全局方法 parseInt() 作用一致。 |
| Number.isFinite      | 判断传递的参数是否为有限数字。                           |
| Number.isInteger     | 判断传递的参数是否为整数。                               |
| Number.isNaN         | 判断传递的参数是否为 isNaN()。                           |
| Number.isSafeInteger | 判断传递的参数是否为安全整数。                           |

- toFixed()
  返回指定小数位数的表示形式。

```js
a = 2
a.toFixed(2) // '2.00'

a = 1.975
a.toFixed(2) // '1.98'
```

## Math

`Math` 是 JavaScript 中内置的对象，称为数学对象，这个对象下即包含了属性，也包含了许多的方法。

### 属性

- Math.PI，获取圆周率

```javascript
// 圆周率
console.log(Math.PI)
```

### 方法

- Math.random，生成 0 到 1 间的随机数

```javascript
// 0 ~ 1 之间的随机数, 包含 0 不包含 1
Math.random()
```

- Math.ceil，数字向上取整

```javascript
// 舍弃小数部分，整数部分加1
Math.ceil(3.4)
```

- Math.floor，数字向下取整

```javascript
// 舍弃小数部分，整数部分不变
Math.floor(4.68)
```

- Math.round，四舍五入取整

```javascript
// 取整，四舍五入原则
Math.round(5.46539)
Math.round(4.849)
```

- Math.max，在一组数中找出最大的

```javascript
// 找出最大值
Math.max(10, 21, 7, 24, 13)
```

- Math.min，在一组数中找出最小的

```javascript
// 找出最小值
Math.min(24, 18, 6, 19, 21)
```

- Math.pow，幂方法

```javascript
// 求某个数的多少次方
Math.pow(4, 2) // 求 4 的 2 次方
Math.pow(2, 3) // 求 2 的 3 次方
```

- Math.sqrt，平方根

```javascript
// 求某数的平方根
Math.sqrt(16)
```

数学对象提供了比较多的方法，这里不要求强记，通过演示数学对象的使用，加深对对象的理解。

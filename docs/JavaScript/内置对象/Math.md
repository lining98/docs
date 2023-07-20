# 内置对象 Math

`Math`是`JavaScript`的一个内置对象，它提供了一些数学属性和方法，可以对数字进行计算（用于 Number 类型）。 `Math`和其他全局对象不同，它不是一个构造器，`Math`的所有方法和属性都是静态的，直接使用并传入对应的参数。

## 属性

- Math.PI，获取圆周率

```js
// 圆周率
console.log(Math.PI)
```

## 方法

### Math.abs()

Math.abs()函数，返回一个数的绝对值

```js
Math.abs(-10)
// 10
```

### Math.random()

Math.random()函数，返回一个浮点，伪随机数范围从 0 到小于 1，从 0 往上不包括 1。

```js
// 0 ~ 1 之间的随机数, 包含 0 不包含 1
Math.random()
```

### Math.ceil()

Math.ceil()函数，返回大于或等于一个给定数的最小整数。

```js
// 舍弃小数部分，整数部分加1
Math.ceil(3.4)
```

### Math.floor()

Math.floor()方法，返回小于或等于一个给定数字的最大整数

```js
// 舍弃小数部分，整数部分不变
Math.floor(4.68)
```

### Math.round()

Math.round()，返回的是一个数字四舍五入的整数。

```js
// 取整，四舍五入原则
Math.round(5.46539)
Math.round(4.849)
```

### Math.min()

Math.min()方法，是可以返回指定一组数据中最小值。

```js
// 找出最小值
Math.min(24, 18, 6, 19, 21)
```

### Math.max()

Math.max()方法，是可以返回指定一组数据中最大值。

```js
// 找出最大值
Math.max(10, 21, 7, 24, 13)
```

### Math.pow()

Math.pow()方法，返回基数(base)的指数(exponent)次幂。

```js
// 求某个数的多少次方
Math.pow(4, 2) // 求 4 的 2 次方
Math.pow(2, 3) // 求 2 的 3 次方
```

### Math.sqrt()

Math.sqrt()方法，返回的是一个数的平方根。

```js
// 求某数的平方根
Math.sqrt(16) // 4
```

### Math.sin()

Math.sin()函数，返回一个值的正弦值。

```js
Math.sin((90 * Math.PI) / 180)
// 1
```

### Math.cos()

Math.cos()函数，返回一个值的余弦值。

```js
Math.cos((360 * Math.PI) / 180) // 1

Math.cos(0) // 1
```

### Math.trunc()

Math.trunc()函数，返回的是一个数的整数部分，不管正数还是负数，直接去掉小数点及之后的部分。

```js
Math.trunc(13.37)
// 13
Math.trunc(42.84)
// 42
Math.trunc(0.123)
//  0
Math.trunc(-0.123)
// -0
Math.trunc('-1.123')
// -1
Math.trunc(NaN)
// NaN
Math.trunc('foo')
// NaN
Math.trunc()
// NaN
```

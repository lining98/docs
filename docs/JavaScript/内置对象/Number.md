# 内置对象 Number

## 属性

1. `Number.MAX_VALUE`：表示 JavaScript 中能表示的最大数值，约为 1.79 × 10^308。
2. `Number.MIN_VALUE`：表示 JavaScript 中能表示的最小正数值，约为 5 × 10^-324。
3. `Number.POSITIVE_INFINITY`：表示正无穷大，当一个数超过了`Number.MAX_VALUE`时，将返回`Infinity`。
4. `Number.NEGATIVE_INFINITY`：表示负无穷大，当一个负数超过了`-Number.MAX_VALUE`时，将返回`-Infinity`。
5. `Number.NaN`：表示非数值（Not-a-Number），当进行非法的数学运算时，将返回`NaN`。

## 方法

1. `Number.isNaN(num)`：判断给定的值是否为`NaN`（非数值）。如果是`NaN`，则返回`true`，否则返回`false`。

2. `Number.isFinite(num)`：判断给定的值是否为有限数值。如果是有限数值，即不是`Infinity`、`-Infinity`或`NaN`，则返回`true`，否则返回`false`。

3. `Number.parseInt(string, radix)`：将字符串转换为整数，`radix`表示进制数（可选，默认为 10）。

4. `Number.parseFloat(string)`：将字符串转换为浮点数。

5. `Number.prototype.toFixed(digits)`：将数值转换为指定小数位数的字符串表示。`digits`表示保留的小数位数。

6. `Number.prototype.toPrecision(precision)`：将数值转换为指定精度的字符串表示。`precision`表示有效位数。

7. `Number.prototype.toString(radix)`：将数值转换为字符串。`radix`表示进制数（可选，默认为 10）。

8. `Number.prototype.valueOf()`：返回`Number`对象的原始数值。

示例代码：

```javascript
const num = 42.345
console.log(Number.MAX_VALUE) // 输出：1.7976931348623157e+308
console.log(Number.MIN_VALUE) // 输出：5e-324
console.log(Number.POSITIVE_INFINITY) // 输出：Infinity
console.log(Number.NEGATIVE_INFINITY) // 输出：-Infinity
console.log(Number.NaN) // 输出：NaN

console.log(Number.isNaN(num)) // 输出：false
console.log(Number.isFinite(num)) // 输出：true

console.log(Number.parseInt('42')) // 输出：42
console.log(Number.parseFloat('42.345')) // 输出：42.345

console.log(num.toFixed(2)) // 输出：42.35
console.log(num.toPrecision(4)) // 输出：42.35
console.log(num.toString(2)) // 输出：101010.0101111011011001

console.log(num.valueOf()) // 输出：42.345
```

这些是`Number`对象的一些常用属性和方法。通过使用这些属性和方法，可以在 JavaScript 中更方便地处理数字和数值相关的操作。

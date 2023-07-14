# 内置对象 Date

## Date 方法

| **方法**                     | **描述**                                                           |
| ---------------------------- | ------------------------------------------------------------------ |
| getDate()                    | 获取日期（月份中的日期），返回值为 1 到 31 之间的整数。            |
| getDay()                     | 获取星期几，返回值为 0（表示星期日）到 6（表示星期六）之间的整数。 |
| getFullYear()                | 获取四位数的年份，返回值为一个年份。                               |
| getHours()                   | 获取小时数，返回值为 0 到 23 之间的整数。                          |
| getMilliseconds()            | 获取毫秒数，返回值为 0 到 999 之间的整数。                         |
| getMinutes()                 | 获取分钟数，返回值为 0 到 59 之间的整数。                          |
| getMonth()                   | 获取月份，返回值为 0（一月）到 11（十二月）之间的整数。            |
| getSeconds()                 | 获取秒数，返回值为 0 到 59 之间的整数。                            |
| getTime()                    | 获取日期的时间戳，返回值为从 1970 年 1 月 1 日至今的毫秒数。       |
| getTimezoneOffset()          | 获取本地时间与 UTC 时间之间的时差，返回值为以分钟为单位的整数值。  |
| setDate(day)                 | 设置日期的天数为指定的值（参数为一个整数）。                       |
| setFullYear(year)            | 设置日期的年份为指定的值（参数为一个四位数的整数）。               |
| setHours(hour)               | 设置日期的小时数为指定的值（参数为一个整数）。                     |
| setMilliseconds(millisecond) | 设置日期的毫秒数为指定的值（参数为一个整数）。                     |
| setMinutes(minute)           | 设置日期的分钟数为指定的值（参数为一个整数）。                     |
| setMonth(month)              | 设置日期的月份为指定的值（参数为一个整数，范围为 0 到 11）。       |
| setSeconds(second)           | 设置日期的秒数为指定的值（参数为一个整数）。                       |
| setTime(time)                | 设置日期为指定的时间戳（参数为一个整数）。                         |
| toDateString()               | 将日期对象转换为可读的字符串，只返回日期部分。                     |
| toISOString()                | 将日期对象转换为 ISO 8601 格式的字符串。                           |
| toJSON()                     | 返回日期对象的 JSON 格式的字符串。                                 |
| toLocaleDateString()         | 将日期对象转换为本地日期格式的字符串。                             |
| toLocaleString()             | 将日期对象转换为本地日期和时间格式的字符串。                       |
| toLocaleTimeString()         | 将日期对象转换为本地时间格式的字符串。                             |
| toString()                   | 将日期对象转换为字符串。                                           |
| toTimeString()               | 将日期对象的时间部分转换为字符串。                                 |
| toUTCString()                | 将日期对象转换为 UTC 时间格式的字符串。                            |

## 创建日期

Date 对象用于处理日期和时间。

可以通过 new 关键词来定义 Date 对象。以下代码定义了名为 myDate 的 Date 对象：

有四种方式初始化日期:

```js
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```

## 设置日期

通过使用针对日期对象的方法，我们可以很容易地对日期进行操作。

在下面的例子中，我们为日期对象设置了一个特定的日期 (2050 年 1 月 10 日)：

```js
var myDate = new Date()
myDate.setFullYear(2050, 0, 10) // 第二个参数为月份， 0 到 11 之间的整数值，表示从一月到十二月
```

在下面的例子中，我们将日期对象设置为 5 天后的日期：

```js
var myDate = new Date()
myDate.setDate(myDate.getDate() + 5)
```

## 两个日期比较

```js
var x = new Date()
x.setFullYear(2100, 0, 14)
var today = new Date()

if (x > today) {
  alert('今天是2100年1月14日之前')
} else {
  alert('今天是2100年1月14日之后')
}
```

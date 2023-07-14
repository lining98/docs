# 内置对象 String

## 一、操作方法

### 字符串截取

#### slice()

语法

```js
新字符串 = str.slice(开始索引, 结束索引) //两个参数都是索引值。包左不包右。
```

解释

> 从字符串中截取指定的内容。不会修改原字符串，而是将截取到的内容返回。

::: tip 注意

- `(2, 5)` 截取时，包左不包右。
- `(2)` 表示从指定的索引位置开始，截取到最后。
- `(-3)` 表示从倒数第三个开始，截取到最后。
- `(1, -1)` 表示从第一个截取到倒数第一个。
- `(5, 2)` 表示前面的大，后面的小，返回值为空。

:::

#### substring()

语法

```js
新字符串 = str.substring(开始索引, 结束索引) //两个参数都是索引值。包左不包右。
```

解释

> 从字符串中截取指定的内容。和 slice()类似。

substring()和 slice()是类似的。但不同之处在于：

- `substring()`不能接受负值作为参数。如果传递了一个负值，则默认使用 0。
- `substring()`还会自动调整参数的位置，如果第二个参数小于第一个，则自动交换。比如说， substring(1, 0)相当于截取的是第一个字符。

#3、substr()

#### substr()

语法

```js
字符串 = str.substr(开始索引, 截取的长度)
```

解释

> 从字符串中截取指定的内容。不会修改原字符串，而是将截取到的内容返回。

::: warning 注意
这个方法的第二个参数截取的长度，不是结束索引。
:::

::: tip 参数举例：

- `(2,4)` 从索引值为 2 的字符开始，截取 4 个字符。

- `(1) `从指定位置开始，截取到最后。

- `(-3)` 从倒数第几个开始，截取到最后。

:::

### 增

这里增的意思并不是说直接增添内容，而是创建字符串的一个副本，再进行操作

除了常用`+`以及`${}`进行字符串拼接之外，还可通过`concat`

#### concat()

用于将一个或多个字符串拼接成一个新字符串

```js
let stringValue = 'hello '
let result = stringValue.concat('world')
console.log(result) // "hello world"
console.log(stringValue) // "hello"
```

### 删

这里的删的意思并不是说删除原字符串的内容，而是创建字符串的一个副本，再进行操作

常见的有：

- slice()
- substr()
- substring()

这三个方法都返回调用它们的字符串的一个子字符串，而且都接收一或两个参数。

```js
let stringValue = 'hello world'
console.log(stringValue.slice(3)) // "lo world"
console.log(stringValue.substring(3)) // "lo world"
console.log(stringValue.substr(3)) // "lo world"
console.log(stringValue.slice(3, 7)) // "lo w"
console.log(stringValue.substring(3, 7)) // "lo w"
console.log(stringValue.substr(3, 7)) // "lo worl"
```

### 改

这里改的意思也不是改变原字符串，而是创建字符串的一个副本，再进行操作

常见的有：

- trim()、trimLeft()、trimRight()

- repeat()
- padStart()、padEnd()
- toLowerCase()、 toUpperCase()

#### trim()、trimLeft()、trimRight()

删除前、后或前后所有空格符，再返回新的字符串

```js
let stringValue = ' hello world '
let trimmedStringValue = stringValue.trim()
console.log(stringValue) // " hello world "
console.log(trimmedStringValue) // "hello world"
```

#### repeat()

接收一个整数参数，表示要将字符串复制多少次，然后返回拼接所有副本后的结果

```js
let stringValue = 'na '
let copyResult = stringValue.repeat(2) // na na
```

#### padEnd()

复制字符串，如果小于指定长度，则在相应一边填充字符，直至满足长度条件

```js
let stringValue = 'foo'
console.log(stringValue.padStart(6)) // " foo"
console.log(stringValue.padStart(9, '.')) // "......foo"
```

#### toLowerCase()、 toUpperCase()

大小写转化

```js
let stringValue = 'hello world'
console.log(stringValue.toUpperCase()) // "HELLO WORLD"
console.log(stringValue.toLowerCase()) // "hello world"
```

### 查

除了通过索引的方式获取字符串的值，还可通过：

- chatAt()

- indexOf()

- startWith()

- includes()

#### charAt()

返回给定索引位置的字符，由传给方法的整数参数指定

```js
let message = 'abcde'
console.log(message.charAt(2)) // "c"
```

#### indexOf()

从字符串开头去搜索传入的字符串，并返回位置（如果没找到，则返回 -1 ）

```js
let stringValue = 'hello world'
console.log(stringValue.indexOf('o')) // 4
```

#### startWith()、includes()

从字符串中搜索传入的字符串，并返回一个表示是否包含的布尔值

```js
let message = 'foobarbaz'
console.log(message.startsWith('foo')) // true
console.log(message.startsWith('bar')) // false
console.log(message.includes('bar')) // true
console.log(message.includes('qux')) // false
```

## 二、转换方法

### split()

把字符串按照指定的分割符，拆分成数组中的每一项

```js
let str = '12+23+34'
let arr = str.split('+') // [12,23,34]
```

## 三、模板匹配方法

针对正则表达式，字符串设计了几个方法：

- match()
- search()
- replace()

### match()

接收一个参数，可以是一个正则表达式字符串，也可以是一个`RegExp`对象，返回数组

```js
let text = 'cat, bat, sat, fat'
let pattern = /.at/
let matches = text.match(pattern)
console.log(matches[0]) // "cat"
```

### search()

接收一个参数，可以是一个正则表达式字符串，也可以是一个`RegExp`对象，找到则返回匹配索引，否则返回 -1

```js
let text = 'cat, bat, sat, fat'
let pos = text.search(/at/)
console.log(pos) // 1
```

### replace()

接收两个参数，第一个参数为匹配的内容，第二个参数为替换的元素（可用函数）

```js
let text = 'cat, bat, sat, fat'
let result = text.replace('at', 'ond')
console.log(result) // "cond, bat, sat, fat"
```

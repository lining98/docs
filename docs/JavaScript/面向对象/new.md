# 实例对象与方法

## 创建对象

### 利用 `new Object` 创建对象

```js
var person = new Person()
person.name = '张三'
person.age = 18
person.sex = '男'
person.sayHi = function () {
  alert('大家好啊~')
}
```

### 利用字面量创建对象

```js
var person = {
  name: '张三',
  age: 18,
  sex: '男',
  sayHi: function () {
    alert('大家好啊~')
  }
}
```

- 调用对象

```js
// 1.调用对象的属性 我们采取 对象名.属性名 . 我们理解为 的
console.log(obj.name)

// 2.调用属性还有一种方法 对象名['属性名']
console.log(obj['age'])

// 3.调用对象的方法 sayHi   对象名.方法名() 千万别忘记添加小括号
obj.sayHi()
```

### 利用构造函数创建对象

**构造函数**：是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与 new 运算符一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。
::: tip 注意

- 构造函数约定首字母大写；
- 函数内的属性和方法前面需要添加 this，表示当前对象的属性和方法；
- 构造函数中不需要 return 返回结果；
- 当我们创建对象的时候，必须用 new 来调用构造函数。

:::

构造函数的特点有两个。

- 函数体内部使用了`this`关键字，代表了所要生成的对象实例。
- 生成对象的时候，必须使用`new`命令。

```js
function Person(uname, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex
  this.sayHi = function () {
    alert('我的名字叫：' + this.name + '，年龄：' + this.age + '，性别：' + this.sex)
  }
}
var bigbai = new Person('大白', 100, '男')
var smallbai = new Person('小白', 21, '男')
console.log(bigbai.name)
console.log(smallbai.name)
```

## 常用方法

- Object.assign(target, …sources)：复制一个或多个对象的属性到目标对象。
- Object.create(proto, [propertiesObject])：创建一个新对象，使用现有的对象作为新对象的原型。
- Object.entries(obj)：返回一个给定对象自身可枚举属性的[key, value]数组。
- Object.freeze(obj)：冻结一个对象，防止对其进行修改。
- Object.getOwnPropertyDescriptor(obj, prop)：返回指定对象上一个自有属性对应的属性描述符。
- Object.getOwnPropertyNames(obj)：返回一个给定对象自身的所有属性的名称数组。
- Object.getOwnPropertySymbols(obj)：返回一个给定对象自身的所有 Symbol 属性的数组。
- Object.getPrototypeOf(obj)：返回指定对象的原型（内部的 [[Prototype]] 属性的值）。
- Object.is(value1, value2)：判断两个值是否相同。
- Object.keys(obj)：返回一个给定对象自身可枚举属性的名称数组。
- Object.seal(obj)：封闭一个对象，防止添加新属性和删除现有属性。
- Object.values(obj)：返回一个给定对象自身可枚举属性值的数组。
- Object.hasOwnProperty(prop)：判断一个属性是否是对象自身的属性（非继承的属性）。

### Object.assign(target, …sources)

```js
const obj1 = { a: 1 }
const obj2 = { b: 2 }
const obj3 = { c: 3 }
const mergedObj = Object.assign(obj1, obj2, obj3)
console.log(mergedObj) // { a: 1, b: 2, c: 3 }
```

### Object.create(proto, [propertiesObject])

```js
const myProto = { greeting: 'Hello' }
const newObj = Object.create(myProto)
console.log(newObj.greeting) // Hello
```

### Object.entries(obj)

```js
const obj = { a: 1, b: 2, c: 3 }
const entries = Object.entries(obj)
console.log(entries) // [["a", 1], ["b", 2], ["c", 3]]
```

### Object.freeze(obj)

```js
const obj = { name: 'John' }
```

### Object.freeze(obj)

```js
obj.name = 'Jane' // 修改无效，不会影响原对象
console.log(obj.name) // John
```

### Object.getOwnPropertyDescriptor(obj, prop)

```js
const obj = { name: 'John' }
const descriptor = Object.getOwnPropertyDescriptor(obj, 'name')
console.log(descriptor)
/* 输出
{
  value: 'John',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
```

### Object.getOwnPropertyNames(obj)

```js
const obj = { name: 'John', age: 30 }
const propNames = Object.getOwnPropertyNames(obj)
console.log(propNames) // ["name", "age"]
```

### Object.getOwnPropertySymbols(obj)

```js
const sym = Symbol('mySymbol')
const obj = { [sym]: 'value' }
const symbols = Object.getOwnPropertySymbols(obj)
console.log(symbols) // [Symbol(mySymbol)]
```

### Object.getPrototypeOf(obj)

```js
const myProto = { greeting: 'Hello' }
const newObj = Object.create(myProto)
console.log(Object.getPrototypeOf(newObj) === myProto) // true
```

### Object.is(value1, value2)

```js
console.log(Object.is(5, 5)) // true
console.log(Object.is(0, -0)) // false
console.log(Object.is(NaN, NaN)) // true
```

### Object.keys(obj)

```js
const obj = { name: 'John', age: 30 }
const keys = Object.keys(obj)
console.log(keys) // ["name", "age"]
```

### Object.seal(obj)

```js
const obj = { name: 'John' }
```

### Object.seal(obj)

```js
obj.age = 30 // 添加属性无效，不会影响原对象
delete obj.name // 删除属性无效，不会影响原对象
console.log(obj.name) // John
console.log(obj.age) // undefined
```

### Object.values(obj)

```js
const obj = { name: 'John', age: 30 }
const values = Object.values(obj)
console.log(values) // ["John", 30]
```

### Object.hasOwnProperty(prop)

```js
const obj = { name: 'John' }
console.log(obj.hasOwnProperty('name')) // true
console.log(obj.hasOwnProperty('age')) // false
```

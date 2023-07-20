# 类和构造函数

在 JavaScript 中，类是一种用于创建对象的模板或蓝图，而构造函数是用于创建类的实例的特殊函数。它们是面向对象编程的两种不同方式，但在 ES6（ECMAScript 6）之后，JavaScript 引入了`class`关键字，使得类的定义和使用更加直观和方便。

构造函数是一个带有 new 关键字调用的函数，它的主要作用是初始化对象的属性和方法。在构造函数内部，通过使用 this 关键字，可以引用将要创建的对象。

## 构造函数

在 ES5 及其之前的版本中，JavaScript 使用构造函数来创建对象。构造函数本质上是一个普通的函数，但通常使用`new`关键字来实例化对象。构造函数内部使用`this`关键字来引用新创建的对象，并定义对象的属性和方法。

示例：

```javascript
// 构造函数定义
function Person(name, age) {
  this.name = name
  this.age = age
  this.sayHello = function () {
    console.log('Hello, I am ' + this.name + '!')
  }
}

// 使用构造函数创建对象实例
const person1 = new Person('John', 30)
const person2 = new Person('Jane', 25)

person1.sayHello() // 输出: "Hello, I am John!"
person2.sayHello() // 输出: "Hello, I am Jane!"
```

构造函数的优点是它可以直接在构造函数中定义对象的属性和方法，但每次创建对象实例时，都会重新创建一次方法。这可能会导致内存浪费，尤其是当实例数量较多时。

## 类

在 ES6 及以上的版本中，JavaScript 引入了`class`关键字，使得类的定义更加简洁明了。类定义了对象的结构和行为，而对象则是类的实例。类的方法在原型上定义，因此实例共享相同的方法。

示例：

```javascript
// ES6类定义
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log('Hello, I am ' + this.name + '!')
  }
}

// 创建类的实例
const person1 = new Person('John', 30)
const person2 = new Person('Jane', 25)

person1.sayHello() // 输出: "Hello, I am John!"
person2.sayHello() // 输出: "Hello, I am Jane!"
```

::: tip 总结
使用类的好处是它更加直观，能够更清晰地表达对象的结构和行为。此外，方法在原型上定义，因此它们在实例之间共享，不会造成内存浪费。

无论是构造函数还是类，它们都可以用于创建对象。在现代的 JavaScript 中，类更为普遍，因为它提供了更清晰、直观和易于维护的代码结构。
:::

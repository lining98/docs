# ES6 class

在 ECMAScript 2015（ES6）中，引入了类（Class）的概念，允许我们以一种更面向对象的方式来创建和管理对象。

## 创建类

使用`class`关键字可以定义一个类，类名通常首字母大写。

```js
class Person {
  // 构造函数，用于创建对象时进行初始化
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // 类的方法
  sayHello() {
    console.log(`你好, 我的名字是${this.name}并且我${this.age} 岁了。`)
  }
}
```

## 创建对象

通过类创建对象时，需要使用`new`关键字。

```js
const person1 = new Person('John', 30)
const person2 = new Person('Alice', 25)

person1.sayHello() // 你好, 我的名字是John并且我30岁了。
person2.sayHello() // 你好, 我的名字是Alice并且我25岁了。
```

## 类的继承

ES6 的类支持继承，可以使用`extends`关键字来继承另一个类的属性和方法。

```js
class Student extends Person {
  constructor(name, age, major) {
    super(name, age) // 调用父类的构造函数
    this.major = major
  }

  // 子类的方法
  introduce() {
    console.log(`我是一名${this.major}专业的学生。`)
  }
}
```

## 方法重写

子类可以重写继承自父类的方法。

```js
class Student extends Person {
  // ...

  // 重写父类的方法
  sayHello() {
    console.log(`你好，我叫${this.name}，我${this.age}岁了。`)
  }
}
```

## 静态方法

使用`static`关键字定义静态方法，静态方法属于类本身，而不是类的实例。

```js
class MathUtils {
  static add(a, b) {
    return a + b
  }

  static multiply(a, b) {
    return a * b
  }
}

console.log(MathUtils.add(2, 3)) // 5
console.log(MathUtils.multiply(2, 3)) // 6
```

## Getter 和 Setter

使用`get`和`set`关键字定义属性的读取器和设置器。

```js
class Circle {
  constructor(radius) {
    this._radius = radius
  }

  // Getter
  get radius() {
    return this._radius
  }

  // Setter
  set radius(value) {
    if (value < 0) {
      throw new Error('半径不能是负的。')
    }
    this._radius = value
  }
}

const circle = new Circle(5)
console.log(circle.radius) // 5

circle.radius = 10
console.log(circle.radius) // 10
```

::: tip 总结
ES6 中的类提供了更接近传统面向对象编程的语法，使得创建和管理对象更加简洁和直观。类的继承、方法重写、静态方法以及 Getter 和 Setter 等特性让 JavaScript 开发者能够更好地组织和复用代码。
:::

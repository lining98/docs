# JavaScript 原型和原型链

> JavaScript 原型和原型链是面向对象编程中的重要概念，用于实现继承和共享属性和方法。

### 原型（Prototype）

在 JavaScript 中，每个对象都有一个特殊的属性`__proto__`（在 ES6 及以上版本中，可以使用`Object.getPrototypeOf()`来访问原型），它指向该对象的原型对象。原型对象是另一个普通对象，它包含了可供共享的属性和方法。当我们访问对象的属性或方法时，JavaScript 会首先在对象自身查找，如果找不到，则继续在对象的原型上查找，直到找到为止。

示例：

```javascript
const person = {
  name: 'John',
  sayHello: function () {
    console.log('Hello, I am ' + this.name + '!')
  }
}

// person 的原型是 Object.prototype
console.log(person.__proto__ === Object.prototype) // 输出: true

person.sayHello() // 输出: "Hello, I am John!"
```

### 原型链（Prototype Chain）

原型链是由对象的原型对象构成的链式结构。当我们访问对象的属性或方法时，如果对象本身没有找到，则会继续在原型链上查找，直到找到为止。原型链的最终节点是`Object.prototype`，它是所有对象的根原型。

示例：

```javascript
const person = {
  name: 'John',
  sayHello: function () {
    console.log('Hello, I am ' + this.name + '!')
  }
}

const friend = Object.create(person) // friend 的原型是 person
friend.name = 'Jane'

friend.sayHello() // 输出: "Hello, I am Jane!"
```

在这个例子中，`friend`对象通过`Object.create(person)`创建，其原型指向`person`对象。当我们调用`friend.sayHello()`时，由于`friend`对象本身没有`sayHello`方法，JavaScript 会在原型链上查找并在`person`对象上找到该方法。

### 使用原型的好处

1. **共享属性和方法：** 原型允许多个对象共享相同的属性和方法，这样可以节省内存空间。

2. **继承：** 通过原型链，我们可以实现继承，子对象可以继承父对象的属性和方法。

3. **动态更新：** 原型上的属性和方法是动态的，可以在运行时进行修改和添加。

### 注意事项

- 尽量避免直接修改原型对象，以免对其他对象产生意外的影响。
- 使用`Object.create()`和`Object.setPrototypeOf()`等方法来设置对象的原型，而不是直接修改`__proto__`属性。

::: tip 总结
JavaScript 原型和原型链是实现继承和共享属性和方法的关键机制。

它们使得 JavaScript 具有强大的面向对象特性，并允许我们创建灵活和高效的代码结构。
:::

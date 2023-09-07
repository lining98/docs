# JavaScript 原型

## 原型

原型是 JavaScript 中每个对象的基础。每个 JavaScript 对象都有一个原型对象，它是一个包含属性和方法的对象。这个原型对象可以被其他对象继承，从而实现属性和方法的共享。

在 JavaScript 中，原型是一个关键的概念，它使得对象可以通过原型链（prototype chain）访问其他对象的属性和方法。原型链是一个对象关联到其他对象的链条，使得属性和方法可以被共享和继承。

### 原型链

原型链是一个对象和它的原型对象之间的连接。当你访问一个对象的属性或方法时，JavaScript 会首先查找该对象本身是否有这个属性或方法，如果没有，它会沿着原型链向上查找，直到找到为止。

```js
function Person(name) {
  this.name = name
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`)
}

const person = new Person('John')
person.sayHello() // 输出: "Hello, my name is John"
```

在上面的例子中，定义了一个构造函数 Person，它有一个属性 name 和一个方法 sayHello。然后，我们通过 Person.prototype 来定义 sayHello 方法。当我们创建一个 Person 对象 person 并调用 sayHello 方法时，JavaScript 会首先查找 person 对象本身是否有 sayHello 方法，如果没有，它会沿着原型链找到 Person.prototype 上的 sayHello 方法。

### 原型对象

每个 JavaScript 对象都有一个关联的原型对象。你可以通过 `__proto__` 属性来访问对象的原型对象。例如：

```javascript
const person = { name: 'John' }
console.log(person.__proto__) // 输出: Object {}
```

在这个例子中，`person` 对象的原型对象是 `Object {}`，它是所有 JavaScript 对象的基本原型。

### 原型继承

原型继承是 JavaScript 中对象之间共享属性和方法的一种方式。当一个对象继承了另一个对象的原型时，它可以访问该原型对象上的属性和方法。

让我们再次看一个例子：

```javascript
function Animal(name) {
  this.name = name
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating`)
}

function Dog(name, breed) {
  Animal.call(this, name)
  this.breed = breed
}

Dog.prototype = Object.create(Animal.prototype)

const dog = new Dog('Buddy', 'Golden Retriever')
dog.eat() // 输出: "Buddy is eating"
```

在这个例子中，我们定义了两个构造函数 `Animal` 和 `Dog`。`Animal` 构造函数有一个 `eat` 方法，而 `Dog` 构造函数继承了 `Animal` 构造函数，并在其原型上创建了一个新对象，该对象的原型是 `Animal.prototype`。这样，`dog` 对象就可以访问 `Animal` 的 `eat` 方法。

## JavaScript 中的原型继承方式

JavaScript 中有多种方式来实现原型继承，让我们一一了解这些方式。

### 1. 构造函数和原型链

这是最常见的原型继承方式。它使用构造函数来创建对象属性，同时使用原型链来共享方法。在前面的例子中，我们已经看到了这种方式的示例。

```javascript
function Animal(name) {
  this.name = name
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating`)
}

function Dog(name, breed) {
  Animal.call(this, name)
  this.breed = breed
}

Dog.prototype = Object.create(Animal.prototype)

const dog = new Dog('Buddy', 'Golden Retriever')
dog.eat() // 输出: "Buddy is eating"
```

### 2. Object.create()

`Object.create()` 方法是一种更简单的方式来创建一个对象并指定其原型。它接受一个原型对象作为参数，然后返回一个新对象，该对象的原型就是传入的原型对象。

```javascript
const animal = {
  eat: function () {
    console.log(`${this.name} is eating`)
  },
}

const dog = Object.create(animal)
dog.name = 'Buddy'
dog.eat() // 输出: "Buddy is eating"
```

### 3. 类继承

ES6 引入了类（class）的概念，它提供了一种更简单的方式来实现原型继承。类可以使用 `extends` 关键字继承另一个类的属性和方法。

```javascript
class Animal {
  constructor(name) {
    this.name = name
  }

  eat() {
    console.log(`${this.name} is eating`)
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

const dog = new Dog('Buddy', 'Golden Retriever')
dog.eat() // 输出: "Buddy is eating"
```

### 4. Object.setPrototypeOf()

`Object.setPrototypeOf()` 方法允许你在运行时更改对象的原型。这个方法接受两个参数：要更改原型的对象和新的原型对象。

```javascript
const animal = {
  eat: function () {
    console.log(`${this.name} is eating`)
  },
}

const dog = { name: 'Buddy' }

Object.setPrototypeOf(dog, animal)

dog.eat() // 输出: "Buddy is eating"
```

## 原型继承与传统继承的区别

JavaScript 中的原型继承与传统面向对象编程语言中的继承有一些重要区别。以下是一些主要区别：

### 1. 动态性

JavaScript 的原型继承是动态的，这意味着你可以在运行时更改对象的原型。这种灵活性可以带来很多优势，但也需要小心使用，以避免不必要的复杂性。

### 2. 原型链

JavaScript 中的继承是通过原型链来实现的，这意味着一个对象可以继承多个原型对象的属性和方法。这种多重继承的能力是传统继承中不常见的。

### 3. 对象与类

传统面向对象编程语言通常使用类来定义对象的结构和行为，而 JavaScript 使用构造函数和原型对象。这种不同的方式可以导致不同的编程风格和理念。

## 使用原型的最佳实践

在使用原型时，有一些最佳实践可以帮助你编写更清晰、更可维护的代码：

### 1. 避免直接修改内建对象的原型

虽然你可以修改内建对象的原型，但最好不要这样做，因为它可能会导致意外的行为和不稳定性。如果需要扩展内建对象的功能，可以创建一个自定义的工具函数或对象，而不是修改原型。

### 2. 将方法添加到原型上

将方法添加到原型上而不是在构造函数内部定义方法，可以节省内存，因为所有对象实例共享同一个方法。这样可以降低内存使用，特别是当有大量对象实例时。

### 3. 注意原型链中的属性和方法覆盖

当在子对象上定义与父对象相同名称的属性或方法时，它会覆盖父对象上的属性或方法。因此，在命名属性和方法时要小心，以避免不必要的覆盖。

### 4. 使用 Object.create()来创建对象

`Object.create()` 方法提供了一种更灵活的方式来创建对象，并指定其原型。它可以帮助你更清晰地定义对象之间的继承关系。

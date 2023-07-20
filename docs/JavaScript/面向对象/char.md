# 继承、封装和多态

## 继承（Inheritance）：

继承是一种对象间的关系，它允许一个对象（称为子类或派生类）继承另一个对象（称为父类或基类）的属性和方法。子类继承了父类的特性，可以通过继承来复用代码，减少重复编写。

在 JavaScript 中，可以通过原型链实现继承。子类的原型对象指向父类的实例，从而继承了父类的属性和方法。

```javascript
// 父类
function Animal(name) {
  this.name = name
}

Animal.prototype.sayHello = function () {
  console.log('Hello, I am ' + this.name)
}

// 子类
function Dog(name, breed) {
  Animal.call(this, name)
  this.breed = breed
}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.bark = function () {
  console.log('Woof! Woof!')
}

const myDog = new Dog('Buddy', 'Labrador')
myDog.sayHello() // 输出：Hello, I am Buddy
myDog.bark() // 输出：Woof! Woof!
```

## 封装（Encapsulation）：

封装是一种将数据和方法包裹在一个单一实体中的概念，使得外部无法直接访问对象的内部实现细节。这样的设计有助于隐藏对象的复杂性，只暴露必要的接口，提高代码的可维护性和安全性。

在 JavaScript 中，封装通常通过将数据设置为私有属性，并提供公有方法来访问和操作这些私有属性来实现。

```javascript
function Person(name, age) {
  // 私有属性
  let _name = name
  let _age = age

  // 公有方法
  this.getName = function () {
    return _name
  }

  this.getAge = function () {
    return _age
  }

  this.sayHello = function () {
    console.log('Hello, my name is ' + _name + ' and I am ' + _age + ' years old.')
  }
}

const person = new Person('John', 30)
console.log(person.getName()) // 输出：John
console.log(person.getAge()) // 输出：30
person.sayHello() // 输出：Hello, my name is John and I am 30 years old.
```

## 多态（Polymorphism）：

多态是一种允许不同对象对同一方法做出不同响应的特性。这意味着可以使用相同的方法名，但针对不同对象实现不同的行为。多态有助于实现代码的灵活性和可扩展性。

在 JavaScript 中，由于其动态类型特性，多态是天然支持的。

```javascript
function animalSound(animal) {
  if (animal instanceof Dog) {
    console.log('Woof! Woof!')
  } else if (animal instanceof Cat) {
    console.log('Meow!')
  } else {
    console.log('Unknown animal sound.')
  }
}

function Dog() {}
function Cat() {}

const dog = new Dog()
const cat = new Cat()

animalSound(dog) // 输出：Woof! Woof!
animalSound(cat) // 输出：Meow!
```

在上面的例子中，`animalSound` 函数根据传入的参数不同（`Dog` 或 `Cat` 对象），展现了不同的行为。这就是多态的体现。

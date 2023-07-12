# 类

ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过`class`关键字，可以定义类。基本上，ES6的class可以看作只是一个**语法糖**，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

## 基本实例
```ts
// 类的基本定义与使用
class Person{
  // 声明属性
    name:string
    age:number

    // 构造方法
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }

    // 一般方法
    say(){
        return `我叫${this.name},我${this.age}了`
    }
}

// 创建类的实例
const p = new Person('zs',18)
// 调用实例的方法
console.log(p);  // Person { name: 'zs', age: 18 }
console.log(p.say()); //我叫zs,我18了
```


## 继承
在TypeScript 里，我们可以使用常用的面向对象模式。 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。
```ts
// 类的继承
class Animal {
  run (distance: number) {
    console.log(`Animal run ${distance}m`)
  }
}

class Dog extends Animal {
  cry () {
    console.log('wang! wang!')
  }
}

const dog = new Dog()
dog.cry()
dog.run(100) // 可以调用从父中继承得到的方法
```

## 类的修饰符
总共有三个 public private protected
### 默认为 public
使用`public`修饰符 可以让你定义的变量 内部访问 也可以外部访问 如果不写默认就是public

### 理解 private
使用`private`修饰符 代表定义的变量私有的只能在内部访问 不能在外部访问

### 理解 protected
使用`protected`修饰符 代表定义的变量私有的只能在内部和继承的子类中访问 不能在外部访问

```ts
class Person{
    public name:string
    private age:number
    protected some:any
    constructor(name:string,age:number,some:any){
        this.name = name
        this.age = age
        this.some = some
    }
    say(){}
}
class Man extends Person{
    constructor(){
        super('zs',18,true)
    }
    create(){
        // console.log(this.age); // error 属性“age”为私有属性，只能在类“Person”中访问。
        console.log(this.some);   // 可以在这里使用
    }
}
let ls = new Person('lisi',20,true)
let man = new Man()
// man.some // error 属性“some”受保护，只能在类“Person”及其子类中访问。
```


## readonly 修饰符
你可以使用 `readonly` 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
```ts
class Person {
  readonly name: string = 'abc'
  constructor(name: string) {
    this.name = name
  }
}

let john = new Person('John')
// john.name = 'peter' // error
```


## static 静态属性 和 静态方法
我们用static 定义的属性 不可以通过this 去访问 只能通过类名去调用
```ts
class Person {
  public name: string;
  static age: number = 18;
  constructor(name: string, age: number) {
    this.name = name;

    // 属性“age”在类型“Person”上不存在。你的意思是改为访问静态成员“Person.age”吗?
    // this.age = age; //error
  }
  static say() {}
}

Person.age = 20
Person.say()
```
static 静态函数 同样也是不能通过this 去调用 也是通过类名去调用

需注意： 如果两个函数都是static 静态的是可以通过this互相调用
```ts
class Person {
  public name: string;
  static age: number = 18;
  constructor(name: string) {
    this.name = name;
  }
  static say() {
    console.log('sayyyy');
  }
  static aa(){
    return this.say() // 可以使用this调用
  }
}

```

## interface 定义 类
ts interface 定义类 使用关键字 `implements` 后面跟interface的名字多个用逗号隔开 继承还是用extends
```ts

interface PersonClass {
    get(type: boolean): boolean
}

interface PersonClass2{
    set():void,
    asd:string
}

class A {
    name: string
    constructor() {
        this.name = "123"
    }
}

class Person extends A implements PersonClass,PersonClass2 {
    asd: string
    constructor() {
        super()
        this.asd = '123'
    }
    get(type:boolean) {
        return type
    }
    set () {

    }
}
```

## 存储器
`TypeScript` 支持通过 `getters/setters` 来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

下面来看如何把一个简单的类改写成使用 `get` 和 `set`。 首先，我们从一个没有使用存取器的例子开始。
```ts
class Person {
  firstName: string = 'A'
  lastName: string = 'B'
  get fullName () {
    return this.firstName + '-' + this.lastName
  }
  set fullName (value) {
    const names = value.split('-')
    this.firstName = names[0]
    this.lastName = names[1]
  }
}

const p = new Person()
console.log(p.fullName)

p.firstName = 'C'
p.lastName =  'D'
console.log(p.fullName)

p.fullName = 'E-F'
console.log(p.firstName, p.lastName)
```


## 抽象类
抽象类做为其它派生类的基类使用。 它们一般**不会直接被实例化，只能实例化实现了所有抽象方法的子类**。 不同于接口，抽象类可以包含成员的实现细节。

abstract: 用`abstract`关键字声明的类叫做`抽象类`，声明的方法叫做`抽象方法`。
- 抽象类：指不能被实例化，因为它里面包含一个或多个抽象方法。
- 抽象方法：是指不包含具体实现的方法。
```ts
    abstract class Person {
      constructor(public name: string){}

      // 抽象方法
      abstract setAge(age: number) :void;
    }

    class Child extends Person {
      constructor(name: string) {
        super(name);
      }

      setAge(age: number): void {
        console.log(`我的名字是${this.name},年龄是${age}`);
      }
    }

    let res = new Person("zs") //error 无法创建抽象类的实例。
    let res1 = new Child("zs");

    res1.setAge(7) // "我的名字是zs,年龄是7"
```


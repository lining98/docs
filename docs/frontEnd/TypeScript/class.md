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

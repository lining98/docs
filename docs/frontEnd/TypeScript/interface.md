# 接口和对象类型
> TypeScript 的核心原则之一是对值所具有的结构进行类型检查。我们使用接口（Interfaces）来定义对象的类型。`接口是对象的状态(属性)和行为(方法)的抽象(描述)`


## 对象的类型
在typescript中，我们定义对象的方式要用关键字**interface**（接口），我的理解是使用interface来定义一种约束，让数据的结构满足约束的格式。定义方式如下：
```ts
//这样写是会报错的 因为我们在person定义了name,age，但是对象里面缺少age属性
//使用接口约束的时候不能多一个属性也不能少一个属性
//必须与接口保持一致
interface Person {
    name:string
    age:string,
}

const person:Person  = {
    name:"zhangsan"
}
```

### 重名interface 会合并
```ts
interface A{name:string}
interface A{age:number}

let a:A = {
    name:'zs',
    age:18
}
```

### 继承
```ts
interface A {
    name:stirng
}
interface B extends A {
    age:number
}

let obj:B = {
    age:18,
    name:'zs'
}

```

## 可选属性 使用`?`操作符
可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。

可选属性的含义是该属性可以不存在，带有可选属性的接口与普通的接口定义差不多，在可选属性名字定义的后面加一个`?`符号。
```ts
interface Person {
    b?:string,
    a:string
}

const person:Person  = {
    a:"hello"
}
```

## 任意属性
需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
```ts
//在这个例子当中我们看到接口中并没有定义C但是并没有报错
//应为我们定义了[propName: string]: any;
//允许添加新的任意属性
interface Person {
    a:string,
    [propName: string]: any;
}

// a是必须要有的，其他就不会校验了
const person:Person  = {
    a:"213",
    c:"123"
}
```

## 只读属性 readonly
readonly只读属性是不允许被赋值的，只能读取
```ts
//这样写是会报错的
//应为a是只读的不允许重新赋值
interface Person {
    b?: string,
    readonly a: string,
    [propName: string]: any;
}

const person: Person = {
    a: "213",
    c: "123"
}

person.a = 123  // 报错
```

## 添加函数
```ts
interface Person {
    cb:()=>void
}
const person: Person = {
    cb:()=>{
        console.log(123)
    }
}


interface Fn {
    (name:string):number[]
}
const fn:Fn = function(name:string){
    return [1,2]
}
```


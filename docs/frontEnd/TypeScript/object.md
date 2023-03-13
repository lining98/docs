# 对象类型

这里所说的对象类型，就是我们常说的`函数、{}、数组、类`

## object,Object 和{}类型

- object

object 类型用于表示所有的非原始类型，即我们不能把 number、string、boolean、symbol 等 原始类型赋值给 object。在严格模式下，null 和 undefined 类型也不能赋给 object。

```ts
let obj: object
obj = 1    // 报错 原始类型
obj = 'a'  // 报错 原始类型
obj = true // 报错 原始类型
obj = null // 报错
obj = undefined // 报错
obj = {} // 编译正确
obj = [] // 编译正确
obj = ()=>{} // 编译正确

```

- Object

大 Object 代表所有拥有 toString、hasOwnProperty 方法的类型 所以所有原始类型、非原始类型都可以赋给 Object(严格模式下 null 和 undefined 不可以)

```ts
let bigObject: Object
bigObject = 1 // 编译正确
bigObject = 'a' // 编译正确
bigObject = true // 编译正确
bigObject = null // 报错
bigObject = undefined // 报错
bigObject = {} // ok
```

- {} (字面量模式)

{} 空对象类型和大 Object 一样 也是表示原始类型和非原始类型的集合
```ts
let a:{} = 123
let a1:{} = '123'
let a2:{} = []
let a3:{} = {name:'zs'}

a3.age = 20 // 报错

```
:::tip
字面量模式虽然可以赋值任意类型，但是赋完值之后，这个对象类型是没有办法去做一个修改的。如果给它增加一个age属性，它是没有办法去做增加的，无法对这个变量的进行任何赋值的一个操作
:::

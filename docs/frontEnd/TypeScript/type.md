# 类型推论|类型别名


## 类型推论
TypeScript里，在有些没有明确指出类型的地方，类型推论会帮助提供类型。
```ts
/* 定义变量时赋值了, 推断为对应的类型 */
let n1 = 10 // number
// 相当于 let n1:number = 10
// n = 'abc'  // error  不能将类型“string”分配给类型“number”。

/* 定义变量时没有赋值, 推断为any类型 */
let n2  // any类型
n2 = 123
n2 = 'abc'
```

## 类型别名
type 关键字（可以给一个类型定义一个名字）多用于复合类型

- 定义类型别名
```ts
type s = string

let str:s = "abcd"

console.log(str);
```

- 定义函数别名
```ts
type str = () => string

let s: str = () => "我是一个字符串"

console.log(s);
```

- 定义联合类型别名
```ts
type str = string | number

let s1: str = 123

let s2: str = '123'

console.log(s1,s2);
```


- 定义值的别名
```ts
type value = boolean | 0 | '213'

let s:value = true
//变量s的值  只能是上面value定义的值
```
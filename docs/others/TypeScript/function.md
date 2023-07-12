# 函数

> 函数涉及的类型实际上指的是：`函数参数`和`返回值`的类型


## 函数的类型
js的函数
```js
// 命名函数
function add(x, y) {
  return x + y
}

// 匿名函数 箭头函数
let myAdd = (x, y) => {
  return x + y;
}
```
为上面那个函数添加类型：
```ts
function add(x: number, y: number): number {
  return x + y
}

let myAdd = (x: number, y: number): number => {
  return x + y
}
```

## 可选参数`?`
通过`?`表示该参数为可选参数
```ts
function add(x: number, y?: number): number {
  return y ? x + y : x;
}


const fn = (name: string, age?:number): string => {
    return name + age
}
fn('zs')
```

## 默认参数
```ts
function add(x: number, y: number = 20): number {
  return x + y;
}
add(10)  // 30
```

## 剩余参数
必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。 在 JavaScript 里，你可以使用 arguments 来访问所有传入的参数。

在 TypeScript 里，你可以把所有参数收集到一个变量里：

剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。
```ts
const fn1 = (array:number[],...items:any[]):any[] => {
    console.log(array,items)
    return items
}
let a:number[] = [1,2,3]
fn1(a,'4','5','6')  // [ 1, 2, 3 ] [ '4', '5', '6' ]


function info(x: string, ...args: string[]) {
  console.log(x, args);
}
info("abc", "c", "b", "a"); //abc [ 'c', 'b', 'a' ]
```

## 函数重载
重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
```ts
// 重载函数声明
function add (x: string, y: string): string
function add (x: number, y: number): number

// 定义函数实现
function add(x: string | number, y: string | number): string | number {
  // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y
  } else if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  }
}

console.log(add(1, 2))
console.log(add('a', 'b'))
// console.log(add(1, 'a')) // error
```
如果参数类型不同，则参数类型应设置为 any。
参数数量不同你可以将不同的参数设置为可选。
```ts
function fn(params: number): void
function fn(params: string, params2: number): void
function fn(params: any, params2?: any): void {
    console.log(params)
    console.log(params2)

}
fn(123)
fn('123',456)
```

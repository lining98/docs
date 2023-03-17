# 基本类型

## 字符串类型

```ts
// 普通声明
let a: string = '123'

// 也可以使用es6的字符串模板
let str: string = `ddd${a}`
```

## 数字类型

```ts
// 支持十六进制、十进制、八进制和二进制。
let notANumber: number = NaN //NaN
let num: number = 123.321 //普通数字
let infinityNumber: number = Infinity //无穷大
let decimal: number = 6 //十进制
let hex: number = 0xf00d //十六进制
let binary: number = 0b1010 //二进制
let octal: number = 0o744 //八进制s
```

## 布尔类型

```ts
let b1: boolean = true //可以直接使用布尔值
let b2: boolean = false //也可以通过函数返回布尔值

let b2: boolean = Boolean(1)
```

::: warning 注意
使用构造函数 Boolean 创造的对象不是布尔值

```ts
let createdBoolean: boolean = new Boolean(1)
```

这样会报错 应为事实上 new Boolean() 返回的是一个 Boolean 对象
:::

## 数组

TypeScript 像 JavaScript 一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：

```ts
let list: number[] = [1, 2, 3]
```

第二种方式是使用数组泛型，**Array<元素类型>**：

```ts
let list: Array<number> = [1, 2, 3]
```

## 元组 Tuple

元组类型允许表示一个已知**元素数量**和**类型**的数组，各元素的类型不必相同。如果一个方法需要返回多个值，可以把这多个值作为元组返回，而不需要创建额外的类来表示。

比如：可以定义一对值分别为**string**和**number**类型的元组。

```ts
let x: [string, number]
x = ['hello', 10] // OK
x = [10] // Error
x = [10, 'hello'] // Error
x = [10, 'hello', true] // Error
```

当赋值或访问一个已知索引的元素时，会得到正确的类型：

```ts
let arr: [number, string] = [1, 'string']
arr[0].length //error
arr[1].length //success

//数字是没有length 的
```

元组类型还可以支持自定义名称和变为可选的

```ts
let a: [x: number, y?: boolean] = [1]
```

## 枚举

**enum**类型是对 JavaScript 标准数据类型的一个补充。使用枚举类型可以为一组数值赋予友好的名字。

枚举的值可以是数字，也可以是字符串。

- 数字枚举

```ts
enum Types {
  Red = 1,
  Green = 2,
  Blue = 3
}
```

- 增长枚举

```ts
enum Types {
  Red = 3,
  Green, // 4
  Blue // 5
}
```

- 字符串枚举

```ts
enum Types {
  Red = 'red',
  Green = 'green',
  BLue = 'blue'
}
```

- 异构枚举

```ts
// 可以同时包含数字和字符串
enum Types {
  No = 'No',
  Yes = 1
}
```

## Any 任意类型

没有强制限定哪种类型，随时切换类型都可以 我们可以对 any 进行任何操作，不需要检查类型

```ts
let value: Any
value = true // OK
value = 42 // OK
value = 'Hello World' // OK
value = [] // OK
value = {} // OK
value = null // OK
value = undefined // OK
```

## Void

可以用 void 表示没有**任何返回值**的**函数**

```ts
function voidFn(): void {
  console.log('test void')
  // return // 不能带有return
}
```

void 也可以定义 undefined 和 null 类型

```ts
let n: void = null
let u: void = undefined
```

::: warning 注意
如果你配置了 tsconfig.json 开启了严格模式 **"strict": true**

那么 let n: void = null; 会报错

**null 不能 赋予 void 类型**
:::

## Null 和 Undefined

```ts
let u: undefined = undefined //定义undefined
let n: null = null //定义null
```

默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 或者 string 类型的变量，而 void 类型不可以分给其他类型。

```ts
//这样写会报错 void类型不可以分给其他类型
let test: void = undefined
let num1: string = '1'
num1 = test

//这样是没问题的
let test: null = null
let num1: number = 1
num1 = test
//或者这样的
let test: undefined = undefined
let num1: string = '1'
num1 = test
```

## Never

never 类型表示的是那些永不存在的值的类型。

```ts
// 返回never的函数必须存在无法达到的终点

// 因为必定抛出异常，所以 error 将不会有返回值
function error(message: string): never {
  throw new Error(message)
}

// 因为存在死循环，所以 loop 将不会有返回值
function loop(): never {
  while (true) {}
}
```

### Never 与 Void 的差异

```ts
//void类型只是没有返回值 但本身不会出错
function Void(): void {
  console.log()
}

//只会抛出异常没有返回值
function Never(): never {
  throw new Error('aaa')
}
```



## 联合类型
联合类型用`|`分隔，表示取值可以为多种类型中的一种
```ts
// a可以为数字或者布尔类型，不能为字符串类型，
// 因为定义的联合类型只有数字和布尔值并没有字符串
let a:num|boolean
a = 123    // 编译成功
a = false  // 编译成功
a = 'abc'  // 报错
```
函数中使用联合类型
```ts
// 定义一个一个函数得到一个数字或字符串值的长度
function getLength(x: number | string) {
  // return x.length // error
  if (x.length) { // error
    return x.length
  } else {
    return x.toString().length
  }
}
```

## 交叉类型
交叉类型就是跟联合类型相反，用`&`操作符表示，交叉类型就是两个类型必须存在
```ts
interface People {
  age: number,
  height： number
}
interface Man{
  sex: string
}
const p = (man: People & Man) => {
  console.log(man.age)
  console.log(man.height)
  console.log(man.sex)
}
p({age: 18,height: 180,sex: 'male'});
```

## 类型断言
通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript 会假设你，程序员，已经进行了必须的检查。

语法：
  - 方式一：值 as 类型　`value as string`
  - 方式二：<类型>值 `<string>value`
```ts
// 使用any临时断言
let someValue: any = "this is a string";

let strLength1:number = (<string>someValue).length
let strLength2:number = (someValue as string).length


/* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */
function getLength(x: number | string) {
  if ((<string>x).length) {
    return (x as string).length
  } else {
    return x.toString().length
  }
}
console.log(getLength('abcd'), getLength(1234))
```






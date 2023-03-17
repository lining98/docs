# 泛型

> 指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。

## 函数泛型

### 给函数加上类型

下面这是两个函数，除了类型的不同，实现的功能是一样的。

```ts
function num(a: number, b: number): Array<number> {
  return [a, b]
}
num(1, 2)

function str(a: string, b: string): Array<string> {
  return [a, b]
}
str('aa', 'bb')
```

### 使用泛型优化

语法为函数名字后面跟一个<参数名> 参数名可以随便写 例如我这儿写了 T

当我们使用这个函数的时候把参数的类型传进去就可以了 （也就是动态类型）

```ts
function Add<T>(a: T, b: T): Array<T> {
  return [a, b]
}
Add<number>(1, 2)
Add<string>('1', '2')

// 如果不传类型，那么typescript会类型推论
Add(true, false) // 默认T为boolean类型

Add(1, 'a') // 报错 因为只有一个参数T
```

### 多个泛型参数的函数

一个函数可以定义多个泛型参数

```ts
function swap<K, V>(a: K, b: V): [K, V] {
  return [a, b]
}
const result = swap<string, number>('abc', 123)
console.log(result[0].length, result[1].toFixed())
```

## 泛型接口

在定义接口时, 为接口中的属性或方法定义泛型类型 \
在使用接口时, 再指定具体的泛型类型

```ts
interface KeyValue<T,U> {
  key: T;
  value: U;
}

const person1:KeyValue<string,number> = {
  key: '树哥',
  value: 18
}
const person2:KeyValue<number,string> = {
  key: 20,
  value: '张麻子'
}
```

## 泛型类
在定义类时, 为类中的属性或方法定义泛型类型 在创建类的实例时, 再指定特定的泛型类型
```ts
class clacArray<T>{
    private arr:T[] = [];

    add(value:T){
        this.arr.push(value)
    }
    getValue():T{
        let res = this.arr[0];
        console.log(this.arr);
        return res;
    }
}
const res = new clacArray()
res.add(1)
res.add(2)
res.add(3)

res.getValue() // [1,2,3]
console.log(res.getValue()); // 1
```


## 泛型约束
我们期望在一个泛型的变量上面，获取其length参数，但是，有的数据类型是没有length属性的
```ts
// 没有泛型约束
function getLen<T>(arg:T) {
  return arg.length // error 类型“T”上不存在属性“length”。
}
```
我们可以使用泛型约束来实现
```ts
interface Len {
   length:number
}

function getLen<T extends Len>(arg:T) {
  return arg.length
}

getLen('123')
getLen(123) // error  number没有length属性
```


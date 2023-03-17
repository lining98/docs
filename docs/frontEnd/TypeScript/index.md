# 初识TypeScript
> [TypeScript中文网](https://www.tslang.cn/docs/home.html)

## TS是什么？
`TS`：是`TypeScript`的简称，是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。

## TS和JS的关系
对比于JS，TS是JS的**超集**，简单的说就是在 **JavaScript** 的基础上加入了类型系统，让每个参数都有明确的意义，从而带来了更加**智能**的提示。

相对于**JS**而言，**TS**属于**强类型**语言，所以对于项目而言，会使代码更加规范，从而解决了大型项目代码的复杂性，其次，浏览器是不识别**TS**的，所以在编译的时候，**TS**文件会先编译为**JS**文件。

## TS和JS的区别
- JavaScript 属于动态编程语言，而ts 属于静态编程语言。
    - js：边解释边执行，错误只有在运行的时候才能发现
    - ts：先编译再执行，在写的时候就会发现错误了（ts不能直接执行，需要先编译成 js ）
- ts 完全支持 js ，可以直接转换
- ts 有类型支持，有强大的代码类型提示


## TypeScript的优缺点
### 优点
- 增强代码的可维护性，尤其在大型项目的时候效果显著
- 友好地在编辑器里提示错误，编译阶段就能检查类型发现大部分错误
- 支持最新的JavaScript新特特性
- 周边生态繁荣，vue3已全面支持 typescript
### 缺点
- 需要一定的学习成本
- 和一些插件库的兼容并不是特别完美，如以前在 vue2 项目里使用 typescript就并不是那么顺畅
- 增加前期开发的成本，毕竟你需要写更多的代码（但是便于后期的维护）

## 安装
```bash
# 安装 typescript
npm install -g typescript
//或者
yarn global add typescript

# 查看版本
tsc -v

# 编译
tsc index.ts
indexts ==> index.js
```

升成tsconfig.json 配置文件
```bash
tsc --init
```

严格模式
```json
// 在tsconfig.json中
"strict": false,  // true为开启严格模式  false为关闭
```

## 监视编译和在node下运行typescript
### 一、使用tsc -w进行随时热更新watch
```bash
tsc -w
```
### 二、使用ts-node直接运行ts的node项目
首先全局安装ts-node
```bash
npm install -g ts-node
```
直接进行ts-node 启动文件名


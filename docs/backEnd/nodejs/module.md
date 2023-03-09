# 模块化

## 基本概念

### 什么是模块化

**概念**：

- 模块化是指解决一个复杂问题时，自顶向下逐层把系统划分为若干模块的过程，模块是可组合、分解和更换的单元。
- 模块化可提高代码的复用性和可维护性，实现按需加载。
- 模块的内部数据、实现是私有的, 只是向外部暴露一些接口(方法)与外部其它模块通信。
- 模块化规范是对代码进行模块化拆分和组合时需要遵守的规则，如使用何种语法格式引用模块和向外暴露成员。

### 模块化的好处

- 避免命名空间的冲突
- 提高代码的复用性
- 提高维护性
- 更好的分离，实现按需加载

## Nodejs 中模块化

### Node.js 中模块的分类

- 内置模块
- 自定义模块
- 第三方模块

### Node.js 中的模块作用域

- 和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域
- 防止全局变量污染

### 模块作用域的成员

- 自定义模块中都有一个 `module` 对象，存储了和当前模块有关的信息
- 在自定义模块中，可以使用 `module.exports` 对象，将模块内的成员共享出去，供外界使用。导入自定义模块时，得到的就是 `module.exports` 指向的对象。
- 默认情况下，`exports` 和 `module.exports` 指向同一个对象。最终共享的结果，以 `module.exports` 指向的对象为准。

### CommonJS 模块化规范

- 每个模块内部，`module` 变量代表当前模块
- `module` 变量是一个对象，`module.exports` 是对外的接口
- 加载某个模块即加载该模块的 `module.exports` 属性

### 模块加载机制

模块第一次加载后会被缓存，即多次调用 `require()` 不会导致模块的代码被执行多次，提高模块加载效率。

#### 内置模块加载

内置模块加载优先级最高。

#### 自定义模块加载

加载自定义模块时，路径要以 `./` 或 `../` 开头，否则会作为内置模块或第三方模块加载。

导入自定义模块时，若省略文件扩展名，则 Node.js 会按顺序尝试加载文件：

- 按确切的文件名加载
- 补全 `.js` 扩展名加载
- 补全 `.json` 扩展名加载
- 补全 `.node` 扩展名加载
- 报错

#### 第三方模块加载

- 若导入第三方模块， Node.js 会从**当前模块的父目录**开始，尝试从 `/node_modules` 文件夹中加载第三方模块。
- 如果没有找到对应的第三方模块，则移动到再**上一层父目录**中，进行加载，直到**文件系统的根目录**。

例如，假设在 `C:\Users\bruce\project\foo.js` 文件里调用了 `require('tools')`，则 Node.js 会按以下顺序查找：

- `C:\Users\bruce\project\node_modules\tools`
- `C:\Users\bruce\node_modules\tools`
- `C:\Users\node_modules\tools`
- `C:\node_modules\tools`

#### 目录作为模块加载

当把目录作为模块标识符进行加载的时候，有三种加载方式：

- 在被加载的目录下查找 `package.json` 的文件，并寻找 `main` 属性，作为 `require()` 加载的入口
- 如果没有 `package.json` 文件，或者 `main` 入口不存在或无法解析，则 Node.js 将会试图加载目录下的 `index.js` 文件。
- 若失败则报错

## npm 与包

### 包

Node.js 中的第三方模块又叫做**包**
不同于 Node.js 中的内置模块与自定义模块，包是由第三方个人或团队开发出来的，免费供所有人使用。Node.js 中的包都是免费且开源的。

- 由于 Node.js 的内置模块仅提供了一些底层的 API，导致在基于内置模块进行项目开发时，效率很低
- 包是基于内置模块封装出来的，提供了更高级、更方便的 API，极大提高了开发效率。
  可以从[npm 官网](https://www.npmjs.com/)中搜索自己所需要的包。

### npm 安装

在项目中安装包的命令

```bash
npm install 包的元整名称
或者
npm i 包的元整名称
```

现在也有其他的包管理工具，如 yarn、pnpm，
下载安装速度是比 npm 要快的

###　通过切换源解决 npm 的下包速度慢的问题

```bash
npm config get registry  # 查看当前包镜像源
npm config get registry=http:registry.npm.taobao.org/ # 切换源头
npm config get registry  # 检查镜像源是否下载成功
```

### 开发包

1. 注册 npm 账号
2. 初始化包的基本结构
   > 新建文件夹（包名），新建如下三个文件

- package.json (包管理配置文件)
- index.js (包的入口文件)
- README.md (包的说明文档)

```json
{
  "name": "package-name", //包的名称
  "version": "1.0.0", // 版本号
  "main": "index.js", // 入口文件 核心代码
  "description": "介绍包做的什么功能", // 描述
  "keywords": [
    // 关键字
    "xxx",
    "xx",
    "xxxx"
  ],
  "license": "ISC" // 开源协议
}
```

发布 npm publish

删除 npm unpublish 包名 --force

## 模块的加载机制

模块在第一次加载后会被缓存，多次调用 require()模块的代码只会被执行一次。不论是内置模块、用户自定义模块、还是第三方模块，他们都会优先从缓存中加载，从而提高模块的加载效率。

### 内置模块的加载机制

- **内置模块的加载优先级最高**

### 自定义模块的加载机制

- 使用 require()加载自定义模块时，**必须指定以./或../开头的路径标识符**。在加载自定义模块时，如果没有指定./或../这样的路径标识符，则 node 会把它当作内置模块或第三方模块进行加载。
- 在使用 require()导入自定义模块时，如果省略了文件的扩展名，Nodejs 会按顺序分别尝试加载以下的文件
  > a. 按照确切的文件名进行加载
  >
  > b. 补全.js 扩展名进行加载
  >
  > c. 补全.json 扩展名进行加载
  >
  > d. 补全.node 扩展名进行加载
  >
  > e. 加载失败，终端报错

### 第三方模块的加载机制

- 如果传递给 require()的模块标识符不是一个内置模块，也没有以./或../开头，则 Nodejs 会从当前模块的父目录开始，尝试从/node_modules 文件夹中加载第三方模块
- 如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录
- 假设在'C:\Users\lemomn\project\node_modules\a.js'里调用 require('tools')，Node.js 会按以下顺序查找
  > a. C:\Users\lemomn\project\node_modules\tools
  >
  > b. C:\Users\lemomn\node_modules\tools
  >
  > c. C\Users\node_modules\tools
  >
  > d. C:\node_modules\tools
  >
  > e．报错

### 目录作为模块

- 当把目录作为模块标识符，传递给 require()进行加载的时候，有三种加载方式
  > a. 在被加载的目录下查找一个叫做 package.json 的文件，并寻找 main 属性值作为 require()加载的入口
  >
  > b. 如果目录里没有 package.json 文件，或者 main 入口不存在或无法解析，则 Node,js 将会试图加载目录下的 index.js 文件
  >
  > c. 如果以上两步都失败了，则 Node.js 会在终端打印错误消息，报告模块的缺失:Error: Cannot find module 'xxx'

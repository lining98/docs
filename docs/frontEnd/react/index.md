# React - 用于构建现代 Web 应用程序的 JavaScript 库

> [官方网址](https://zh-hans.react.dev/)

## 简介

React 是由 Facebook 开源的 JavaScript 库，用于构建用户界面。它是一个非常受欢迎的前端库，广泛应用于构建现代、响应式、可复用的 Web 应用程序。React 采用了组件化的开发模式，使得我们可以将 UI 拆分为独立的、可复用的组件，从而使代码结构更加清晰和易于维护。React 提供了一种声明式的编程风格，使得开发者可以专注于描述 UI 的外观和行为，而不用关心底层 DOM 操作。

## React 的优势

### 1. 组件化开发

React 引入了组件化开发的概念，将复杂的用户界面划分为独立的组件，每个组件具有自己的状态和行为。这种组件化的开发模式使得代码更易于维护、复用和测试。开发者可以将大型应用程序拆分为小的、独立的组件，每个组件负责特定的功能，从而降低了代码的耦合度，提高了代码的可读性和可维护性。

### 2. 虚拟 DOM 技术

React 采用了虚拟 DOM 技术，它在内存中维护了一个虚拟的 DOM 树，用于表示真实 DOM 的结构。当组件的状态发生变化时，React 会通过比较新旧虚拟 DOM 树的差异，找出需要更新的部分，并最小化地更新真实 DOM，从而提高了页面的渲染效率。虚拟 DOM 技术使得 React 可以实现高效的页面更新，减少了不必要的 DOM 操作，提高了页面的性能和响应速度。

### 3. 单向数据流

React 采用了单向数据流的数据管理模式，即数据只能从父组件流向子组件，子组件无法直接修改父组件的数据。这种单向数据流的模式使得数据流动更加可控，减少了数据的混乱和不一致，从而提高了应用程序的可维护性和稳定性。

### 4. 生态系统丰富

React 拥有一个庞大的生态系统，有众多优秀的第三方库和工具，可以帮助开发者更高效地构建 Web 应用程序。比如 React Router 用于实现前端路由，Redux 用于管理应用程序的状态，Axios 用于发送网络请求等。这些工具的存在使得我们可以更加专注于业务逻辑的实现，而无需重复造轮子。

## 核心概念

在学习 React 时，我们需要掌握以下几个核心概念：

### 1. 组件（Components）

组件是 React 中最重要的概念之一，它是构建用户界面的基本单元。每个组件封装了特定的功能和状态，可以在其他组件中重复使用。组件可以是函数组件或类组件，函数组件是一种简单的声明式组件，类组件具有更多的功能，如生命周期方法和状态管理。

在 React 中，组件可以接受输入的数据，称为 props（属性），并返回一个描述 UI 外观的 React 元素。通过组合多个组件，我们可以构建复杂的用户界面。

### 2. JSX（JavaScript XML）

JSX 是一种类似 HTML 的语法扩展，允许在 JavaScript 代码中编写类似 HTML 的标记。通过 JSX，我们可以以一种更直观的方式描述组件的结构和样式，使得代码更易读和理解。在 React 中，JSX 会被转换成对应的 React 元素，从而渲染到页面上。

### 3. Props（属性）

Props 是 React 中用于组件之间通信的机制。通过 props，父组件可以向子组件传递数据或方法。这种单向数据流的机制使得 React 组件更加可预测和易于维护。在子组件中，我们可以通过 props 来访问传递过来的数据，并根据数据进行相应的渲染和逻辑处理。

### 4. State（状态）

State 是 React 组件内部管理的可变数据。当组件的状态发生变化时，React 会自动重新渲染组件以反映最新的状态。状态是类组件中的一个特殊对象，可以通过 this.state 来访问和更新。通过状态管理，我们可以实现用户界面的交互和动态变化。

### 5. 生命周期

React 组件具有不同的生命周期阶段，包括组件的挂载、更新和卸载阶段。在这些生命周期方法中，我们可以执行特定的操作，如初始化组件、发送网络请求、清理资源等。生命周期方法允许我们在组件不同阶段执行相应的逻辑，从而更好地控制组件的行为和状态。

### 6. 事件处理

React 允许处理用户的交互事件，如点击、输入等，并对其进行响应。通过事件处理函数，我们可以执行特定的操作，如更新组件的状态、发送网络请求、处理用户输入等。在 React 中，事件处理和原生 DOM 事件处理非常相似，但语法上更加简洁和易读。

### 7. 条件渲染

条件渲染是根据条件来决定是否渲染组件或显示不同的内容。通过条件语句（如 if 和三元表达式）来控制组件的渲染逻辑。条件渲染使得我们可以根据不同的情况展示不同的 UI，实现动态和灵活的界面展示。

### 8. 列表渲染

在 React 中，我们可以使用 map 方法遍历数组，并将数组的每个元素渲染成相应的组件。列表渲染允许动态地渲染多个相同类型的组件，实现列表展示的功能。通过列表渲染，我们可以轻松地展示数据列表，如商品列表、评论列表等。

### 9. 表单处理

处理用户输入的表单数据是常见的任务。在 React 中，我们可以通过对表单元素的事件监听和状态更新，来收集用户的输入并实时更新组件的状态。React 提供了一些方便的组件来处理表单数据，如 input、textarea、select 等。

### 10. 状态提升

状态提升是一种在 React 中共享状态的技术，允许将共享的状态提升到共同的父组件，实现组件之间的数据共享。通过状态提升，我们可以在多个组件之间共享数据和状态，并保持数据的一致性和同步性。

### 11. 高阶组件（HOC）

高阶组件是一个函数，用于在 React 中实现组件的复用逻辑。HOC 可以增强组件的功能，使得代码更具可复用性和灵活性。通过 HOC，我们可以将通用的逻辑封装成函数，然后将该函数应用到多个组件中，从而实现组件的复用。

### 12. 上下文（Context）

React 的上下文允许在组件树中共享数据，而不必通过 props 一层层传递。上下文提供了一种便捷的方式来在组件之间共享数据，尤其对于跨多层级的组件共享数据非常有用。然而，上下文的使用需要谨慎，避免滥用，以免影响代码的可维护性和可读性。

### 13. Hooks

Hooks 是 React 16.8 引入的新特性，用于在函数组件中添加状态、副作用和其他 React 特性。通过 Hooks，我们可以在函数组件中使用类组件的功能，如状态管理、生命周期方法等，从而使函数组件在功能上更接近类组件，同时避免了类组件的一些问题，如 this 指向和生命周期混乱等。

## React 环境搭建

利用 React 来写一个 Hello World

### react.js 和 react-dom.js

为了通过 React 写一个 Hello World 程序，我们需要先安装几个包：

- react.js: React 的核心库。这个包，是专门用来创建 React 组件、组件生命周期等。

- react-dom.js: 操作 DOM 的扩展库。这个包，主要封装了和 DOM 操作相关的包（比如，把组件渲染到页面上）。

- babel.min.js: 将 JSX 语法 解析为 纯 JS 语法代码。

### 方式一：本地引入相关的 js 库

入门的时候，我们建议采取方式一。

如果是本地引入的话，可以这样写：

```html
<!-- 引入React相关的js库 -->
<script type="text/javascript" src="./libs/react.js"></script>
<script type="text/javascript" src="./libs/react-dom.js"></script>
<script type="text/javascript" src="./libs/babel.min.js"></script>
```

如果是通过 CDN 的方式引入的话，可以使用网站 <https://www.bootcdn.cn/> 提供的 CDN 链接。

**完整代码举例**：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- 引入React相关的js库 -->
    <script type="text/javascript" src="./libs/react.js"></script>
    <script type="text/javascript" src="./libs/react-dom.js"></script>
    <script type="text/javascript" src="./libs/babel.min.js"></script>

    <div id="myContainer"></div>

    <!-- 注意，这一行的 type 是写 "text/babel"，而不是 "text/javascript" -->
    <script type="text/babel">
      //页面中的真实容器元素
      var containDiv = document.getElementById('myContainer')

      //1、创建虚拟DOM对象
      var vDom = <div>Hello, React!</div> // 不是字符串, 不能加引号

      //2、渲染虚拟DOM对象（将虚拟DOM对象渲染到页面元素中）
      ReactDOM.render(vDom, containDiv) // 参数1：虚拟DOM对象；参数2：页面中的容器
    </script>
  </body>
</html>
```

代码运行后，页面上的 DOM 结构如下：

```html
<div id="myContainer">
  <div>Hello, React!</div>
</div>
```

**代码解释**：

render 的中文含义是“渲染”。render 方法的语法如下：

```js
	ReactDOM.render(要渲染的虚拟DOM对象, 容器 container：要渲染到页面上的哪个位置);
```

### 方式二：脚手架

使用 vite 创建

```shell
npm init vite@latest
```

- 选择 React

main.jsx:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

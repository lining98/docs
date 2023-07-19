# Vue.js

## 简介

Vue.js 是一套用于构建用户界面的渐进式 JavaScript 框架。它允许您将应用程序划分为可复用的组件，并以声明式的方式构建数据驱动的 UI。

## 开始

### 安装 Vue.js

您可以通过直接引入 Vue.js 脚本文件或使用 npm（Node Package Manager）安装 Vue.js。

```html
<!-- 直接引入Vue.js脚本 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
```

或者

```bash
# 使用npm安装Vue.js
npm install vue
```

### 第一个 Vue.js 应用

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Vue App</title>
  </head>
  <body>
    <div id="app">{{ message }}</div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          message: 'Hello, Vue.js!'
        }
      })
    </script>
  </body>
</html>
```

## 数据绑定

### 插值表达式

使用双花括号（Mustache 语法）进行数据插值，将数据绑定到 HTML 模板中。

```html
<div>
  <p>{{ message }}</p>
</div>
```

### 指令

Vue.js 提供了一些指令，用于在模板中实现特定的行为。

- `v-bind`：将元素属性与 Vue 实例的数据绑定。

```html
<img v-bind:src="imageSrc" />
```

- `v-on`：用于监听 DOM 事件，并在触发时执行相应的方法。

```html
<button v-on:click="handleClick">Click Me</button>
```

## 条件渲染

### `v-if` 和 `v-else`

根据条件渲染元素。

```html
<div v-if="isVisible">This is visible.</div>
<div v-else>This is hidden.</div>
```

### `v-show`

根据条件显示或隐藏元素。

```html
<div v-show="isVisible">This is visible.</div>
```

## 列表渲染

### `v-for`

循环渲染列表中的元素。

```html
<ul>
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</ul>
```

## 事件处理

使用`v-on`指令监听 DOM 事件，并执行相应的方法。

```html
<button v-on:click="handleClick">Click Me</button>
```

```javascript
new Vue({
  methods: {
    handleClick() {
      alert('Button clicked!')
    }
  }
})
```

## 表单输入绑定

使用`v-model`指令实现表单输入和 Vue 实例数据的双向绑定。

```html
<input v-model="message" type="text" />
```

## 组件

### 定义组件

```javascript
// 定义一个名为 'my-component' 的组件
Vue.component('my-component', {
  template: '<div>{{ message }}</div>',
  data() {
    return {
      message: 'Hello, I am a component!'
    }
  }
})
```

### 使用组件

```html
<div id="app">
  <my-component></my-component>
</div>
```

## 生命周期钩子

| 钩子函数      | 阶段                    | 描述                                                                                        |
| ------------- | ----------------------- | ------------------------------------------------------------------------------------------- |
| beforeCreate  | 创建前                  | 在实例被创建之前调用。此时，组件的数据观察和事件还未初始化。                                |
| created       | 创建后                  | 在实例创建完成后调用。可以在这里进行数据初始化、调用异步请求等操作，但模板还未被编译/渲染。 |
| beforeMount   | 挂载前                  | 在模板编译/渲染之前调用。此时，模板已经编译完成，但尚未将其挂载到 DOM 中。                  |
| mounted       | 挂载后                  | 在模板编译/渲染之后调用。此时，组件已经被挂载到 DOM 中，可以进行 DOM 操作等。               |
| beforeUpdate  | 数据更新前              | 在数据更新之前调用，发生在重新渲染之前。可以在此处进行状态更新前的准备工作。                |
| updated       | 数据更新后              | 在数据更新之后调用，发生在重新渲染之后。可以在此处执行依赖于更新后 DOM 的操作。             |
| beforeDestroy | 销毁前                  | 在实例销毁之前调用。可以在此处进行清理工作，如清除定时器、解绑事件等。                      |
| destroyed     | 销毁后                  | 在实例销毁之后调用。此时，组件已经解除绑定的所有数据监听器，可以执行一些销毁后的清理工作。  |
| activated     | 激活（keep-alive 组件） | 在使用`<keep-alive>`包裹的组件激活时调用。                                                    |
| deactivated   | 停用（keep-alive 组件） | 在使用`<keep-alive>`包裹的组件停用时调用。                                                    |
| errorCaptured | 错误捕获                | 在子孙组件抛出错误时被调用，用于处理错误。                                                  |

# vuex

> Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它是一个集中式的状态管理库，用于管理 Vue.js 应用中的共享状态（state）。在大型应用程序中，组件之间的数据共享和通信可能变得复杂，Vuex 提供了一种可预测的方式来管理状态，并且使得状态的变化变得可追踪。

## 核心概念

1. **State（状态）**：在 Vuex 中，状态即应用程序中需要共享的数据。它类似于组件的 data，但是不限于某个组件，而是存储在 Vuex 的全局状态树中，使得不同组件可以共享和访问这些数据。

2. **Getters（获取器）**：Getters 用于从 Vuex 的全局状态中派生出一些状态。类似于组件的计算属性（computed），但是 Getters 可以被多个组件共用，避免重复逻辑代码。

3. **Mutations（变更）**：Mutations 是 Vuex 中唯一允许修改状态的地方。它们类似于事件，每个 Mutation 都有一个字符串的事件类型和一个回调函数，在回调函数中进行实际的状态修改操作。

4. **Actions（动作）**：Actions 用于提交 Mutations，而不是直接变更状态。Actions 可以包含任意异步操作，然后再通过提交 Mutations 来改变状态。

5. **Modules（模块）**：当应用的状态较为复杂时，可以使用 Modules 将状态分割成多个子模块，每个子模块有自己的 state、getters、mutations 和 actions。这样可以更好地组织和管理状态，使代码结构更清晰。

## 优点

- **集中式管理**：所有的状态都集中在 Vuex 的 store 中，方便开发者进行状态的调试和追踪。

- **组件通信**：可以轻松实现跨组件的状态共享和通信，避免了传统的 Props 和 Events 的繁琐操作。

- **可预测性**：由于状态的变更必须通过 Mutations 来进行，使得状态变更变得可追踪和可预测。

- **插件支持**：Vuex 支持插件，可以方便地扩展和定制 Vuex 的功能。

## 使用

1. 安装 Vuex：使用 npm 或 yarn 安装 Vuex 库。在终端中运行以下命令：

   ```
   npm install vuex
   或
   yarn add vuex
   ```

2. 创建一个 Vuex 的 store：在应用的根目录（通常是 src 目录）下创建一个名为 store.js 的文件，用于创建 Vuex 的 store。在该文件中，需要引入 Vue 和 Vuex，并创建一个新的 Vuex.Store 实例。可以设置 state、mutations、actions、getters 等。

   ```javascript
   import Vue from 'vue'
   import Vuex from 'vuex'

   Vue.use(Vuex)

   const store = new Vuex.Store({
     state: {
       // 状态定义
     },
     mutations: {
       // 状态修改
     },
     actions: {
       // 异步操作
     },
     getters: {
       // 获取状态
     }
   })

   export default store
   ```

3. 将 store 与 Vue 应用关联：在 Vue 应用的入口文件（通常是 main.js）中，导入 store 并将其关联到 Vue 实例中。这样，整个应用的组件都可以通过 this.$store 来访问 Vuex 的 store。

   ```javascript
   import Vue from 'vue'
   import App from './App.vue'
   import store from './store'

   new Vue({
     store,
     render: (h) => h(App)
   }).$mount('#app')
   ```

4. 在组件中使用 Vuex：在组件中，可以通过计算属性（computed）或者方法（methods）来访问和修改 Vuex 的状态。可以使用 this.$store 来访问 store 中的 state、getters、mutations 和 actions。

   ```javascript
   // 通过计算属性获取状态
   computed: {
     count() {
       return this.$store.state.count
     },
     // 通过getters获取状态
     doubleCount() {
       return this.$store.getters.doubleCount
     }
   },
   // 通过方法修改状态
   methods: {
     increment() {
       this.$store.commit('increment')
     },
     // 通过actions进行异步操作
     async fetchData() {
       await this.$store.dispatch('fetchData')
     }
   }
   ```

## Mutations 的使用

当使用 Vuex 时，通常会将状态的修改拆分为两个部分：mutations 和 actions。

Mutations 用于同步地修改状态。它们是唯一允许直接修改状态的地方，而且是一个纯函数（不应该有副作用）。通常，在组件中通过 commit 调用 mutations 中的方法来修改状态。

假设我们有一个简单的计数器应用，以下是使用 mutations 的例子：

```javascript
// store.js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  }
})

// 组件中的代码
methods: {
  increment() {
    this.$store.commit('increment')
  },
  decrement() {
    this.$store.commit('decrement')
  }
}
```

在上面的例子中，我们在 store 中定义了 count 状态和两个 mutations：increment 和 decrement。在组件中，我们通过调用`this.$store.commit`来分别触发 increment 和 decrement mutations，从而修改 count 状态。

## Actions 的使用

Actions 用于处理异步操作，并且可以包含任意异步代码。它们不直接修改状态，而是通过调用 mutations 来间接修改状态。通常，在组件中通过 dispatch 调用 actions 中的方法。

继续上面的计数器应用，假设我们需要在点击增加按钮后，延迟 1 秒再修改状态，以下是使用 actions 的例子：

```javascript
// store.js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    incrementAsync(context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    }
  }
})

// 组件中的代码
methods: {
  incrementAsync() {
    this.$store.dispatch('incrementAsync')
  }
}
```

在上面的例子中，我们在 store 中新增了一个 actions：incrementAsync。在组件中，我们通过调用`this.$store.dispatch`来触发 incrementAsync action。当点击按钮后，incrementAsync action 会延迟 1 秒钟，然后通过 commit 调用 mutation 中的 increment 方法来修改 count 状态。
::: tip
通过使用 actions，我们可以在异步操作中进行数据请求、API 调用等，并在操作完成后通过调用 mutations 来修改状态，保持了状态的变更流程的一致性和可追踪性。
:::

## getters 的使用

Getters 用于派生出 Vuex store 中的状态（state），类似于组件的计算属性（computed），但是 Getters 可以被多个组件共用，避免了重复逻辑代码。Getters 可以对 state 进行处理和过滤，返回一个新的衍生状态，而不改变原始状态。

以下是一个使用 Getters 的示例：

```javascript
// store.js
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: 'Buy groceries', done: false },
      { id: 2, text: 'Go for a run', done: true },
      { id: 3, text: 'Read a book', done: false }
    ]
  },
  getters: {
    // 获取所有的todos
    allTodos: state => {
      return state.todos
    },
    // 获取未完成的todos
    unfinishedTodos: state => {
      return state.todos.filter(todo => !todo.done)
    },
    // 获取特定id的todo
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})

// 组件中的代码
computed: {
  todos() {
    // 获取所有的todos
    return this.$store.getters.allTodos
  },
  unfinishedTodos() {
    // 获取未完成的todos
    return this.$store.getters.unfinishedTodos
  },
  getTodoById() {
    // 获取特定id的todo
    return this.$store.getters.getTodoById(1) // 传入id
  }
}
```

在上面的例子中，我们在 store 中定义了三个 Getters：allTodos、unfinishedTodos 和 getTodoById。在组件中，我们可以通过`this.$store.getters`来获取这些 Getters 的值。

- `allTodos`：返回所有的 todos 数组。
- `unfinishedTodos`：返回未完成的 todos，使用 filter 方法过滤出 done 为 false 的 todo 项。
- `getTodoById`：这是一个带参数的 Getters，在组件中调用时需要传入一个 id，返回对应 id 的 todo 项。

::: tip
通过使用 Getters，我们可以在组件中直接获取和使用派生状态，而无需重复编写数据处理逻辑。这样使得组件的代码更加简洁、可维护性更高，并且 Getters 能够保持响应式，当 state 发生变化时，Getters 也会相应地更新。
:::

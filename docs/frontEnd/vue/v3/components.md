# Vue3 深入组件

## 注册

### 全局组件

在 main.ts 引入组件跟随在 createApp(App) 后面，切记不能放到 mount 后面

```js
//main.js
import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from './components/MyComponent.vue'

createApp(App).component('MyComponent', MyComponent).mount('#app')
```

用法

> 直接在其他 vue 页面 立即使用即可 无需引入

```vue
<template>
  <MyComponent></MyComponent>
</template>
// 或者
<template>
  <MyComponent />
</template>
```

<!-- ### 批量注册全局组件 -->

### 局部组件

局部注册的组件需要在使用它的父组件中显式导入，并且只能在该父组件中使用。它的优点是使组件之间的依赖关系更加明确，并且对 tree-shaking 更加友好。

在使用 `<script setup>` 的单文件组件中，导入的组件可以直接在模板中使用，无需注册：

```vue
<script setup>
import ComponentA from './ComponentA.vue'
</script>

<template>
  <ComponentA />
</template>
```

## 父子组件传参

- 父组件通过 v-bind 绑定一个数据，然后子组件通过 defineProps 接受传过来的值
- 传递非字符串类型需要加 v-bind 简写 冒号

父组件

```vue
<template>
  <div class="layout">
    <Menu :data="data" title="我是标题"></Menu>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>
```

子组件接受值

- 通过`defineProps`来接受， **`defineProps`是无须引入的直接使用即可**

```vue
<template>
  <div class="menu">
    菜单区域 {{ title }}
    <div>{{ data }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  data: number[]
}>()
</script>

// 非ts
<script setup>
defineProps({
  title: {
    default: '',
    type: string
  },
  data: Array
})
</script>
```

## 插槽

### 匿名插槽

在子组件放置一个插槽

```vue
// Child.vue
<template>
  <div>child</div>
  <slot></slot>
</template>
```

父组件使用插槽

在父组件给这个插槽填充内容

```vue
<template>
  <Child>
    <template v-slot>
      <div>abcde</div>
    </template>
  </Child>
</template>

<script setup lang="ts">
import Child from './Child.vue'
</script>
```

### 具名插槽

具名插槽其实就是给插槽取个名字。一个子组件可以放多个插槽，而且可以放在不同的地方，而父组件填充内容时，可以根据这个名字把内容填充到对应插槽中

```html
<div>
  <slot name="content" msg="this is a message"></slot>
  <slot name="footer"></slot>
</div>
```

父组件使用需对应名称

```vue
<template>
  <div>
    <p>父组件</p>
    <Child>
      <template v-slot:content="{ msg }">
        <div>{{ msg }}</div>
      </template>
      <template v-slot:footer>
        <div>footer</div>
      </template>
    </Child>
  </div>
</template>

<script lang="ts" setup>
import Child from './Child.vue'
</script>
```

简写

```html
<Child>
  <template #content="{ msg }">
    <div>{{ msg }}</div>
  </template>
  <template #footer>
    <div>footer</div>
  </template>
</Child>
```

### 作用域插槽

插槽内容可以访问到父组件的数据作用域，因为插槽内容本身是在父组件模板中定义的。

在子组件**动态绑定**参数 派发给父组件的 slot 去使用

```html
<span>{{ message }}</span>
<FancyButton>{{ message }}</FancyButton>
```

这里的两个 `{{ message }}` 插值表达式渲染的内容都是一样的。
::: tip
父组件模板中的表达式只能访问父组件的作用域；子组件模板中的表达式只能访问子组件的作用域。
:::

### 动态插槽

插槽可以是一个变量名

```vue
<template>
  <div>
    <p>父组件</p>
    <Child>
      <template #[name]>
        <div>1234</div>
      </template>
    </Child>
  </div>
</template>

<script lang="ts" setup>
const name = ref('header')
</script>
```

## 异步组件
在大型应用中，需要将应用分割成小一些的代码块，并且减少主包的体积。

通过 `defineAsyncComponent` 异步加载

```vue
<template>
  <Children :msg="msg" :list="list" @changeMsg="changeMsg"></Children>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue'
// import Children from './Children.vue'
const Children = defineAsyncComponent(() => import('./Children.vue'))
</script>
```

## Suspense
Suspense 允许应用程序在等待异步组件时渲染一些其它内容,在 Vue2 中，必须使用条件判断(例如 v-if、 v-else等)来检查数据是否已加载并显示一些其它内容；但是，在 Vue3 新增了 Suspense 了，就不必跟踪何时加载数据并呈现相应的内容。

`<suspense>` 组件有两个插槽。它们都只接收一个直接子节点。`default` 插槽里的节点会尽可能展示出来。如果不能，则展示 `fallback` 插槽里的节点。
```vue
<template>
  <Suspense>
    <template #default>
      <!-- 异步组件-默认渲染的页面 -->
      <Children :msg="msg" :list="list" @changeMsg="changeMsg"></Children>
    </template>
    <template #fallback>
      <!-- 页面还没加载出来展示的页面 -->
      <div>loading...</div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue'
const Children = defineAsyncComponent(() => import('./Children.vue'))
</script>
```

## Teleport 传送组件
Teleport 是一种能够将我们的模板渲染至指定DOM节点，不受父级style、v-show等属性影响，但data、prop数据依旧能够共用的技术；类似于 React 的 Portal。

主要解决的问题 因为Teleport节点挂载在其他指定的DOM节点下，完全不受父级style样式影响。

使用： 通过to 属性插入到指定元素位置，如 body，html，自定义className等等。
```vue
<template>
  <!-- 插入至 body -->
  <Teleport to="body">
    <Children></Children>
  </Teleport>
  <!-- 默认 #app 下 -->
  <Children></Children>
</template>
<script lang="ts" setup>
import Children from './Children.vue'
</script>
```



## Keep-alive 缓存组件
>事件挂载的方法等，只执行一次的放在 onMounted中；组件每次进去执行的方法放在 onActivated中
- 作用和vue2一致，只是生命周期名称有所更改
- 初次进入时： onMounted> onActivated
- 退出后触发 deactivated
- 再次进入：只会触发 onActivated
```html
<!-- 基本 -->
<keep-alive>
  <component :is="view"></component>
</keep-alive>

<!-- 多个条件判断的子组件 -->
<keep-alive>
  <comp-a v-if="a > 1"></comp-a>
  <comp-b v-else></comp-b>
</keep-alive>

<!-- 和 `<transition>` 一起使用 -->
<transition>
  <keep-alive>
    <component :is="view"></component>
  </keep-alive>
</transition>
```

## provide/inject
provide 可以在祖先组件中指定我们想要提供给后代组件的数据或方法，而在任何后代组件中，我们都可以使用 inject 来接收 provide 提供的数据或方法。

父组件
```vue
<template>
  <Children></Children>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import Children from "./Children.vue"

const msg = ref('hello 啊，树哥')

provide('msg', msg)
</script>
```
子组件
```vue
<template>
  <div>
    <p>msg：{{msg}}</p>
    <button @click="onChangeMsg">改变msg</button>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref, ref } from 'vue'

const msg = inject<Ref<string>>('msg',ref('hello啊！'))
const onChangeMsg = () => {
  msg.value = 'shuge'
}
</script>
```
::: tip
如果传递普通的值**是不具有响应式的**，需要通过ref reactive 添加响应式。
:::


## v-model 升级
> 在Vue3 v-model 是破坏性更新的
>
> v-model 是props 和 emit 组合而成的语法糖,vue3中 v-model 有以下改动

- 变更：value => modelValue
- 变更：update:input => update:modelValue
- 新增：一个组件可以设置多个 v-model
- 新增：开发者可以自定义 v-model修饰符
- v-bind 的 .sync 修饰符和组件的 model 选项已移除

父组件
```vue
<template>
  // v-model:modelValue简写为v-model
  // 绑定多个v-model
  <Children v-model="name" v-model:msg="msg"></Children>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Children from "./Children.vue"

const msg = ref('hello啊')
const name = ref('张三')
</script>
```
子组件
```vue
<template>
  <div>
    <p>{{msg}}，{{modelValue}}</p>
    <button @click="onChangeMsg">改变msg</button>
  </div>
</template>

<script setup lang="ts">

type Props = {
  modelValue: string,
  msg: string
}
defineProps<Props>()
const emit = defineEmits(['update:modelValue', 'update:msg'])

const onChangeMsg = () => {
  // 触发父组件的值更新
  emit('update:modelValue', '哈哈哈')
  emit('update:msg', '嘿嘿嘿')
}
</script>
```


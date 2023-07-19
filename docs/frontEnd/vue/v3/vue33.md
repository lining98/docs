# vue3.3 新特性

## defineProps

- 父组件

```vue
<template>
  <div>
    <h1>Home</h1>
    <Child :name="['zhangsan', 'lisi']" />
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue'
</script>

<style></style>
```

- 子组件(Child.vue)

```vue
<script setup lang="ts">
// const props =  defineProps({
//     name:{
//         type:Array,
//         required:true
//     }
// })
// props.name  // (property) name: unknown[]

const props = defineProps<{
  name: string[]
}>()
props.name // (property) name: string[]
</script>
```

- `vue3.3` 对 defineProps 的改进 新增泛型支持，需要在 script 标签上加上 generic="T"。

```vue
<template>
  <div>
    {{ name }}
  </div>
</template>

<script generic="T" setup lang="ts">
defineProps<{
  name: T[]
}>()
</script>
```

## defineEmits

- 父组件

```vue
<template>
  <div>
    <h1>Home</h1>
    <Child @send="getName" />
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue'

const getName = (name: string) => {
  console.log(name)
}
</script>
```

- 子组件(Child.vue)

普通写法

```vue
<template>
  <div>
    <button @click="send">派发</button>
  </div>
</template>

<script setup lang="ts">
// 普通的写法 定义一个数组
const emits = defineEmits(['send'])

const send = () => {
  emits('send', 'Hello,普通写法')
}
</script>
```

ts 写法

```vue
<script setup lang="ts">
// ts写法
const emits = defineEmits<{
  (event: string, name: string): void
}>()

const send = () => {
  emits('send', 'hello,ts写法')
}
</script>
```

vue3.3 改进

```vue
<script setup lang="ts">
// vue3.3改进
const emits = defineEmits<{
  send: [name: string]
}>()

const send = () => {
  emits('send', 'hello,vue3.3改进')
}
</script>
```

## defineOptions

- 主要是用来定义 Options API 的选项

```vue
<script setup lang="ts">
// vue3.3 内置了defineOptions，不需要再去下载插件了
// 它里面的属性跟optionsAPI一模一样的
// 常用的属性定义name
defineOptions({
  name: 'Child',
  inheritAttrs: false
})
</script>
```

::: tip
常用的就是定义 name 在 seutp 语法糖模式发现 name 不好定义了需要在开启一个 script 自定义 name 现在有了 defineOptions 就可以随意定义 name 了
:::

## defineSlots

用来约束 slot

- 父组件

```vue
<template>
  <div>
    <Child :data="list">
      <template #default="{ item }">
        {{ item.name }}
      </template>
    </Child>
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue'

const list = [
  { name: '张三', age: 18 },
  { name: '李四', age: 19 }
]
</script>
```

- 子组件

```vue
<template>
  <div>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <slot :item="item" :index="index"></slot>
      </li>
    </ul>
  </div>
</template>

<script generic="T" setup lang="ts">
// defineSlots 只有声明没有实现，没有任何参数。只能接收ts的类型
// 约束slot
defineProps<{
  data: T[]
}>()
defineSlots<{
  default(props: { item: T; index: number }): void
}>()
</script>
```

# vue3 API

> 在 vue3.2 中，我们只需在`script`标签中添加`setup`。就可以做到，组件只需引入不用注册，属性和方法也不用 return 才能于 template 中使用，也不用写`setup`函数，也不用写**export default** ，甚至是自定义指令也可以在我们的`template`中自动获得。
>
> 本篇内容基于`setup`语法糖下进行。

## setup

1. 理解：Vue3.0 中一个新的配置项，值为一个函数。
2. setup() 函数是 Vue3 新增的一个选项，它是组合式 API 的统一入口，简单来说，就是所有的 **CompositionAPI** 新特性都应该写在这个函数内部。
3. 组件中所用到的：数据、方法等等，均要配置在 setup 中。

```vue
<template>
  <div>{{ message }}</div>
</template>

<script setup lang="ts">
  const message = '我是小满'
</script>
```

## ref 和 reactive

- `ref()` 函数用来根据给定的值创建一个响应式的数据对象，`ref()` 函数调用的返回值是一个对象，这个对象上只包含一个 `value` 属性, 只在setup函数内部访问`ref`函数需要加`.value`，其用途创建独立的原始值
- `reactive()` 函数接收一个普通对象，返回一个响应式的数据对象,

> ref其实也是内部调用 reactive 来实现的

```vue
<template>
  <div>
    <div>count1: {{count1}}</div>
    <div>count2: {{count2.val}}</div>
    <div>count3: {{count3.val}}</div>
    <button @click="add">按钮</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
    const count1 = ref(0);
    const count2 = ref({ val: 10 });

    // reactive只能接收引用类型, Object、Array...
    const count3 = reactive({ val: 100 });

    function add() {
      count1.value++;
      count2.value.val++;
      count3.val++;
    }
</script>

```
::: tip 提示
- template 模板中使用的数据和方法，都需要通过 setup 函数 return 出去才可以被使用。
- ref 函数创建的响应式数据，在模板中可以直接被使用，在 JS 中需要通过 .value 的形式才能使用。
- ref 函数可以接收原始数据类型与引用数据类型。
- reactive 函数只能接收引用数据类型。
:::

## ref全家桶
### isRef
判断是不是一个ref对象
```js
import { ref,isRef } from 'vue'
let message = ref("我是message")
let notRef:number = 123
const changeMsg = () => {
  message.value = "change msg"
  console.log(isRef(message)); //true
  console.log(isRef(notRef)); //false
}
```

### shallowRef
创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的

修改其属性是非响应式的这样是不会改变的
```vue
<template>
  <div>
    <button @click="changeMsg">change</button>
    <div>{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
import { Ref, shallowRef } from 'vue'
type Obj = {
  name: string
}
let message: Ref<Obj> = shallowRef({
  name: "zhangsan"
})

const changeMsg = () => {
  message.value.name = 'lisi' // 改变不了
}
</script>
```
这样是可以被监听到的修改value
```js
const changeMsg = () =>{
    message.value = {name:'lisi'}
}
```

### triggerRef
强制更新页面DOM
```js
import {Ref,shallowRef,triggerRef} from 'vue'
type Obj = {
    name:string
}
let message:Ref<Obj> = shallowRef({
    name:'zs'
})
const changeMsg = () =>{
    message.value = {name:'lisi'}
    triggerRef(message)
}
```

### customRef
自定义ref

customRef 是个工厂函数要求我们返回一个对象 并且实现 get 和 set  适合去做防抖之类的
```vue
<template>
  <div ref="div">Ref</div>
  <hr>
  <div>
    {{ name }}
  </div>
  <hr>
  <button @click="change">修改 customRef</button>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted, shallowRef, customRef } from 'vue'

function myRef<T = any>(value: T) {
  let timer:any;
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal) {
        clearTimeout(timer)
        timer =  setTimeout(() => {
          console.log('触发了set')
          value = newVal
          trigger()
        },500)
      }
    }
  })
}
const name = myRef<string>('zs')

const change = () => {
  name.value = 'lisi'
}
</script>
```
```vue
// 创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制
// 需求: 使用 customRef 实现 debounce 的示例
<template>
  <h2>App</h2>
  <input v-model="keyword" placeholder="搜索关键字" />
  <p>{{ keyword }}</p>
</template>

<script setup lang="ts">
import { ref, customRef } from "vue";

const keyword = useDebouncedRef("", 500);
console.log(keyword);

/*
实现函数防抖的自定义ref
*/
function useDebouncedRef<T>(value: T, delay = 200) {
  let timeout: number;
  return customRef((track, trigger) => {
    return {
      get() {
        // 告诉Vue追踪数据
        track();
        return value;
      },
      set(newValue: T) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          // 告诉Vue去触发界面更新
          trigger();
        }, delay);
      },
    };
  });
}
</script>

```

## reactive全家桶


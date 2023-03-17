# Composition API(常用部分)
## 1. setup

1. 理解：Vue3.0中一个新的配置项，值为一个函数。
2. setup() 函数是 Vue3 新增的一个选项，它是组合式 API 的统一入口，简单来说，就是所有的 **CompositionAPI** 新特性都应该写在这个函数内部。
3. 组件中所用到的：数据、方法等等，均要配置在setup中。
4. setup函数的两种返回值：
   1. 若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
   2. <span style="color:#aad">若返回一个渲染函数：则可以自定义渲染内容。（了解）</span>

## 2. ref 和 reative
- ref: 用来给基本数据类型绑定响应式数据，访问时需要通过 .value 的形式， tamplate 会自动解析,不需要 .value
- reactive: 用来给 复杂数据类型 绑定响应式数据，直接访问即可

> ref其实也是内部调用 reactive 来实现的

```vue
<template>
  <div>
    <p>{{title}}</p>
    <h4>{{userInfo}}</h4>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
type Person = {
    name: string;
    age: number;
    gender?: string;
};
const title = ref<string>("abcc");
const userInfo = reactive<Person>({
  name: '树哥',
  age: 18
})
</script>
```

## toRef、toRefs、toRaw
### toRef
toRef 如果原始对象是非响应式的,数据会变,但不会更新视图
```vue
<template>
  <div>
     <button @click="change">按钮</button>
     {{state}}
  </div>
</template>

<script setup lang="ts">
import { reactive, toRef } from 'vue'

const obj = {
  name: '树哥',
  age: 18
}

const state = toRef(obj, 'age')

const change = () => {
  state.value++
  console.log('obj:',obj,'state:', state);
}
</script>
```





# Vue Router 学习指南

## 1. 简介

- Vue Router 是 Vue.js 官方提供的路由管理器，用于实现单页面应用（SPA）的路由功能。
- 学习 Vue Router 之前，确保您对 Vue.js 有一定的了解。

## 2. 安装

- 使用 npm 或 yarn 安装 Vue Router 到您的 Vue.js 项目中。

```bash
# 使用npm
npm install vue-router

# 使用yarn
yarn add vue-router
```

## 3. 基本用法

- 创建一个 Vue Router 实例并将其与 Vue 应用关联。
- 定义路由表，包含不同路径与对应组件的映射。

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

## 4. 路由视图

- 在 Vue 组件中使用 `<router-view>` 标签来渲染路由匹配到的组件。

```html
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
```

## 5. 路由导航

- 使用`<router-link>`组件创建导航链接，以在单页面应用中切换不同的路由。

```html
<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>
```

## 6. 路由传参

- 使用路由参数传递数据给组件。

```javascript
const routes = [{ path: '/user/:id', component: User }]
```

```html
<router-link :to="{ path: `/user/${userId}` }">User Profile</router-link>
```

## 7. 嵌套路由

- 在组件中定义嵌套的子路由。

```javascript
const routes = [
  {
    path: '/parent',
    component: Parent,
    children: [{ path: 'child', component: Child }]
  }
]
```

## 8. 路由守卫

- 使用路由守卫来处理导航前后的逻辑，例如登录验证、权限控制等。

```javascript
router.beforeEach((to, from, next) => {
  // 检查用户是否登录，进行相关逻辑处理
  next()
})
```

## 9. 动态路由

- 使用动态路由来根据不同条件加载组件。

```javascript
const routes = [{ path: '/category/:id', component: Category }]
```

## 10. 路由懒加载

- 使用路由懒加载来优化页面加载性能。

```javascript
const routes = [
  {
    path: '/lazy',
    component: () => import('./components/LazyLoadedComponent.vue')
  }
]
```

<!-- ## 11. 更多配置

- 了解更多高级配置，如路由别名、重定向、404 页面等。
 -->

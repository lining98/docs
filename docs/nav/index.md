---
layoutClass: nav-layout
outline: [2, 3, 4]
---

<script setup>
import NavLinks from './components/NavLinks.vue'

import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 前端导航

<!-- ## 常用工具 -->

<NavLinks v-for="{title,items} in NAV_DATA" :title='title' :items="items"/>

---
layoutClass: m-nav-layout
---

<script setup>
import MNavLinks from './nav/components/MNavLinks.vue'

import { NAV_DATA } from './nav/data'
</script>
<style src="./nav/index.scss"></style>

# 前端导航

<!-- ## 常用工具 -->

<MNavLinks v-for="{title,items} in NAV_DATA" :title='title' :items="items"/>

<!-- ## React 生态

<MNavLinks :items="[]"/> -->
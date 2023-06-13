<template>
  <div ref="live2dContentRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Live2d } from '@tomiaa/live2d'

const live2dContentRef = ref()

onMounted(() => {
  new Live2d({
    el: live2dContentRef.value,
    showLoading: false
  })
})
</script>

<style lang="scss" scoped></style>

<template>
  <div ref="live2dContentRef"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const live2dContentRef = ref()
onMounted(async () => {
  const { Live2d } = await import('@tomiaa/live2d')
  new Live2d({
    el: live2dContentRef.value,
    showLoading: false
  })
})
</script>

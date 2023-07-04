<template>
  <div class="main">
    <div class="ggk">{{ text }}</div>
    <canvas ref="canvas" width="600" height="400"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
const canvas = ref<HTMLCanvasElement>()
const context = computed(() => {
  // 定义计算属性，返回 canvas 元素的 2D 绘图上下文
  if (canvas.value) {
    return canvas.value.getContext('2d')
  } else {
    return null
  }
})

const text = ref('')
const isDraw = ref(false)

const render = () => {
  context.value!.fillStyle = '#ccc'
  context.value!.fillRect(0, 0, 600, 400)
  context.value!.globalCompositeOperation = 'destination-out'

  canvas.value!.onmousedown = function () {
    isDraw.value = true
  }
  canvas.value!.onmouseup = function () {
    isDraw.value = false
  }
  canvas.value!.onmousemove = function (e) {
    if (isDraw.value) {
      context.value!.beginPath()
      context.value!.arc(e.offsetX, e.offsetY, 20, 0, Math.PI * 2)
      context.value!.fill()
      context.value!.closePath()
    }
  }
}

const random = () => {
  let random = Math.random()
  if (random < 0.1) {
    text.value = '一等奖'
  } else if (random < 0.2) {
    text.value = '二等奖'
  } else if (random < 0.5) {
    text.value = '三等奖'
  } else {
    text.value = '谢谢惠顾'
  }
}

onMounted(() => {
  random()
  render()
})
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  .ggk {
    width: 600px;
    height: 400px;
    font-size: 40px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  canvas {
    position: relative;
  }
}
</style>

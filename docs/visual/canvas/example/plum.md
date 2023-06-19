# 梅花特效

> [参考视频教程](https://www.bilibili.com/video/BV1wY411n7er)

## 代码

```vue
<template>
  <div>
    <canvas ref="canvas" width="600" height="600"></canvas>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement>()

const ctx = computed(() => {
  // 定义计算属性，返回 canvas 元素的 2D 绘图上下文
  if (canvas.value) {
    return canvas.value.getContext('2d')
  } else {
    return null
  }
})

const WIDTH = 600
const HEIGHT = 600

interface Point {
  x: number
  y: number
}

interface Branch {
  start: Point
  length: number
  theta: number
}

function init() {
  ctx.value!.strokeStyle = '#000'

  step({
    start: { x: WIDTH / 2, y: HEIGHT },
    length: 20,
    theta: -Math.PI / 2
  })
}

const pendingTasks: Function[] = []

function step(b: Branch, depth = 0) {
  const end = getEndPoint(b)
  drawBranch(b)

  if (depth < 4 || Math.random() < 0.5) {
    pendingTasks.push(() =>
      step(
        {
          start: end,
          length: b.length + (Math.random() * 10 - 5),
          theta: b.theta - 0.3 * Math.random()
        },
        depth + 1
      )
    )
  }
  if (depth < 4 || Math.random() < 0.5) {
    pendingTasks.push(() =>
      step(
        {
          start: end,
          length: b.length + (Math.random() * 10 - 5),
          theta: b.theta + 0.3 * Math.random()
        },
        depth + 1
      )
    )
  }
}

function frame() {
  const tasks = [...pendingTasks]
  pendingTasks.length = 0
  tasks.forEach((fn) => fn())
}
let framesCount = 0
function startFrame() {
  requestAnimationFrame(() => {
    framesCount += 1
    if (framesCount % 3 === 0) frame()
    startFrame()
  })
}
startFrame()

function lineTo(p1: Point, p2: Point) {
  ctx.value!.beginPath()
  ctx.value!.moveTo(p1.x, p1.y)
  ctx.value!.lineTo(p2.x, p2.y)
  ctx.value!.stroke()
}

function getEndPoint(b: Branch) {
  return {
    x: b.start.x + b.length * Math.cos(b.theta),
    y: b.start.y + b.length * Math.sin(b.theta)
  }
}

function drawBranch(b: Branch) {
  lineTo(b.start, getEndPoint(b))
}

onMounted(() => {
  init()
})
</script>

<style lang="scss" scoped>
canvas {
  border: 1px solid #000;
}
</style>
```

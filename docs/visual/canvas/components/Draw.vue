<template>
  <div class="btns">
    <CBtn @click="boldBtn" text="粗线条" />
    <CBtn @click="thinBtn" text="细线条" />
    <CBtn @click="saveBtn" text="保存签名" />
    <input @change="inputColor" ref="color" type="color" name="" />
    <CBtn @click="clearBtn" text="橡皮擦" :class="isCa ? 'active' : ''" />
    <CBtn @click="nullBtn" text="清空画布" />
  </div>
  <div>
    线宽：
    <input v-model="lineWidth" type="text" />
  </div>
  <canvas ref="canvas" width="750" height="600"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import CBtn from '../../../components/CBtn.vue'

const canvas = ref<HTMLCanvasElement>()
const context = computed(() => {
  // 定义计算属性，返回 canvas 元素的 2D 绘图上下文
  if (canvas.value) {
    return canvas.value.getContext('2d')
  } else {
    return null
  }
})

const lineWidth = ref(1)
const isDraw = ref(false)
const color = ref()
const isCa = ref(false)

const render = () => {
  canvas.value!.onmousedown = function (event) {
    isDraw.value = true
    context.value!.beginPath()
    context.value!.moveTo(event.offsetX, event.offsetY)
  }
  canvas.value!.onmouseleave = function () {
    isDraw.value = false
    context.value!.closePath()
  }
  canvas.value!.onmouseup = function () {
    isDraw.value = false
    context.value!.closePath()
  }
  canvas.value!.onmousemove = function (event) {
    if (isDraw.value) {
      var x = event.offsetX
      var y = event.offsetY
      context.value!.lineTo(x, y)
      context.value!.stroke()
    }
  }
}
// 粗线条
const boldBtn = () => {
  isCa.value = false
  context.value!.globalCompositeOperation = 'source-over'
  lineWidth.value += 2
  context.value!.lineWidth = lineWidth.value
}
// 细线条
const thinBtn = () => {
  isCa.value = false
  context.value!.globalCompositeOperation = 'source-over'
  lineWidth.value -= 2
  if (lineWidth.value < 1) {
    lineWidth.value = 1
  }
  context.value!.lineWidth = lineWidth.value
}

// 保存签名
const saveBtn = () => {
  var urlData = canvas.value!.toDataURL()
  var downloadA = document.createElement('a')
  downloadA.setAttribute('download', '签名')
  downloadA.href = urlData
  downloadA.click()
}

// 改变颜色
const inputColor = () => {
  context.value!.strokeStyle = color.value
}

// 橡皮擦
const clearBtn = () => {
  isCa.value = !isCa.value
  if (isCa.value) {
    context.value!.globalCompositeOperation = 'destination-out'
  } else {
    context.value!.globalCompositeOperation = 'source-over'
  }
}

// 清空画布
const nullBtn = () => {
  context.value!.clearRect(0, 0, 750, 600)
}

onMounted(() => {
  render()
})
</script>

<style lang="scss" scoped>
.btns {
  display: flex;
  margin-bottom: 10px;
  button {
    margin: 0 5px;
  }
}
canvas {
  border: 1px solid #ccc;
}
.active {
  background: #0057f8;
}
</style>

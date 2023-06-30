<template>
  <div>
    <canvas ref="canvas" width="600" height="600"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const canvas = ref<HTMLCanvasElement>()

const render = () => {
  const context = canvas.value?.getContext('2d')
  context!.clearRect(0, 0, 800, 600)

  // 存档，保存当前坐标位置和上下文对象
  context!.save()
  context!.translate(400, 300)
  context!.rotate(-Math.PI / 2)

  // 绘制小时的刻度
  context!.save()
  for (let i = 0; i < 12; i++) {
    context!.beginPath()
    context!.moveTo(170, 0)
    context!.lineTo(190, 0)
    context!.lineWidth = 8
    context!.strokeStyle = 'gray'
    context!.stroke()
    context!.closePath()
    context!.rotate((Math.PI * 2) / 12)
  }
  context!.restore()
  context!.save()
  // 绘制分钟的刻度
  for (let i = 0; i < 60; i++) {
    context!.beginPath()
    context!.moveTo(180, 0)
    context!.lineTo(190, 0)
    context!.lineWidth = 2
    context!.strokeStyle = 'gray'
    context!.stroke()
    context!.closePath()
    context!.rotate((Math.PI * 2) / 60)
  }
  context!.restore()
  context!.save()

  // 获取当前的时间
  var time = new Date()
  var hour = time.getHours()
  var min = time.getMinutes()
  var sec = time.getSeconds()
  hour = hour >= 12 ? hour - 12 : hour

  // 绘制秒针
  context!.rotate(((Math.PI * 2) / 60) * sec)
  context!.beginPath()
  context!.moveTo(-30, 0)
  context!.lineTo(190, 0)
  context!.lineWidth = 2
  context!.strokeStyle = 'red'
  context!.stroke()
  context!.closePath()

  context!.restore()
  context!.save()

  // 绘制分针
  context!.rotate(((Math.PI * 2) / 60) * min + ((2 * Math.PI) / 60 / 60) * sec)
  context!.beginPath()
  context!.moveTo(-20, 0)
  context!.lineTo(170, 0)
  context!.lineWidth = 4
  context!.strokeStyle = '#ccc'
  context!.stroke()
  context!.closePath()

  context!.restore()
  context!.save()

  // 绘制时针
  context!.rotate(
    ((Math.PI * 2) / 12) * hour +
      ((2 * Math.PI) / 12 / 60) * min +
      ((2 * Math.PI) / 12 / 60 / 60) * sec
  )
  context!.beginPath()
  context!.moveTo(-15, 0)
  context!.lineTo(100, 0)
  context!.lineWidth = 8
  context!.strokeStyle = '#000'
  context!.stroke()
  context!.closePath()

  context!.restore()
  context!.restore()

  requestAnimationFrame(render)
}
onMounted(() => {
  render()
})
</script>

<style lang="scss" scoped></style>

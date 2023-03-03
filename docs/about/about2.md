# demo1

## about2

:::demo canvas 矩形的绘制

```vue
<template>
  <div class="rectangular">
    <div class="rectangular-box">
      <canvas id="rectangular" width="150" height="150"> </canvas>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  setup() {
    function draw() {
      const rectangular = document.getElementById('rectangular') //引用Dom元素
      const ctx = rectangular.getContext('2d')
      //函数绘制了一个边长为100px的黑色正方形
      ctx.fillRect(25, 25, 100, 100)
      //函数从正方形的中心开始擦除了一个60*60px的正方形
      ctx.clearRect(45, 45, 60, 60)
      //函数从正方形的中心开始擦除了一个60*60px的正方形
      ctx.strokeRect(50, 50, 50, 50)
    }
    onMounted(() => {
      draw()
    })
  },
}
</script>
```

:::


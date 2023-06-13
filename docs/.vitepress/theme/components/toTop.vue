<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
let isShow = ref('top hide')
const visibilityHeight = ref(500)

function handleScroll() {
  isShow.value = getScrollTop() > visibilityHeight.value ? 'top show' : 'top hide'
}

function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}

// 返回顶部
function goBack() {
  //   window.scrollTo({ top: 0, behavior: 'smooth' })

  //  设置一个定时器
  const upRoll = setInterval(() => {
    const top = document.documentElement.scrollTop // 每次获取页面被卷去的部分
    const speed = Math.ceil(top / 10) // 每次滚动多少 （步长值）
    if (document.documentElement.scrollTop > 0) {
      document.documentElement.scrollTop -= speed // 不在顶部 每次滚动到的位置
    } else {
      clearInterval(upRoll) // 回到顶部清除定时器
    }
  }, 10)
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll, true)
})
</script>

<template>
  <div @click="goBack" :class="isShow">
    <img class="img" src="../assets/images/totop.svg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.top {
  position: fixed;
  right: 0px;
  bottom: 180px;
  cursor: pointer;
  .img {
    animation: Bob 1s linear 0s infinite;
    width: 50px;
  }
}
.show {
  opacity: 1;
}
.hide {
  opacity: 0;
}
@keyframes Bob {
  0% {
    transform: translateY(-8px);
  }
  50% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(-8px);
  }
}
</style>

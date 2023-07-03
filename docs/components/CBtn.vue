<template>
  <div>
    <button class="btn">{{ text }}</button>
  </div>
</template>

<script setup lang="ts">
defineProps(['text'])
</script>

<style lang="scss" scoped>
.btn {
  color: #fff;
  width: 80px;
  height: 32px;
  border-radius: 3px;
  background-color: #409eff;
  margin: 5px 0;
}
</style>

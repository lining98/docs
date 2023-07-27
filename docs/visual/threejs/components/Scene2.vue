<template>
  <div>
    <canvas ref="canvas" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const canvas = ref()

onMounted(() => {
  // 创建一个场景
  const scene = new THREE.Scene()

  // 创建一个相机(透视相机)
  // 角度，宽高比, 进端， 远端
  const camera = new THREE.PerspectiveCamera(
    75,
    parseInt(getComputedStyle(canvas.value).width) / window.innerHeight,
    0.1,
    1000
  )

  // 设置相机位置
  camera.position.set(0, 0, 10)

  // 添加到场景中
  scene.add(camera)

  // 创建几何体
  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
  // 创建材质
  const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffaa00 })
  // 根据几何体和材质创建物体
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

  // 将几何体添加到场景中
  scene.add(cube)

  // 初始化渲染器
  const renderer = new THREE.WebGLRenderer({
    // 将webGL渲染的canvas添加到dom上
    canvas: canvas.value,
    // 允许透明
    alpha: true
  })

  // 设置背景色
  renderer.setClearColor(0x007fff, 0.2)

  // 设置画布的宽高
  renderer.setSize(parseInt(getComputedStyle(canvas.value).width), window.innerHeight)

  // 创建轨道控制器
  // 要控制的相机，canvas元素
  const controls = new OrbitControls(camera, renderer.domElement)

  function render() {
    //如果后期需要控制器带有阻尼效果，或者自动旋转等效果，就需要加入controls.update()
    controls.update()
    // 使用渲染器，通过场景，相机来渲染
    renderer.render(scene, camera)
    //   渲染下一帧的时候就会调用render函数
    requestAnimationFrame(render)
  }

  render()
})
</script>
<style scoped>
canvas {
  width: 100%;
  height: 100vh;
}
</style>

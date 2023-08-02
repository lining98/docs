<template>
  <div>
    <canvas ref="canvas" />
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { ref, onMounted } from 'vue'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const canvas = ref()

onMounted(async () => {
  const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls')

  // 创建一个场景
  const scene = new THREE.Scene()

  // 创建一个相机(透视相机)
  // 角度，宽高比, 进端， 远端
  const camera: any = new THREE.PerspectiveCamera(
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
  const cube: any = new THREE.Mesh(cubeGeometry, cubeMaterial)

  // 将几何体添加到场景中
  scene.add(cube)

  //例如设置x轴放大3倍、y轴方向放大2倍、z轴方向不变
  // cube.scale.set(3, 2, 1);
  //单独设置某个轴的缩放
  cube.scale.y = 3

  cube.position.x = 1
  cube.position.y = 3
  // cube.position.set(1,2,3)

  //直接设置旋转属性，例如围绕y轴旋转90度
  cube.rotation.y = -Math.PI / 4

  //围绕x轴旋转45度
  // cube.rotation.set(-Math.PI / 4,  0, 0,"XZY");

  // 初始化渲染器
  const renderer = new THREE.WebGLRenderer({
    // 将webGL渲染的canvas添加到dom上
    canvas: canvas.value,
    // 允许透明
    alpha: true
  })
  // 设置背景色
  renderer.setClearColor(0x007fff, 0.2)
  // 设置渲染的尺寸大小
  renderer.setSize(parseInt(getComputedStyle(canvas.value).width), window.innerHeight)

  // 创建轨道控制器
  // 要控制的相机，canvas元素
  const controls = new OrbitControls(camera, renderer.domElement)

  function render() {
     // 每一帧位移 0.01
    cube.position.x += 0.01
    // 每一帧缩放 0.01
    cube.scale.y += 0.01
    // 每一帧旋转 0.1°
    cube.rotation.y += 0.01
    if (cube.position.x > 3) {
      cube.position.x = 0
      cube.scale.y = 1
      cube.rotation.y = 0
    }

    // 使用渲染器，通过场景，相机来渲染
    renderer.render(scene, camera)
    //   渲染下一帧的时候就会调用render函数
    requestAnimationFrame(render)
  }
  render()

  // 添加坐标轴辅助器
  const axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)
})
</script>
<style scoped>
canvas {
  width: 100%;
  height: 100vh;
}
</style>

# 初识 ThreeJs

> [Three.js 学习指南](https://www.three3d.cn/)
>
> [Three.js 中文官方文档](https://www.three3d.cn/docs/index.html)

Three.js 是一种用于在 Web 浏览器中创建交互式 3D 图形的 JavaScript 库。它允许开发人员在 Web 应用程序中轻松地渲染 3D 场景，创建各种 3D 效果，包括动画、模拟、游戏和虚拟现实等。Three.js 提供了许多功能和工具，使得构建复杂的 3D 场景变得更加简单和高效。

以下是 Three.js 的一些主要特性和组成部分：

1. **渲染器（Renderer）**：Three.js 使用 WebGL 进行渲染，它是一种在 Web 浏览器中渲染 3D 图形的 API。Three.js 提供了多种渲染器，包括基本的 Canvas 渲染器、WebGL 渲染器和 CSS3D 渲染器。WebGL 渲染器是最常用的，因为它利用了 GPU 加速，提供更高的性能和更好的渲染效果。

2. **场景（Scene）**：场景是 Three.js 中所有 3D 对象的容器。您可以在场景中添加、移动和管理各种 3D 对象，如几何体、灯光、相机等。

3. **相机（Camera）**：相机定义了观察者在场景中看到的位置和视角。Three.js 提供了不同类型的相机，包括透视相机（PerspectiveCamera）和正交相机（OrthographicCamera），可根据需求进行选择。

4. **几何体（Geometry）**：几何体是 Three.js 中表示 3D 物体形状的基本构建块。Three.js 提供了各种预定义的几何体，如立方体、球体、圆柱体等，也支持自定义几何体。

5. **材质（Material）**：材质定义了 3D 物体的外观和纹理。Three.js 提供了多种材质类型，如基本材质（MeshBasicMaterial）、光滑材质（MeshPhongMaterial）和标准材质（MeshStandardMaterial）等。

6. **光源（Light）**：光源用于照亮场景中的 3D 物体。Three.js 支持不同类型的光源，如环境光（AmbientLight）、点光源（PointLight）、平行光（DirectionalLight）等。

7. **动画（Animation）**：Three.js 提供了强大的动画支持，可以实现各种复杂的动画效果。您可以通过修改场景中的属性或使用插值器来创建动画序列。

8. **交互（Interaction）**：Three.js 可以与用户交互，通过鼠标、键盘和触摸事件来控制和操纵 3D 场景。

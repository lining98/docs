import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  // frontEnd 前端
  '/frontEnd/html5/': require('../../frontEnd/html5/sidebar'),
  '/frontEnd/css3/': require('../../frontEnd/css3/sidebar'),
  '/frontEnd/vue/': require('../../frontEnd/vue/sidebar'),

  // js
  '/JavaScript/': require('../../JavaScript/sidebar'),

  // backEnd 后端
  '/backEnd/': require('../../backEnd/sidebar'),
  // '/backEnd/nodejs/': require('../../backEnd/nodejs/sidebar'),
  // '/backEnd/mysql/': require('../../backEnd/mysql/sidebar'),

  // others 其他
  '/others/git': require('../../others/git/sidebar'),
  '/others/axios/': require('../../others/axios/sidebar'),
  '/others/TypeScript/': require('../../others/TypeScript/sidebar'),

  // visual 可视化
  '/visual/canvas': require('../../visual/canvas/sidebar'),
  '/visual/pixiJs': require('../../visual/pixiJs/sidebar')

  // algorithms 算法
  // "/algorithms/": require("../../algorithms/sidebar"),

  // "/about/": require("../../about/sidebar"),
}

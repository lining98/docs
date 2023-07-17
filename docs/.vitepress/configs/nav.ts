import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '导航', link: '/nav/' },
  // {
  //   text: "计算机",
  //   items: [
  //     { text: "计算机网络", link: "" },
  //     { text: "数据结构", link: "" },
  //     { text: "操作系统", link: "" },
  //   ],
  // },
  {
    text: '前端',
    items: [
      {
        text: '基础',
        items: [
          { text: 'HTML5', link: '/frontEnd/html5/audio_video', activeMatch: '^/frontEnd/html5' },
          { text: 'CSS3', link: '/frontEnd/css3/base/css选择器', activeMatch: '^/frontEnd/css3' }
        ]
      },
      {
        text: '框架',
        items: [
          { text: 'Vue', link: '/frontEnd/vue/v3/' },
          // { text: 'vue3', link: '/frontEnd/vue3/' },
          { text: 'React', link: '/frontEnd/react/' }
        ]
      }
    ],
    activeMatch: '^/frontEnd'
  },
  {
    text: 'JavaScript',
    items: [
      {
        text: 'JS基础',
        items: [
          { text: 'JavaScript 基础', link: '/JavaScript/base/types', activeMatch: '^/JavaScript/base' },
          { text: 'JavaScript 进阶', link: '/JavaScript/core/closure', activeMatch: '^/JavaScript/core' },
          { text: '内置对象', link: '/JavaScript/内置对象/', activeMatch: '^/JavaScript/内置对象' },
          { text: 'DOM', link: '/JavaScript/DOM/', activeMatch: '^/JavaScript/DOM' },
          { text: 'BOM', link: '/JavaScript/BOM/', activeMatch: '^/JavaScript/BOM' },
          { text: '本地存储', link: '/JavaScript/storage/localStorage', activeMatch: '^/JavaScript/storage' },
        ]
      }
    ],
    activeMatch: '^/JavaScript'
  },
  {
    text: '服务端',
    items: [
      { text: 'Nodejs', link: '/backEnd/nodejs/', activeMatch: '^/backEnd/nodejs' },
      { text: 'MySQL', link: '/backEnd/mysql/', activeMatch: '^/backEnd/mysql' },
      // { text: 'Linux', link: '/backEnd/linux/', activeMatch: '^/backEnd/linux' },
    ],
    activeMatch: '^/backEnd'
  },
  {
    text: '其他',
    items: [
      { text: 'Git', link: '/others/git/install', activeMatch: '^/others/git' },
      { text: 'Axios', link: '/others/axios/', activeMatch: '^/others/axios' },
      {
        text: 'TypeScript',
        link: '/others/TypeScript/',
        activeMatch: '^/others/TypeScript'
      }
      // { text: "webpack", link: "/others/webpack/index" },
      // { text: "vite", link: "/others/vite/index" },
    ],
    activeMatch: '^/others'
  },
  {
    text: '可视化',
    items: [
      { text: 'Canvas', link: '/visual/canvas/base/初识Canvas', activeMatch: '^/visual/canvas' },
      { text: 'Svg', link: '/visual/svg/', activeMatch: '^/visual/svg' },
      { text: 'PixiJs', link: '/visual/pixiJs/初识PixiJs', activeMatch: '^/visual/pixi' }
      // { text: 'Echarts', link: '/visual/echarts/', activeMatch: '^/visual/echarts' },
      // { text: "threejs", link: "/frontEnd/threejs/base" },
    ],
    activeMatch: '^/visual'
  },
  // { text: '算法', link: '/algorithms/', activeMatch: '^/algorithms' },
  {
    text: '项目',
    items: [
      { text: '项目配置', link: '/project/configuration', activeMatch: '^/project/configuration' },
      { text: 'music', link: 'http://121.40.174.152/music' },
      { text: 'vue3-template-admin', link: 'http://121.40.174.152/vue3-template-admin' }
    ],
    activeMatch: '^/project'
  }
  // { text: '关于', link: '/about/', activeMatch: '^/about' },
  // {
  //   text: '关于',
  //   items: [
  //     { text: '关于', link: '/about/' },
  //     { text: 'leetcode', link: 'https://leetcode.cn/u/l_ning98/' }
  //   ],
  //   activeMatch: '^/about'
  // }
]

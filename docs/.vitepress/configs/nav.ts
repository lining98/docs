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
          { text: 'CSS3', link: '/frontEnd/css3/base/css选择器', activeMatch: '^/frontEnd/css3' },
          {
            text: 'JavaScript',
            link: '/frontEnd/JavaScript/',
            activeMatch: '^/frontEnd/JavaScript'
          }
        ]
      },
      {
        text: '框架',
        items: [
          { text: 'vue', link: '/frontEnd/vue/v3/' },
          // { text: 'vue3', link: '/frontEnd/vue3/' },
          { text: 'react', link: '/frontEnd/react/' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: 'axios', link: '/frontEnd/axios/', activeMatch: '^/frontEnd/axios' },
          {
            text: 'TypeScript',
            link: '/frontEnd/TypeScript/',
            activeMatch: '^/frontEnd/TypeScript'
          }
          // { text: "webpack", link: "/frontEnd/webpack/index" },
          // { text: "vite", link: "/frontEnd/vite/index" },
        ]
      }
    ],
    activeMatch: '^/frontEnd'
  },
  {
    text: '服务端',
    items: [
      { text: 'Nodejs', link: '/backEnd/nodejs/', activeMatch: '^/backEnd/nodejs' },
      // { text: 'Mysql', link: '/backEnd/mysql/', activeMatch: '^/backEnd/mysql' }
    ],
    activeMatch: '^/backEnd'
  },
  {
    text: '可视化',
    items: [
      { text: 'Canvas', link: '/visual/canvas/base/初识Canvas', activeMatch: '^/visual/canvas' },
      { text: 'Svg', link: '/visual/svg/', activeMatch: '^/visual/svg' },
      { text: 'PixiJs', link: '/visual/pixiJs/初识PixiJs', activeMatch: '^/visual/pixi' },
      // { text: 'Echarts', link: '/visual/echarts/', activeMatch: '^/visual/echarts' },
      // { text: "threejs", link: "/frontEnd/threejs/base" },
    ],
    activeMatch: '^/visual'
  },
  {
    text: '其他',
    items: [
      { text: 'git', link: '/others/git/install', activeMatch: '^/others/git' }
      // { text: "threejs", link: "/frontEnd/threejs/index" },
    ],
    activeMatch: '^/others'
  },
  // { text: '算法', link: '/algorithms/', activeMatch: '^/algorithms' },
  {
    text: '项目',
    items: [
      { text: '项目配置', link: '/project/configuration', activeMatch: '^/project/configuration' },
      { text: 'music', link: 'http://121.40.174.152/#/discover/recommend' }
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

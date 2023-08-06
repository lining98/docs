import type { DefaultTheme } from 'vitepress'

import ES6 from '../../ECMAScript/sidebar'

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

  // 前端 frontEnd
  {
    text: '前端',
    items: [
      {
        text: '基础',
        items: [
          { text: 'HTML5', link: '/frontEnd/html5/base/', activeMatch: '^/frontEnd/html5' },
          { text: 'CSS3', link: '/frontEnd/css3/base/css选择器', activeMatch: '^/frontEnd/css3' }
        ]
      },
      {
        text: '框架',
        items: [
          { text: 'Vue', link: '/frontEnd/vue/base/', activeMatch: '^/frontEnd/vue' },
          { text: 'React', link: '/frontEnd/react/', activeMatch: '^/frontEnd/react' }
        ]
      }
    ],
    activeMatch: '^/frontEnd'
  },

  // JavaScript
  {
    text: 'JavaScript',
    items: [
      {
        text: 'JS基础',
        items: [
          {
            text: 'JavaScript 基础',
            link: '/JavaScript/base/types',
            activeMatch: '^/JavaScript/base'
          },
          {
            text: 'JavaScript 进阶',
            link: '/JavaScript/core/closure',
            activeMatch: '^/JavaScript/core'
          },
          { text: '内置对象', link: '/JavaScript/内置对象/', activeMatch: '^/JavaScript/内置对象' },
          { text: '面向对象', link: '/JavaScript/面向对象/', activeMatch: '^/JavaScript/面向对象' },
          { text: 'DOM', link: '/JavaScript/DOM/', activeMatch: '^/JavaScript/DOM' },
          { text: 'BOM', link: '/JavaScript/BOM/', activeMatch: '^/JavaScript/BOM' },
          {
            text: '本地存储',
            link: '/JavaScript/storage/localStorage',
            activeMatch: '^/JavaScript/storage'
          }
        ]
      }
    ],
    activeMatch: '^/JavaScript'
  },

  // ECMAScript
  {
    text: 'ECMAScript',
    items: ES6,
    activeMatch: '^/ECMAScript'
  },

  // 服务端 server
  {
    text: '服务端',
    items: [
      {
        text: 'Node',
        items: [
          { text: 'NodeJs', link: '/server/nodejs/', activeMatch: '^/server/nodejs' },
          { text: 'NPM', link: '/server/npm/', activeMatch: '^/server/npm' }
        ]
      },
      {
        text: '数据库',
        items: [{ text: 'MySQL', link: '/server/mysql/', activeMatch: '^/server/mysql' }]
      }

      // { text: 'Linux', link: '/server/linux/', activeMatch: '^/server/linux' },
    ],
    activeMatch: '^/server'
  },

  // 其他 others
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

  // 可视化 visual
  {
    text: '可视化',
    items: [
      {
        text: '2d',
        items: [
          {
            text: 'Canvas',
            link: '/visual/canvas/base/初识Canvas',
            activeMatch: '^/visual/canvas'
          },
          { text: 'Svg', link: '/visual/svg/', activeMatch: '^/visual/svg' },
          { text: 'PixiJs', link: '/visual/pixiJs/初识PixiJs', activeMatch: '^/visual/pixi' }
          // { text: 'Echarts', link: '/visual/echarts/', activeMatch: '^/visual/echarts' },
        ]
      },
      {
        text: '3d',
        items: [{ text: 'ThreeJs', link: '/visual/threejs/base/', activeMatch: '^/visual/threejs' }]
      }
    ],
    activeMatch: '^/visual'
  },

  // 算法 algorithms
  // { text: '算法', link: '/algorithms/', activeMatch: '^/algorithms' },

  // 项目 project
  {
    text: '项目',
    items: [
      {
        items: [
          {
            text: '项目配置',
            link: '/project/configuration',
            activeMatch: '^/project/configuration'
          }
        ]
      },
      {
        items: [
          { text: 'music', link: 'http://111.229.203.202/music' },
          { text: 'vue3-template-admin', link: 'http://111.229.203.202/vue3-template-admin' }
        ]
      }
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

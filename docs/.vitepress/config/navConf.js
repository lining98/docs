module.exports = [
  { text: '主页', link: '/' },
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
          { text: 'HTML5', link: '/frontEnd/html5/', activeMatch: '^/frontEnd/html5' },
          { text: 'CSS3', link: '/frontEnd/css3/', activeMatch: '^/frontEnd/css3' },
          {
            text: 'JavaScript',
            link: '/frontEnd/JavaScript/',
            activeMatch: '^/frontEnd/JavaScript'
          }
        ],
      },
      {
        text: '框架',
        items: [
          { text: 'vue', link: '/frontEnd/vue/' },
          { text: 'react', link: '/frontEnd/react/' }
        ],
      },
      {
        text: '其他',
        items: [
          { text: 'TypeScript', link: '/frontEnd/TypeScript/', activeMatch: '^/frontEnd/TypeScript'},
          { text: 'git', link: '/frontEnd/git/' },
          { text: 'echarts', link: '/frontEnd/echarts/' },
          // { text: "threejs", link: "/frontEnd/threejs/index" },
          // { text: "webpack", link: "/frontEnd/webpack/index" },
          // { text: "vite", link: "/frontEnd/vite/index" },
        ]
      }
    ], activeMatch: '^/frontEnd'
  },
  {
    text: '后端',
    items: [
      { text: 'nodejs', link: '/backEnd/nodejs/', activeMatch: '^/backEnd/nodejs' },
      { text: 'mysql', link: '/backEnd/mysql/', activeMatch: '^/backEnd/mysql' }
    ],
    activeMatch: '^/backEnd'
  },
  { text: '算法', link: '/algorithms/demo1', activeMatch: '^/algorithms' },
  {
    text: '关于',
    items: [
      // { text: "关于我", link: "/about" },
      { text: '关于', link: '/about/' },
      { text: 'github', link: 'https://github.com/lining98/docs' },
      { text: 'leetcode', link: 'https://leetcode.cn/u/l_ning98/' }
    ],
    activeMatch: '^/about'
  }
]

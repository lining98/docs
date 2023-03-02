module.exports = [
  { text: "主页", link: "/" },
  // {
  //   text: "计算机",
  //   items: [
  //     { text: "计算机网络", link: "" },
  //     { text: "数据结构", link: "" },
  //     { text: "操作系统", link: "" },
  //   ],
  // },
  {
    text: "前端",
    items: [
      {
        text: "基础",
        items: [
          { text: "HTML5", link: "/frontEnd/html5/" },
          { text: "CSS3", link: "/frontEnd/css3/" },
          { text: "JavaScript", link: "/frontEnd/javaScript/" },
        ],
      },
      {
        text: "框架",
        items: [
          { text: "vue", link: "/frontEnd/vue/" },
          { text: "react", link: "/frontEnd/react/" },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "git", link: "/frontEnd/git/" },
          { text: "echarts", link: "/frontEnd/echarts/" },
          // { text: "threejs", link: "/frontEnd/threejs/index" },
          // { text: "vite", link: "/frontEnd/vite/index" },
        ],
      },
    ],
  },
  {
    text: "后端",
    items: [
      { text: "nodejs", link: "/backEnd/nodejs/" },
      { text: "mysql", link: "/backEnd/mysql/" },
    ],
  },
  { text: "算法", link: "/algorithms/index" },
  {
    text: "关于",
    items: [
      // { text: "关于我", link: "/about" },
      { text: "关于11", link: "/about/about1" },
      { text: "关于222", link: "/about/about2" },
      { text: "github", link: "https://github.com/lining98/docs" },
      { text: "leetcode", link: "https://leetcode.cn/u/l_ning98/" },
    ],
  },
];

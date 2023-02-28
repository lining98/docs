module.exports = [
    { text: "主页", link: "/" },
    {
      text: "计算机",
      items: [
        { text: "计算机网络", link: "" },
        { text: "数据结构", link: "" },
        { text: "操作系统", link: "" },
      ],
    },
    {
      text: "前端",
      items: [
        {
          text: "基础",
          items: [
            { text: "HTML", link: "/frontEnd/html/" },
            { text: "CSS", link: "/frontEnd/css/" },
            { text: "JavaScript", link: "/frontEnd/japanese/" },
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
            { text: "git", link: "/frontEnd/git/git/" },
            { text: "node", link: "/frontEnd/node/" },
            { text: "vite", link: "/frontEnd/vite/" },
          ],
        },
      ],
    },
    {
      text:'后端',
      items:[
        { text: "nodejs", link: "" },
        { text: "mysql", link: "" },
      ]
    },
    { text: "算法", link:'/algorithms' },
    {
      text:'关于',
      items:[
        { text: "关于我", link: "/about" },
        { text: "github", link: "https://github.com/lining98/vuepress-blog" },
        { text: "leetcode", link: "https://leetcode.cn/u/l_ning98/" },
      ]
    },
  ]
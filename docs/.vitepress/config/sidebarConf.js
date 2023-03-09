module.exports = {
  "/about/": require("../../about/sidebar"),
  "/frontEnd/": require("../../frontEnd/sidebar"),

  // backEnd
  "/backEnd/nodejs/": require("../../backEnd/nodejs/sidebar"),
  "/backEnd/mysql/": require("../../backEnd/mysql/sidebar"),

  // '/frontEnd/git': require('../../frontEnd/git/sidebar'),
};
// module.exports = {
//   "/articles/other": [
//     {
//       text: "vitepress", //标签名字
//       collapsible: true, //是不是可以动态展开
//       collapsed: true, //默认是不是展开
//       items: [
//         //孩子
//         {
//           text: "index", //标签名字
//           link: "/articles/other/vitepress/index", //链接
//         },
//       ],
//     },
//   ],
// };

const headConf = require("./config/headConf");
// const pluginsConf = require("./config/pluginsConf");
const navsConf = require("./config/navConf");
const sidebarConf = require("./config/sidebarConf");

module.exports = {
  base: "/docs/",
  title: "docs",
  description: "一个前端小子的笔记",
  head: headConf,
  // plugins: pluginsConf,
  themeConfig: {
    // siteTitle: "左上角的标题", //左上角的
    logo: "/logo.jpg", //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
    nav: navsConf,
    sidebar: sidebarConf,
    socialLinks: [{ icon: "github", link: "https://github.com/lining98" }], //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了

    // 最后更新时间
    lastUpdated: "更新时间",
  },
};

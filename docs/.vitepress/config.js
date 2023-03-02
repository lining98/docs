const headConf = require("./config/headConf");
// const pluginsConf = require("./config/pluginsConf");
const navsConf = require("./config/navConf");
const sidebarConf = require("./config/sidebarConf");

module.exports = {
  base: "/docs/",
  title: "lemon's blog",
  description: "学习并分享各类前端的项目和知识",
  head: headConf,
  // plugins: pluginsConf,
  lastUpdated: true,
  themeConfig: {
    siteTitle: "lemon's blog", //左上角的
    logo: "/img/logo.png", //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
    nav: navsConf,
    sidebar: sidebarConf,
    // socialLinks: [{ icon: "github", link: "https://github.com/lining98" }], //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了

    // 最后更新时间
    lastUpdatedText: "Updated Date",
    // lastUpdatedText: "更新时间",
    // autoCreateIssue: true,

    // 页脚配置
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
  markdown: {
    theme: "material-theme-palenight",
    lineNumbers: true,
  },
};

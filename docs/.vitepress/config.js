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
  cleanUrls: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    siteTitle: "柠檬小窝", //左上角的
    logo: "/img/logo.png", //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
    nav: navsConf,
    sidebar: sidebarConf,
    /* 右侧大纲配置 */
    outline: {
      level: "deep",
      label: "本页目录",
    },

    // 最后更新时间
    lastUpdatedText: "上次更新",

    // 页脚配置
    footer: {
      message: "lemon's personal blog.",
      copyright: "Copyright © 2023-present lemon/lining",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    /* Algolia DocSearch 配置 */
    algolia: {
      appId: "",
      apiKey: "",
      indexName: "search",
      placeholder: "搜索",
      translations: {
        button: {
          buttonText: "搜索",
          buttonAriaLabel: "搜索",
        },
        modal: {
          searchBox: {
            resetButtonTitle: "清除查询条件",
            resetButtonAriaLabel: "清除查询条件",
            cancelButtonText: "取消",
            cancelButtonAriaLabel: "取消",
          },
          startScreen: {
            recentSearchesTitle: "搜索历史",
            noRecentSearchesText: "没有搜索历史",
            saveRecentSearchButtonTitle: "保存至搜索历史",
            removeRecentSearchButtonTitle: "从搜索历史中移除",
            favoriteSearchesTitle: "收藏",
            removeFavoriteSearchButtonTitle: "从收藏中移除",
          },
          errorScreen: {
            titleText: "无法获取结果",
            helpText: "你可能需要检查你的网络连接",
          },
          footer: {
            selectText: "选择",
            navigateText: "切换",
            closeText: "关闭",
            searchByText: "搜索提供者",
          },
          noResultsScreen: {
            noResultsText: "无法找到相关结果",
            suggestedQueryText: "你可以尝试查询",
            reportMissingResultsText: "你认为该查询应该有结果？",
            reportMissingResultsLinkText: "点击反馈",
          },
        },
      },
    },
  },
};

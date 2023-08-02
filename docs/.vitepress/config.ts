import { defineConfig } from 'vitepress'
import { head, nav, sidebar } from './configs'
import { resolve } from "path"
// 引入搜索插件
import { SearchPlugin } from 'vitepress-plugin-search'
import flexSearchIndexOptions from 'flexsearch'

const base = '/docs/'

var options = {
  ...flexSearchIndexOptions,
  previewLength: 100, //搜索结果预览长度
  buttonLabel: '搜索',
  placeholder: '情输入关键词'
}

export default defineConfig({
  outDir: '../dist',

  base,
  title: "lemon's blog",
  description: '学习并分享各类前端的项目和知识',
  head: [
    // 打包后使用
    ['link', { rel: 'icon', href: `${base}favicon.ico` }],
    // 本地开发用
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    siteTitle: '柠檬小窝', //左上角的
    logo: '/logo.png', //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录'
    },

    // 最后更新时间
    lastUpdatedText: '上次更新',

    socialLinks: [{ icon: 'github', link: 'https://github.com/lining98' }],

    // 页脚配置
    footer: {
      message: "lemon's personal blog.",
      copyright: 'Copyright © 2023-present lemon/lining'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 仅移动端生效
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部'
  },
  vite: {
    resolve: {
      alias: {
        // 别名
        '@': resolve(__dirname, '../'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    },

    plugins: [SearchPlugin(options)],
  }
})

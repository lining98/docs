import type { DefaultTheme } from 'vitepress'

const about: DefaultTheme.Config['sidebar'] = [
  {
    text: '关于侧边栏',
    items: [
      { text: '关于', link: '/about/' }
      // { text: "关于2", link: "/about/about2" },
    ]
  }
]
const frontEnd_Js: DefaultTheme.Config['sidebar'] = [
  {
    text: 'JavaScript',
    items: [{ text: 'JavaScript简介', link: '/frontEnd/JavaScript/' }]
  }
]
const frontEnd_Ts: DefaultTheme.Config['sidebar'] = [
  {
    text: 'TypeScript',
    items: [{ text: 'TypeScript介绍', link: '/frontEnd/TypeScript/' }]
  }
]
export const sidebar: DefaultTheme.Config['sidebar'] = {
  // "/frontEnd/": require("../../frontEnd/sidebar"),
  // "/frontEnd/JavaScript/": require("../../frontEnd/JavaScript/sidebar"),
  '/frontEnd/JavaScript/': frontEnd_Js,
  '/frontEnd/TypeScript/': frontEnd_Ts,
  // '/frontEnd/git': require('../../frontEnd/git/sidebar'),

  // backEnd
  // "/backEnd/nodejs/": require("../../backEnd/nodejs/sidebar"),
  // "/backEnd/mysql/": require("../../backEnd/mysql/sidebar"),

  // algorithms
  // "/algorithms/": require("../../algorithms/sidebar"),

  // "/about/": require("../../about/sidebar"),
  '/about/': about
}

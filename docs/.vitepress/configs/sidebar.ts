import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  // "/frontEnd/": require("../../frontEnd/sidebar"),
  // "/frontEnd/html5/": require("../../frontEnd/html5/sidebar"),
  "/frontEnd/css3/": require("../../frontEnd/css3/sidebar"),
  "/frontEnd/TypeScript/": require("../../frontEnd/TypeScript/sidebar"),
  "/frontEnd/JavaScript/": require("../../frontEnd/JavaScript/sidebar"),
  // '/frontEnd/git': require('../../frontEnd/git/sidebar'),
  '/frontEnd/echarts': require('../../frontEnd/echarts/sidebar'),
  '/frontEnd/git': require('../../frontEnd/git/sidebar'),

  // backEnd
  "/backEnd/nodejs/": require("../../backEnd/nodejs/sidebar"),
  "/backEnd/mysql/": require("../../backEnd/mysql/sidebar"),

  // algorithms
  "/algorithms/": require("../../algorithms/sidebar"),

  "/about/": require("../../about/sidebar"),
};

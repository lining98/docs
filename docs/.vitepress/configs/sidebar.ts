import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {

  // frontEnd
  "/frontEnd/css3/": require("../../frontEnd/css3/sidebar"),
  "/frontEnd/JavaScript/": require("../../frontEnd/JavaScript/sidebar"),
  "/frontEnd/vue/": require("../../frontEnd/vue/sidebar"),
  "/frontEnd/axios/": require("../../frontEnd/axios/sidebar"),
  "/frontEnd/TypeScript/": require("../../frontEnd/TypeScript/sidebar"),

  // backEnd
  "/backEnd/nodejs/": require("../../backEnd/nodejs/sidebar"),
  "/backEnd/mysql/": require("../../backEnd/mysql/sidebar"),

  // others
  '/others/visualization': require('../../others/visualization/sidebar'),
  '/others/git': require('../../others/git/sidebar'),

  // algorithms
  // "/algorithms/": require("../../algorithms/sidebar"),

  "/about/": require("../../about/sidebar"),
};

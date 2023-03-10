import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  "/about/": require("../../about/sidebar"),


  // "/frontEnd/": require("../../frontEnd/sidebar"),
  "/frontEnd/TypeScript/": require("../../frontEnd/TypeScript/sidebar"),
  "/frontEnd/JavaScript/": require("../../frontEnd/JavaScript/sidebar"),
  // '/frontEnd/git': require('../../frontEnd/git/sidebar'),

  // backEnd
  "/backEnd/nodejs/": require("../../backEnd/nodejs/sidebar"),
  "/backEnd/mysql/": require("../../backEnd/mysql/sidebar"),

  // algorithms
  "/algorithms/": require("../../algorithms/sidebar"),

};

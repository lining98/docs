//vite.config.ts
import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";
import flexSearchIndexOptions from "flexsearch";
import path from "path";
//default options
var options = {
  ...flexSearchIndexOptions,
  previewLength: 100, //搜索结果预览长度
  buttonLabel: "搜索",
  placeholder: "情输入关键词",
};

export default defineConfig({
  plugins: [SearchPlugin(options)],
  resolve: {
    alias: {
      '@': path.resolve('../docs'), // 相对路径别名配置，使用 @ 代替 src
    },
  },
});

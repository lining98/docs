import { h, App } from "vue";
import { useData } from "vitepress";
import Theme from "vitepress/theme";

import Visitor from './components/Visitor.vue'
import Copyright from './components/Copyright.vue'
import toTop from './components/toTop.vue'

import "./styles/index.scss";

export default Object.assign({}, Theme, {
  Layout: () => {
    const props: Record<string, any> = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    return h(Theme.Layout, props,{
      /**
       * 相关插槽
       * https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue
       */
       'aside-top': () => h(toTop),
       'nav-bar-title-after': () => h(Visitor),
       'doc-after': () => h(Copyright),
    });
  },
  enhanceApp({ app }: { app: App }) {
    app.provide('DEV', process.env.NODE_ENV === 'development')
  }
});

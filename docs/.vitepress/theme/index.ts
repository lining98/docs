import { h, App } from "vue";
import { useData } from "vitepress";
// import DefaultTheme from 'vitepress/theme'
import Theme from "vitepress/theme";
import toTop from '../components/toTop.vue'
import "./assets/style/index.scss";

export default Object.assign({}, Theme, {
  ...Theme,
  enhanceApp({ app }) {
    app.component('toTop', toTop)
    // Theme.enhanceApp(app)
  },
  Layout: () => {
    const props: Record<string, any> = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    return h(Theme.Layout, props);
  },
});

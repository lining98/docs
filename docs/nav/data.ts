import type { NavLink } from "./components/type";

type NavData = {
  title: string;
  items: NavLink[];
};
const base = '/docs/'
export const NAV_DATA: NavData[] = [
  {
    title: "常用工具",
    items: [
      {
        icon: "https://static.runoob.com/images/c-runoob-logo.ico",
        title: "菜鸟工具",
        desc: "",
        link: "https://c.runoob.com/",
      },
      {
        icon: "https://shared-https.ydstatic.com/images/favicon.ico",
        title: "有道翻译",
        desc: "",
        link: "https://fanyi.youdao.com/index.html#/",
      },
      {
        icon: "https://unbug.github.io/codelf/images/codelf_logo.f4ae25bd.png",
        title: "CODEELF",
        desc: "变量取名",
        link: "https://unbug.github.io/codelf/",
      },
      {
        icon: "https://tinypng.com/images/apple-touch-icon.png",
        title: "TinyPNG",
        desc: "在线图片压缩工具",
        link: "https://tinypng.com",
      },
      {
        icon: "https://tool.lu/favicon.ico",
        title: "在线工具",
        desc: "开发人员的工具箱",
        link: "https://tool.lu",
      },
    ],
  },
  {
    title: "社区",
    items: [
      {
        title: "Github",
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        },
        desc: "一个面向开源及私有软件项目的托管平台",
        link: "https://github.com",
      },
      {
        title: "码云",
        icon: "https://gitee.com/favicon.ico",
        desc: "Gitee 是由开源中国出品的代码托管平台，汇聚了国内优秀的开源项目和作者",
        link: "https://gitee.com/",
      },
      {
        title: "稀土掘金",
        icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png",
        desc: "面向全球中文开发者的技术内容分享与交流平台",
        link: "https://juejin.cn",
      },
      {
        title: "知乎",
        icon: "https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png",
        desc: "中文互联网高质量的问答社区和创作者聚集的原创内容平台",
        link: "https://juejin.cn",
      },
      {
        title: "CSDN",
        icon: "https://g.csdnimg.cn/static/logo/favicon32.ico",
        desc: "CSDN是全球知名中文IT技术交流平台,创建于1999年,包含原创博客、精品问答、职业培训、技术论坛、资源下载等产品服务",
        link: "https://www.csdn.net/",
      },
      {
        title: "SegmentFault 思否",
        icon: "https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png",
        desc: "技术问答开发者社区",
        link: "https://segmentfault.com",
      },
      {
        icon: "https://notes.fe-mm.com/icons/cnblogs.svg",
        title: "博客园",
        // icon: 'https://common.cnblogs.com/favicon.ico',
        desc: "博客园是一个面向开发者的知识分享社区",
        link: "https://www.cnblogs.com",
      },
      {
        icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
        title: "Stack Overflow",
        desc: "全球最大的技术问答网站",
        link: "https://stackoverflow.com",
      },
    ],
  },

  {
    title: "Vue 生态",
    items: [
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue 3",
        desc: "渐进式 JavaScript 框架",
        link: "https://cn.vuejs.org",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue 2",
        desc: "渐进式 JavaScript 框架",
        link: "https://v2.cn.vuejs.org",
      },
      {
        icon: "https://static.vue-js.com/6280b990-ff19-11ea-85f6-6fac77c0c9b3.png",
        title: "Vue3 One Piece",
        desc: "更快，更轻，易维护，更多的原生支持",
        link: "https://vue3js.cn/",
      },
      {
        icon: "https://pinia.vuejs.org/logo.svg",
        title: "Pinia",
        desc: "符合直觉的 Vue.js 状态管理库",
        link: "https://pinia.vuejs.org/zh",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vuex",
        desc: "Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。",
        link: "https://vuex.vuejs.org/zh/",
      },
      {
        icon: "https://nuxt.com/icon.png",
        title: "Nuxt.js中文网",
        desc: "一个基于 Vue.js 的通用应用框架",
        link: "https://nuxt.com.cn",
      },
      {
        icon: "https://vueuse.org/favicon.svg",
        title: "VueUse",
        desc: "Vue Composition API 的常用工具集",
        link: "https://vueuse.org",
      },
      {
        icon: "https://web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788",
        title: "uni-app",
        desc: "uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。",
        link: "https://uniapp.dcloud.net.cn/",
      },
      {
        icon: "https://element-plus.org/images/element-plus-logo-small.svg",
        title: "Element Plus",
        desc: "基于 Vue 3，面向设计师和开发者的组件库",
        link: "https://element-plus.org",
      },
      {
        icon: "https://www.antdv.com/assets/logo.1ef800a8.svg",
        title: "Ant Design Vue",
        desc: "Ant Design 的 Vue 实现，开发和服务于企业级后台产品",
        link: "https://antdv.com",
      },
      {
        icon: "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
        title: "Vant",
        desc: "轻量、可定制的移动端 Vue 组件库",
        link: "https://vant-ui.github.io/vant",
      },
      {
        icon: "https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico",
        title: "Cube UI",
        desc: "基于 Vue.js 实现的精致移动端组件库",
        link: "https://didi.github.io/cube-ui",
      },
      {
        icon: "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png",
        title: "NutUI",
        desc: "京东风格的轻量级移动端组件库",
        link: "https://nutui.jd.com",
      },
    ],
  },
  {
    title: "React 生态",
    items: [
      {
        icon: "https://zh-hans.reactjs.org/favicon.ico",
        title: "React",
        desc: "用于构建用户界面的 JavaScript 库",
        link: "https://zh-hans.reactjs.org",
      },
      {
        icon: "https://reactrouter.com/favicon-light.png",
        title: "React Router",
        desc: "React 的声明式路由",
        link: "https://reactrouter.com",
      },
      {
        icon: "https://nextjs.org/static/favicon/safari-pinned-tab.svg",
        title: "Next.js",
        desc: "一个用于 Web 的 React 框架",
        link: "https://nextjs.org",
      },
      {
        icon: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
        title: "UmiJS",
        desc: "插件化的企业级前端应用框架",
        link: "https://umijs.org",
      },
      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
        title: "Ant Design",
        desc: "一套企业级 UI 设计语言和 React 组件库",
        link: "https://ant.design",
      },
      {
        icon: "https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg",
        title: "Ant Design Mobile",
        desc: "构建移动 WEB 应用程序的 React 组件库",
        link: "https://mobile.ant.design",
      },
      // {
      //   icon: "https://docs.pmnd.rs/apple-touch-icon.png",
      //   title: "Zustand",
      //   desc: "一个小型、快速、可扩展的 React 状态管理解决方案",
      //   link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
      // },
      // {
      //   icon: "https://valtio.pmnd.rs/favicon.ico",
      //   title: "Valtio",
      //   desc: "makes proxy-state simple for React and Vanilla",
      //   link: "https://valtio.pmnd.rs",
      // },
      // {
      //   icon: "https://jotai.org/favicon.svg",
      //   title: "Jotai",
      //   desc: "primitive and flexible state management for React",
      //   link: "https://jotai.org",
      // },
      {
        icon: "https://cn.redux.js.org/img/redux.svg",
        title: "Redux",
        desc: "JavaScript 应用的状态容器，提供可预测的状态管理",
        link: "https://cn.redux.js.org",
      },
      {
        icon: "https://zh.mobx.js.org/assets/mobx.png",
        title: "MobX",
        desc: "一个小型、快速、可扩展的 React 状态管理解决方案",
        link: "https://zh.mobx.js.org",
      },
      {
        icon: "https://ahooks.js.org/simple-logo.svg",
        title: "ahooks",
        desc: "一套高质量可靠的 React Hooks 库",
        link: "https://ahooks.js.org/zh-CN",
      },
    ],
  },
  {
    title: "类库",
    items: [
      {
        icon: `${base}/image/axios.png`,
        title: "axios中文文档",
        desc: "易用、简洁且高效的http库",
        link: "http://www.axios-js.com/zh-cn/docs/",
      },
      {
        icon: "https://www.lodashjs.com/img/favicon.ico",
        title: "Lodash 中文文档",
        desc: "Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。",
        link: "https://github.com/cdoco/learn-regex-zh",
      },
      // {
      //   icon: "",
      //   title:"jquery",
      //   desc: "一个兼容多浏览器的JavaScript框架",
      //   link: "",
      // },
      {
        icon: `${base}/image/moment-favicon.png`,
        title: "Monment",
        desc: "JavaScript 日期处理类库",
        link: "http://momentjs.cn/",
      },
      {
        icon: "https://dayjs.fenxianglu.cn/assets/favicon.png",
        title: "Day.js中文网",
        desc: "Day.js是一个极简的JavaScript库，可以为现代浏览器解析、验证、操作和显示日期和时间。",
        link: "https://dayjs.fenxianglu.cn/",
      },
      {
        icon: `${base}/image/mockjs.png`,
        title: "mockjs",
        desc: "生成随机数据，拦截Ajax请求",
        link: "http://mockjs.com/",
      },
      {
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAtFBMVEUAAAAZTeAYTOAZTeAZTeAZTeAZTeAZTeAZTeAZTeAZTeAZTeAZTeD///8aT+EUSeAIP94dUeEANNwANtwAMdsALtsMQ98DO90AOd3L1/i3x/aAnO7G0/izxPWuwPSds/JYfelFb+YRRt8AKNr2+P7o7fzW4PrQ2vmOqPB5mO1eg+pRd+dLdOc7aOU0YuQvXuMnWOIAINjt8fzd5Pq7y/ahtvKUrPGIpO92lu13lOxghOlQeOcxA9krAAAADHRSTlMA8t2TWwjq2LKsYFFcuDlSAAABBklEQVQY02WRV47DMAxEbcepJtXl3mKn92wv97/XSlok+Qg/CPCBA45GnqvhbDr2/fF0NvTuFQZAaJLKtAvCGxsAgIh326KljAweTB3WeZPj64mBo5Fhco9fQugjbjVAZG6MALp4kV8pgWv5YeBo6IUAkBzxsycA7HcemzH0JhaecMl7SnjCuBknXmA6TStc7lPdEbAVeL7phMU1YrZj0lHfQeBMthlieXbUt3K7S1V6WOHizJx84hYZJ1QnOTbKHnKW4rm1QvQF36S15MyL940mQCTHjbLm3TNFte61UKJ8oUYR/QciClwV30WWXVIOt5gobeuqbn4Syx4hS6WUSCi5h/z8HX/uFRgwHT/1cgAAAABJRU5ErkJggg==",
        title: "swiper",
        desc: "开源、免费、强大的触摸滑动插件",
        link: "https://www.swiper.com.cn/",
      },
      {
        icon: "https://v5.bootcss.com/docs/5.3/assets/img/favicons/apple-touch-icon.png",
        title: "bootstrap",
        desc: "强大、可扩展、功能丰富的前端开发工具包。它提供的功能包括：基于 Sass 进行编译和定制、内置的网格系统和组件、强大的 JavaScript 插件等。",
        link: "https://v5.bootcss.com/",
      },
    ],
  },
  {
    title: "文档",
    items: [
      {
        icon: "https://www.tslang.cn/assets/images/icons/favicon.ico",
        title:"TypeScript中文网",
        desc: "TypeScript是JavaScript类型的超集，它可以编译成纯JavaScript。TypeScript可以在任何浏览器、任何计算机和任何操作系统上运行",
        link: "https://www.tslang.cn/index.html",
      },
      // {
      //   icon: "",
      //   title:"",
      //   desc: "",
      //   link: "",
      // },
    ],
  },
  {
    title: "JavaScript学习",
    items: [
      {
        icon: "https://zh.javascript.info/img/favicon/apple-touch-icon-precomposed.png",
        title: "现代 JavaScript 教程",
        desc: "以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。",
        link: "https://zh.javascript.info/",
      },
      {
        icon: "https://es6.ruanyifeng.com/favicon.ico",
        title: "ECMAScript 6 入门",
        desc: "《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。",
        link: "https://es6.ruanyifeng.com/",
      },
      {
        icon: "https://github.com/fluidicon.png",
        title: "stephentian/33-js-concepts",
        desc: "JavaScript开发者应懂的33个概念",
        link: "https://github.com/stephentian/33-js-concepts",
      },
      {
        icon: "https://github.com/fluidicon.png",
        title: "lydiahallie/javascript-questions",
        desc: "JavaScript的问题",
        link: "https://github.com/lydiahallie/javascript-questions",
      },
      {
        icon: "https://github.com/fluidicon.png",
        title: "denysdovhan/wtfjs",
        desc: "一个有趣和棘手的 JavaScript 示例列表。",
        link: "https://github.com/denysdovhan/wtfjs/blob/master/README-zh-cn.md",
      },
      {
        icon: "https://regexr-cn.com/assets/icons/favicon-16x16.png?1",
        title: "RegExr:学习、构建和测试 正则表达式",
        desc: "RegExr 是一个集 学习、构建和测试正则表达式于一身的在线工具。",
        link: "https://regexr-cn.com/",
      },
      {
        icon: "https://cdn.codejiaonang.com/favicon.ico",
        title: "编程胶囊-正则表达式入门",
        desc: "半小时入门，手机也能写正则。全网最好的正则表达式课程不服来战！",
        link: "https://codejiaonang.com/#/course/regex_chapter1/0/0",
      },
      // https://github.com/sorrycc/awesome-javascript
    ],
  },
  {
    title: "CSS 相关",
    items: [
      {
        icon: "https://lhammer.cn/You-need-to-know-css/static/favicon.ico",
        title: "CSS Tricks",
        desc: "Web开发者应该掌握的CSS诀窍",
        link: "https://lhammer.cn/You-need-to-know-css/#/zh-cn/",
      },
      {
        icon: "https://animista.net/safari-pinned-tab.svg",
        title: "Animista - CSS",
        desc: "css的动画效果",
        link: "https://animista.net/",
      },
      {
        icon: "",
        title: "Hover.css",
        desc: "鼠标悬停效果",
        link: "https://ianlunn.github.io/Hover/",
      },
      {
        icon: "https://chokcoco.github.io/CSS-Inspiration/logo2.png",
        title: "CSS Inspiration",
        desc: "CSS灵感",
        link: "https://chokcoco.github.io/CSS-Inspiration/#/",
      },
      {
        icon: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
        title: "Sass",
        desc: "一个成熟，稳定，功能强大的专业级 CSS 扩展语言",
        link: "https://sass-lang.com",
      },
      {
        icon: "https://www.tailwindcss.cn/apple-touch-icon.png",
        title: "TailwindCSS 中文网",
        desc: "一个功能类优先的 CSS 框架",
        link: "https://www.tailwindcss.cn/docs",
      },
      {
        icon: "https://angrytools.com/include/img/apple-touch-icon.png",
        title: "CSS Animation Kit",
        desc: "",
        link: "https://angrytools.com/css/animation/",
      },
    ],
  },
  {
    title: "可视化图表库",
    items: [
      {
        icon: "https://echarts.apache.org/zh/images/favicon.png",
        title: "Apache ECharts",
        desc: "一个基于 JavaScript 的开源可视化图表库",
        link: "https://echarts.apache.org/zh/index.html",
      },
      {
        icon: `${base}/image/favicon-datav.ico`,
        title: "DataV",
        desc: "Vue 大屏数据展示组件库",
        link: "http://datav.jiaminghi.com/",
      },
      {
        icon: "https://img.alicdn.com/imgextra/i3/O1CN01NQARus1gyEAmmQ9T0_!!6000000004210-0-tps-670-670.jpg",
        title: "DataV.GeoAtlas地理小工具系列",
        desc: "获取各省市县的json数据",
        link: "http://datav.aliyun.com/portal/school/atlas/area_selector",
      },
      {
        icon: `${base}/image/favicon-threejs.ico`,
        title: "Three.js中文网",
        desc: "Web3D可视化系统课程",
        link: "http://webgl3d.cn/",
      },
      {
        icon: "https://threejs.org/files/favicon.ico",
        title: "threejs",
        desc: "",
        link: "https://threejs.org/",
      },
    ],
  },
  {
    title: "Node 相关",
    items: [
      {
        icon: "https://nodejs.org/static/images/favicons/favicon.png",
        title: "Node.js",
        desc: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境",
        link: "https://nodejs.org/zh-cn",
      },
      {
        icon: "https://nodejs.org/static/images/favicons/favicon.png",
        title: "Node.Js中文网",
        desc: "Node.js 是一个免费的、开源的、跨平台的 JavaScript 运行时环境，允许开发人员在浏览器之外编写命令行工具和服务器端脚本.",
        link: "http://nodejs.p2hp.com/",
      },
      {
        icon: "https://expressjs.com/images/favicon.png",
        title: "Express中文网",
        desc: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架",
        link: "https://expressjs.com.cn",
      },
      // {
      //   icon: "https://nodejs.org/static/images/favicons/",
      //   title: "Koa",
      //   desc: "基于 Node.js 平台的下一代 web 开发框架",
      //   link: "https://koajs.com",
      // },
      // {
      //   icon: "https://www.eggjs.org/favicon.png",
      //   title: "Egg",
      //   desc: "为企业级框架和应用而生",
      //   link: "https://www.eggjs.org/zh-CN",
      // },
      {
        icon: "https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",
        title: "Nest.js 中文文档",
        desc: "用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架",
        link: "https://docs.nestjs.cn",
      },
    ],
  },
  {
    title: "编译&构建&打包",
    items: [
      {
        icon: "https://static.npmjs.com/58a19602036db1daee0d7863c94673a4.png",
        title: "npmjs",
        desc: "世界上最流行的软件生态系统",
        link: "https://www.npmjs.com/",
      },
      {
        icon: "https://www.webpackjs.com/icon_180x180.png",
        title: "Webpack 中文网",
        desc: "一个用于现代 JavaScript 应用程序的静态模块打包工具",
        link: "https://www.webpackjs.com",
      },
      {
        icon: "https://cn.vitejs.dev/logo.svg",
        title: "Vite 中文文档",
        desc: "下一代前端工具链",
        link: "https://cn.vitejs.dev",
      },
      // {
      //   icon: "https://www.rollupjs.com/img/favicon.png",
      //   title: "Rollup",
      //   desc: "Rollup 是一个 JavaScript 模块打包器",
      //   link: "https://www.rollupjs.com",
      // },
      {
        icon: "https://turbo.build/images/favicon-dark/apple-touch-icon.png",
        title: "Turbo",
        desc: "Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust",
        link: "https://turbo.build",
      },
      {
        icon: "https://www.babeljs.cn/img/favicon.png",
        title: "Babel",
        desc: "Babel 是一个 JavaScript 编译器",
        link: "https://www.babeljs.cn",
      },
      {
        icon: "https://esbuild.github.io/favicon.svg",
        title: "esbuild",
        desc: "An extremely fast bundler for the web",
        link: "https://esbuild.github.io",
      },
      // {
      //   icon: "https://swc.rs/favicon/apple-touch-icon.png",
      //   title: "SWC",
      //   desc: "Rust-based platform for the Web",
      //   link: "https://swc.rs",
      // },
    ],
  },
  {
    title: "前端学习资料",
    items: [
      {
        icon: "https://www.w3school.com.cn/ui2019/logo-32-red.png",
        title: "w3school",
        desc: "",
        link: "https://www.w3school.com.cn/",
      },
      {
        icon: "https://static.runoob.com/images/favicon.ico",
        title: "菜鸟教程",
        desc: "学的不仅是技术，更是梦想！",
        link: "https://www.runoob.com",
      },
      {
        icon: "https://devdocs.io/favicon.ico",
        title: "DevDocs API--Web开发技术文档",
        desc: "查询所有web技术api的文档",
        link: "https://devdocs.io/",
      },
      {
        icon: "https://www.lingtiku.com/favicon.ico",
        title: "灵题库-前端题库",
        desc: "",
        link: "https://www.lingtiku.com/",
      },
    ],
  },
  {
    title: "算法",
    items: [
      {
        icon: "https://books.halfrost.com/leetcode/apple-touch-icon-60x60.png",
        title: "leetcode",
        desc: "",
        link: "https://leetcode.cn/",
      },
      {
        icon: "https://www.eveningwater.com/static/image/icon.jpg",
        title: "剑指offer算法题",
        desc: "",
        link: "https://eveningwater.github.io/to-offer/#/",
      },
      {
        icon: "https://static.nowcoder.com/images/logo_web_300.png",
        title: "牛客",
        desc: "",
        link: "https://www.nowcoder.com/",
      },
    ],
  },
];

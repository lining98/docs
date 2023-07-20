module.exports = [
  {
    text: 'JavaScript 基础',
    collapsed: true,
    items: [
      { text: '基本语法', link: '/JavaScript/base/' },
      { text: '变量', link: '/JavaScript/base/variable' },
      { text: '数据类型', link: '/JavaScript/base/types' },
      { text: '运算符', link: '/JavaScript/base/operator' },
      { text: '流程控制', link: '/JavaScript/base/flow' },
      { text: '数组', link: '/JavaScript/base/array' },
      { text: '对象', link: '/JavaScript/base/object' },
      { text: '函数', link: '/JavaScript/base/function' }
    ]
  },
  {
    text: 'JavaScript 进阶',
    collapsed: true,
    items: [
      { text: '闭包', link: '/JavaScript/core/closure' },
      { text: '函数柯里化', link: '/JavaScript/core/currying' },
      { text: '作用域', link: '/JavaScript/core/scope' },
      { text: '节流和防抖', link: '/JavaScript/core/debounce' },
      { text: '深拷贝', link: '/JavaScript/core/copy' },
      { text: 'promise', link: '/JavaScript/core/promise' },
      { text: '数组去重', link: '/JavaScript/core/duplicate' },
      { text: '数组扁平化', link: '/JavaScript/core/flattening' },

      { text: 'Ajax', link: '/JavaScript/core/ajax' }
      // https://zhuanlan.zhihu.com/p/485338593
    ]
  },
  {
    text: '内置对象',
    collapsed: true,
    items: [
      { text: '内置对象', link: '/JavaScript/内置对象/' },
      { text: '内置对象: String', link: '/JavaScript/内置对象/String' },
      { text: '内置对象: Number和Math', link: '/JavaScript/内置对象/Number' },
      { text: '内置对象: Date', link: '/JavaScript/内置对象/Date' },
      { text: '内置对象: RegExp', link: '/JavaScript/内置对象/RegExp' }
    ]
  },
  {
    text: '面向对象',
    collapsed: true,
    items: [
      { text: '面向对象概念', link: '/JavaScript/面向对象/' },
      { text: '实例对象与方法', link: '/JavaScript/面向对象/new' },
      { text: '类和构造函数', link: '/JavaScript/面向对象/class' },
      { text: '继承、封装和多态', link: '/JavaScript/面向对象/char' },
      { text: 'this 关键字', link: '/JavaScript/面向对象/this' },
      { text: '原型和原型链', link: '/JavaScript/面向对象/prototype' },
      { text: '严格模式', link: '/JavaScript/面向对象/strict' },
    ]
  },

  {
    text: 'DOM',
    collapsed: true,
    items: [
      { text: 'DOM介绍', link: '/JavaScript/DOM/' },
      { text: '获取和修改元素', link: '/JavaScript/DOM/获取和修改元素' },
      { text: '创建和操作元素', link: '/JavaScript/DOM/创建和操作元素' },
      { text: 'DOM节点', link: '/JavaScript/DOM/DOM节点' },
      { text: '事件处理', link: '/JavaScript/DOM/事件处理' },
      { text: '样式和类操作', link: '/JavaScript/DOM/样式和类操作' }
    ]
  },
  {
    text: 'BOM',
    collapsed: true,
    items: [
      { text: 'BOM介绍', link: '/JavaScript/BOM/' },
      { text: 'window对象', link: '/JavaScript/BOM/window' },
      { text: 'document对象', link: '/JavaScript/BOM/document' },
      { text: 'location对象', link: '/JavaScript/BOM/location' },
      { text: 'histoty对象', link: '/JavaScript/BOM/history' },
      { text: 'navigator对象', link: '/JavaScript/BOM/navigator' },
      { text: 'screen对象', link: '/JavaScript/BOM/screen' }
    ]
  },
  {
    text: '本地存储',
    collapsed: true,
    items: [
      { text: 'localStorage', link: '/JavaScript/storage/localStorage' },
      { text: 'sessionStorage', link: '/JavaScript/storage/sessionStorage' },
      { text: 'cookie', link: '/JavaScript/storage/cookie' },
    ]
  },
]

# input

## input type="password" 浏览器自动填充账号和密码

```html
<a-input type="password" placeholder="请输入登录密码" v-model="model.password" />
```

再 input 标签上设置属性 type 为 password 很容易被浏览器识别，然后自动填充以前保存的密码。这里推荐一种特别简单的方法解决这个问题。

**在 input 属性 type 为 text 的标签上添加下面的属性**
autoComplete="off"

**在 input 属性 type 为 password 的标签上添加下面的属性**
autoComplete="new-password"

```html
<a-input
  autoComplete="new-password"
  type="password"
  placeholder="请输入登录密码"
  v-model="model.password"
/>
```

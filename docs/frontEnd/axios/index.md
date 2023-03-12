# Axios

## 什么是axios？
Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

## 安装
使用npm：
```bash
npm install axios
```
使用cdn：
```js
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```


## 使用
- 执行`GET`请求
```js
let name = 'zs'
axios.get(`/api/xxxx?name=${name}`)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
// 或者
axios.get(`/api/xxxx`,{params:{name='zs'}})
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
```
- 执行`POST`请求
```js
const data = {name='zs'}
axios.post(`/api/xxxx`,data)
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });
```

## 拦截器
拦截器，我们大致可以分为两类， 一类是 **请求接口前的统一处理（请求拦截）** 、 一类是 **请求接口后的统一处理（响应拦截）**

- 请求拦截
    + 请求调整
    + 用户标识
- 响应拦截
    + 网络错误处理
    + 授权错误处理
    + 普通错误处理
    + 代码异常处理

在请求或响应被 `then` 或 `catch` 处理前拦截它们。
```js
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (result) {
    // 对响应数据做点什么
    return result;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```

## 错误处理
```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // 发出请求后，服务器用状态码进行响应
      // 这超出了2xx的范围
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // 提出了要求，但没有收到答复
      // `error.request` 是浏览器中XMLHttpRequest的一个实例，也是http的实例
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // 在设置请求时发生了一些事情，触发了一个错误
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
  ```
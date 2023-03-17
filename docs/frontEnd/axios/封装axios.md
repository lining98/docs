# 封装axios

## 1.封装目的
实现一个简单的封装，主要实现以下目的：
1. 实现请求拦截
2. 实现响应拦截
3. 常见错误信息处理
4. 请求头设置
5. api 集中式管理

## 2.初始化axios实例
```js
import axios from 'axios'
let apiBaseUrl = ''
const service = axios.create({
    baseURL:apiBaseUrl, // 基础请求地址
    timeout:9000,  // 请求超时设置
    withCredentials: false, // 跨域请求是否需要携带 cookie
})
```

## 3.设置请求拦截
```js
// 创建请求拦截
service.interceptors.request.use(
  (config) => {
    // 如果开启 token 认证
    if (serverConfig.useTokenAuthorization) {
      config.headers["Authorization"] = localStorage.getItem("token"); // 请求头携带 token
    }
    // 设置请求头
    if(!config.headers["content-type"]) { // 如果没有设置请求头
      if(config.method === 'post') {
        config.headers["content-type"] = "application/x-www-form-urlencoded"; // post 请求
        config.data = qs.stringify(config.data); // 序列化,比如表单数据
      } else {
        config.headers["content-type"] = "application/json"; // 默认类型
      }
    }
    console.log("请求配置", config);
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
```

## 4.设置响应拦截
```js
// 创建响应拦截
service.interceptors.response.use(
  (res) => {
    let data = res.data;
    // 处理自己的业务逻辑，比如判断 token 是否过期等等
    // 代码块
    return data;
  },
  (error) => {
    let message = "";
    if (error && error.response) {
      switch (error.response.status) {
        case 302:
          message = "接口重定向了！";
          break;
        case 400:
          message = "参数不正确！";
          break;
        case 401:
          message = "您未登录，或者登录已经超时，请先登录！";
          break;
        case 403:
          message = "您没有权限操作！";
          break;
        case 404:
          message = `请求地址出错: ${error.response.config.url}`;
          break;
        case 408:
          message = "请求超时！";
          break;
        case 409:
          message = "系统已存在相同数据！";
          break;
        case 500:
          message = "服务器内部错误！";
          break;
        case 501:
          message = "服务未实现！";
          break;
        case 502:
          message = "网关错误！";
          break;
        case 503:
          message = "服务不可用！";
          break;
        case 504:
          message = "服务暂时无法访问，请稍后再试！";
          break;
        case 505:
          message = "HTTP 版本不受支持！";
          break;
        default:
          message = "异常问题，请联系管理员！";
          break;
      }
    }
    return Promise.reject(message);
  }
);
```


## 5.封装常见的方法
```js
//get
export function getAction(url,parameter) {
  return service({
    url: url,
    method: 'get',
    params: parameter,
  })
}

//post
export function postAction(url,parameter) {
  return service({
    url: url,
    method:'post' ,
    data: parameter,
  })
}

//post method= { get | post | put | delete }
export function httpAction(url,parameter,method) {
  return service({
    url: url,
    method:method ,
    data: parameter,
    headers: signHeader
  })
}
```

## 6.使用
示例：
```js
let param = {
    username:'zs',
    password:'123456'
}

// 定义接口方法
const login = (params)=>postAction("/sys/login",params);

// 在页面中调用
import {login} from './xxx' // 引入上面login方法所在的文件
login(param).then(res=>console.log(res))

// 或者
imort {getAction} from './xxx' //getAction方法所在的文件路径
let data = {userid:'123'}
getAction('/userList/',data).then(res=>console.log(res))
getAction('/userList/',{userid:'123'}).then(res=>console.log(res))

```

## 相关文章
[关于 Axios 的再再再封装，总是会有所不一样](https://juejin.cn/post/7109115586219048996)

[十分钟封装一个好用的axios，省时又省力他不香吗](https://juejin.cn/post/7090889657721815076)

[前端架构带你 封装axios，一次封装终身受益「美团后端连连点赞」](https://juejin.cn/post/7124573626161954823)

# Nodejs 介绍

[官网传送门](https://nodejs.org/zh-cn/)

## 初识 Nodejs

> Node.js® is an open-source, cross-platform JavaScript runtime environment.
>
> Node.js® 是一个基于 Chrome V8 引擎 的 JavaScript 运行时环境

- 基于 [Express 框架](http://www.expressjs.com.cn/)，可以快速构建 Web 应用
- 基于 [Electron 框架](https://electronjs.org/)，可以构建跨平台的桌面应用
- 基于 [restify 框架](http://restify.com/)，可以快速构建 API 接口项目
- 读写和操作数据库、创建实用的命令行工具辅助前端开发、etc…

## Nodejs 的特点

- 异步、非阻塞 IO 模型
- 事件循环
- 单线程
- 总结：轻量和高效
  Node.js 的性能和效率非常高。

传统的 Java 语言是一个请求开启一个线程，当请求处理完毕后就关闭这个线程。而 Node.js 则完全没有采用这种模型，它本质上就是一个单线程。

**但一个线程如何服务于大量的请求、如何处理高并发的呢？这是因为，Node.js 采用的是异步的、非阻塞的模型。**

这里所谓的“单线程”，指的是 Node 的主线程只有一个。为了确保主线程不被阻塞，主线程是用于接收客户端请求。但不会处理具体的任务。而 Node 的背后还有一个线程池，线程池会处理长时间运行的任务（比如 IO 操作、网络操作）。线程池里的任务是通过队列和事件循环的机制来执行。

## 使用 Node.js 时的劣势
- 程序运行不稳定，可能会出现服务不可用的情况
- 程序运行效率较低，每秒的请求数维持在一个较低的水平


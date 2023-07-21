Nginx 部署刷新 404 问题

location / {
    root   C:\Users\....;
    index  index.html index.htm;

    try_files $uri $uri/ @Qrouter; // 加上这一句  找指定路径下的文件，如果不存在，则转给哪个文件执行
}


Nginx项目部署500的问题

#vue项目路由不是真实存在的，要加上这段代码
location @router {
    rewrite ^.*$ /index.html last;
}


## Nginx部署项目
1、 yarn build打包项目
2、 打开nginx.conf文件，配置对应的信息

3、 检查配置文件是否配置成功
```cmd
nginx -t -c D:\nginx-1.16.1\conf\nginx.conf
start nginx  # 运行nginx
```

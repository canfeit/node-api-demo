## node api demo

原生 api 实现简单静态资源响应及登陆/注册/身份认证功能

## 架构

- web 服务:[node http](https://nodejs.org/dist/latest-v11.x/docs/api/http.html)
- 数据库:[MySQL](http://mysql.com)
- 数据库驱动:[mysqljs](https://github.com/mysqljs/mysql)
- 登陆认证:[jwt(node crypto)](https://nodejs.org/dist/latest-v11.x/docs/api/crypto.html)

## 结构

```
node-api-demo/           原生api实现简单web项目
├── .gitignore           git提交忽略清单
├── db.js                数据库连接
├── index.js             服务入口
├── jwt.js               jwt实现
├── package.json         项目定义文件
├── README.md            本自述文件
├── router.js            路由设置方式1
├── routes.js            路由设置方式2
├── controller/          请求处理
│   └── user.js          用户请求处理
├── services/            业务逻辑层
│   └── user.js          用户业务处理
├── public/              静态资源
│   ├── favicon.ico      项目Favorites Icon
│   └── index.html       首页
└── node_modules/        第三方依赖
```

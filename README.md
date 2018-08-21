# simpleServer
即开即用的简单nodejs服务器模板
## 使用useage
+ git
```
    git clone https://github.com/keysama/reciteWords.git
```
+ npm
```
    npm install
```
+ node
```
    node app dev
    or
    node app pro
```
## 配置config
```
    config/env/development.js
    or
    config/env/production.js
```
+默认两种环境配置
    **development**-开发环境
    **production**-生产环境
    修改config/index.js添加更多环境

##基础插件
+ KOA
> https://github.com/koajs/koa
+ koa-static
> https://www.npmjs.com/package/koa-static
+ koa-bodyparser
> https://www.npmjs.com/package/koa-bodyparser
+ koa-session
> https://github.com/koajs/session
+ koa-router
> https://github.com/alexmingoia/koa-router
+ log4js
> https://github.com/log4js-node/log4js-node
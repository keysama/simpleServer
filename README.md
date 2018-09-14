# simpleServer
即开即用的简单node-Koa服务器模板
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
+ 默认两种环境配置
    **development**-开发环境
    **production**-生产环境
    修改config/index.js添加更多环境

## mysql封装:
+ sql语句使用
```
	// modules/sqlTestModule.js
	const mysql = require('../../config/mysql');
	let sql = `...some query`;
	let res = await mysql.db(sql);
	if(res === false){error..}
	//失败返回false，成功返回查询结果
	...some code
```
+ transaction事务使用
```
	// modules/sqlTestModule.js
	const mysql = require('../../config/mysql');
	let res = await mysql.startTrans(async (conn)=>{
			let sql1 = `...some query`;//success query
			let trans1 = await mysql.trans(conn,sql1);
			if(trans1===false){console.log('err');return false};
			let sql2 = `...some query`;//error query 
			let trans2 = await mysql.trans(conn,sql2);
			if(trans2===false){console.log('err');return false};
			return {trans1,trans2};//成功返回的结果
	})
	if(res === false){error..}
	//失败则回滚返回false，成功返回{trans1,trans2}
	...some code
```

## 基础插件
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
+ mysql
> https://github.com/mysqljs/mysql
+ commander
> https://github.com/tj/commander.js
+ ejs
> https://github.com/mde/ejs
+ koa2-cors
> https://www.npmjs.com/package/koa2-cors

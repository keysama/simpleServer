const koaStatic = require('koa-static');//静态资源中间件

const config = require('../config').staticPath;

module.exports = app => {
	config.forEach(item => {
		app.use(koaStatic(item));//设置静态资源文件夹
	})
}
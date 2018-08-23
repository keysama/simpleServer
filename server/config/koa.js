const Koa = require('koa');
const koaStatic = require('koa-static');//静态资源中间件
const bodyParser = require('koa-bodyparser')//解析请求,get数据放在ctx.request.query，post放在ctx.request.body
const path = require('path');//用来解析路径，自带的包
const config = require('./index');//根据运行环境返回相应配置文件
const router = require('../router');//路由

const error = require('../middlewares/error.js');//错务处理的中间件
const logger = require('../middlewares/logger.js');//配置好的日志中间件
const session = require('../middlewares/session.js');//配置好的session中间件

const port = config.port ? parseInt(config.port) : 8080;//监听端口

const app = new Koa();//没啥好说的=L=

module.exports = () => {

	app.use(logger());//日志的中间件

	app.use(bodyParser());//请求解析的中间件

	app.use(session(app));//session的中间件，通过ctx.session存取

	router(app);//路由

	app.use(koaStatic(path.resolve(__dirname,`../${config.staticPath}`)));//设置静态资源文件夹

	app.listen(port);

	app.use(error.handle)//错误处理

	console.log('监听端口：'+port)
}
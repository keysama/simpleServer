const Koa = require('koa');
const setStaticPath = require('../middlewares/static.js');//设置静态资源路径
const setAppCache = require('../middlewares/common.js');//设置缓存
const startServe = require('../middlewares/start.js');//开启服务
const setSPApath = require('../middlewares/setSPApath.js');//设置单页面的路径，把请求都给index，解决刷新问题
const bodyParser = require('koa-bodyparser')//解析请求,get数据放在ctx.request.query，post放在ctx.request.body
const router = require('../router');//路由
const error = require('../middlewares/error.js');//错务处理的中间件
const logger = require('../middlewares/logger.js');//配置好的日志中间件
const session = require('../middlewares/session.js');//配置好的session中间件
const cors = require('../middlewares/cors.js');//配置好的跨域中间件
const ejs = require('../middlewares/ejs.js');//配置好的ejs模板

const app = new Koa();//没啥好说的=L=

module.exports = () => {

	cors(app);//跨域

	setAppCache(app);//设置缓存

	logger(app);//日志的中间件

	app.use(bodyParser());//请求解析的中间件

	session(app);//session的中间件，通过ctx.session存取

	ejs(app)//ejs模板

	router(app);//路由

	setStaticPath(app);//设置静态资源文件夹

	setSPApath(app);//设置单页面的路径，把请求都给index，解决刷新问题

	startServe(app);//开启服务，http以及https

	app.use(error.handle)//错误处理
}
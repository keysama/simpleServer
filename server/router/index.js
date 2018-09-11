const Router = require('koa-router');

const api = require('./api');
const index = require('./index/');
const admin = require('./admin');
const test = require('./test');

router = new Router();

module.exports = (app) => {
router
	.use(api.routes(),api.allowedMethods())//api路由
	.use(index.routes(),index.allowedMethods())//index路由
	.use(admin.routes(),admin.allowedMethods())//admin路由
	.use(test.routes(),test.allowedMethods())//test路由

app.use(router.routes())
   .use(router.allowedMethods())
};
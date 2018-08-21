const Router = require('koa-router');

const api = require('./api');
const index = require('./index/');
const admin = require('./admin');

router = new Router();

module.exports = (app) => {

router
	.use(api.routes(),api.allowedMethods())//api路由
	.use(index.routes(),index.allowedMethods())//index路由
	.use(admin.routes(),admin.allowedMethods())//admin路由

app.use(router.routes())
   .use(router.allowedMethods())

};
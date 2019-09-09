const Router = require('koa-router');

const api = require('./api');

router = new Router();

module.exports = (app) => {
router
	.use(api.routes(),api.allowedMethods())//api路由

app.use(router.routes())
   .use(router.allowedMethods())
};
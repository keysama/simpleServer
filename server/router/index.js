const Router = require('koa-router');
router= new Router();

const api = require('./api');

router.use(api());

router.get('/', async (ctx, next) => {
	console.log('有get请求了')
	console.log(ctx.request.body)
	console.log(ctx.request.query)
	console.log('session:',ctx.session)
	ctx.session.num+=1;
	ctx.body='123';
	await next();
});

router.post('/', async (ctx, next) => {
	console.log('有post请求了')
	console.log(ctx.request.body)
	console.log(ctx.request.query)
	console.log('session:',ctx.session)
	ctx.session.num+=1;
	ctx.body='123';
	await next();
});

module.exports = () => {
	return router.routes();
}
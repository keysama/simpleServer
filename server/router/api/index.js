const Router = require('koa-router');
router= new Router();

router.get('/api', async (ctx, next) => {
	console.log('api有get请求了')
	console.log(ctx.request.body)
	console.log(ctx.request.query)
	console.log('session:',ctx.session)
	ctx.session.num+=1;
	ctx.body='123';
	await next();
});

router.post('/api', async (ctx, next) => {
	console.log('api有post请求了')
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
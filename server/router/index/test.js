const Router = require('koa-router');


router= new Router({
	prefix: '/test'
});

router
.get('/', async (ctx, next) => {
	console.log('/index/test有get0请求了')
	console.log(ctx.request.body)
	console.log(ctx.request.query)
	console.log('session:',ctx.session)
	ctx.session.num+=1;
	ctx.body='123';
	await next();
	console.log('end')
}).post('/', async (ctx, next) => {
	console.log('/index/test有post请求了')
	console.log(ctx.request.body)
	console.log(ctx.request.query)
	console.log('session:',ctx.session)
	ctx.session.num+=1;
	ctx.body='123';
	await next();
});
module.exports = router;
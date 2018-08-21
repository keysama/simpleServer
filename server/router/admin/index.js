const Router = require('koa-router');

const test = require('./test.js')

router= new Router({
	prefix: '/admin'
});

router
.use(test.routes())
.get('/', async (ctx, next) => {
	console.log('/admin:get')
	console.log(ctx.request.body)
	console.log(ctx.request.query)
	console.log('session:',ctx.session)
	ctx.session.num+=1;
	ctx.body='123';
	await next();
	console.log('end')
})
.post('/', async (ctx, next) => {
	console.log('/admin:post')
	console.log(ctx.request.body)
	console.log(ctx.request.query)
	console.log('session:',ctx.session)
	ctx.session.num+=1;
	ctx.body='123';
	await next();
});
module.exports = router;
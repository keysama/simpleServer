module.exports={
	testGet : async (ctx, next) => {
		ctx.logger.info('test：收到get请求')
		console.log('body:',ctx.request.body)
		console.log('query:',ctx.request.query)
		console.log('session:',ctx.session)
		ctx.body='测试get';
		await next();
	},
	testPost : async (ctx, next) => {
		ctx.logger.info('test：收到post请求')
		console.log(ctx.request.body)
		console.log(ctx.request.query)
		console.log('session:',ctx.session)
		ctx.body='测试post';
		await next();
	},
	testAll : async (ctx, next) => {
		ctx.logger.info('test：收到请求')
		console.log(ctx.request.body)
		console.log(ctx.request.query)
		console.log('session:',ctx.session)
		ctx.body='测试all';
		await next();
	}
}
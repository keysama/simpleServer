module.exports = {
	hello : async (ctx, next) => {
		console.log('HELLO ! Here is indexController !')
		console.log(ctx.request.body)
		console.log(ctx.request.query)
		console.log('session:',ctx.session)
		ctx.body='indexController';
		await next();
	}
}
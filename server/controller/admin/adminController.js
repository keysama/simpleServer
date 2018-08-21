module.exports = {
	hello : async (ctx, next) => {
		console.log('HELLO ! Here is adminController !')
		console.log(ctx.request.body)
		console.log(ctx.request.query)
		console.log('session:',ctx.session)
		ctx.body='adminController';
		await next();
	}
}
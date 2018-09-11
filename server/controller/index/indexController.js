module.exports = {
	index : async (ctx, next) => {

		console.log('HELLO ! Here is indexController !')
		console.log(ctx.request.body)
		console.log(ctx.request.query)
		console.log('session:',ctx.session)
		await ctx.render('index/index',{info:'hello ejs!'})
		await next();
		console.log('indexController结束')
	}
}
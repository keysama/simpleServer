module.exports={
	all : async (ctx, next) => {
		console.log('testController.all start')
		await next();
		console.log('testController.all end')
	}
} 
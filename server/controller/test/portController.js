const portTestModule = require('../../modules/test/portTestModule');
module.exports={
	all : async (ctx, next) => {
		console.log('portController.all start')
		await next();
		console.log('portController.all end')
	},
	get : async (ctx, next) => {
		console.log('portController.get  start url:'+ctx.url)
		console.log('portController.get , query:',ctx.request.query)
		console.log('portController.get , body:',ctx.request.body)
		console.log('portController.get , parmars:',ctx.parmars)
		ctx.body = ctx;
		await next();
		console.log('portController.get end')
	},
	post : async (ctx, next) => {
		console.log('portController.post  start url:'+ctx.url)
		console.log('portController.post , query:',ctx.request.query)
		console.log('portController.post , body:',ctx.request.body)
		console.log('portController.post , parmars:',ctx.parmars)
		ctx.body = ctx;
		await next();
		console.log('portController.post end')
	},
	put : async (ctx, next) => {
		console.log('portController.put  start url:'+ctx.url)
		console.log('portController.put , query:',ctx.request.query)
		console.log('portController.put , body:',ctx.request.body)
		console.log('portController.put , parmars:',ctx.parmars)
		ctx.body = ctx;
		await next();
		console.log('portController.put end')
	},
	delete : async (ctx, next) => {
		console.log('portController.delete  start url:'+ctx.url)
		console.log('portController.delete , query:',ctx.request.query)
		console.log('portController.delete , body:',ctx.request.body)
		console.log('portController.delete , parmars:',ctx.parmars)
		ctx.body = ctx;
		await next();
		console.log('portController.delete end')
	},
} 
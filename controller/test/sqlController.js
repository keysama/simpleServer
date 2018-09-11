const sqlTestModule = require('../../modules/test/sqlTestModule');

module.exports={
	all : async (ctx, next) => {
		console.log('testController.all start')
		await next();
		console.log('testController.all end')
	},
	sqlTest : async (ctx, next) => {
		console.log('testController.sqlTest  start url:'+ctx.url)
		console.log('testController.sqlTest , query:',ctx.request.query)
		console.log('testController.sqlTest , body:',ctx.request.body)
		console.log('testController.sqlTest , parmars:',ctx.parmars)
		let step1 = await sqlTestModule.sqlTest();
		console.log('testController.sqlTest ,res: ',step1);
		ctx.body = ctx;
		await next();
		console.log('testController.transTest end')
	},
	transTest : async (ctx, next) => {
		console.log('testController.transTest  start url:'+ctx.url)
		console.log('testController.transTest , query:',ctx.request.query)
		console.log('testController.transTest , body:',ctx.request.body)
		console.log('testController.transTest , parmars:',ctx.parmars)
		let step1 = await sqlTestModule.transTest();
		console.log('testController.sqlTest ,res: ',step1);
		ctx.body = ctx;
		await next();
		console.log('testController.transTest end')
	}
} 
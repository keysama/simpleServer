const testModule = require('../../modules/testModule.js');

module.exports = {
	hello : async (ctx, next) => {
		let res=await testModule.sqlTest();
		if(res===false){ctx.errorCode=0;next();return}
		ctx.body={data:res};
		console.log('HELLO ! Here is indexController !')
		console.log(ctx.request.body)
		console.log(ctx.request.query)
		console.log('session:',ctx.session)
		await next();
		console.log('indexController结束')
	}
}
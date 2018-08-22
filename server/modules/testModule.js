const db = require('../tools/promise.js').db;

module.exports = {
	hello : () => {
		console.log('hello啊')
	},
	sqlTest : async (ctx,next) => {
		let res = await db('SELECT * FROM user2 limit 0,1');
		if(res==='error'){
			console.log('哦')
			ctx.throw(123)
		}


		console.log('sql测试')
		console.log(res)
	}
}

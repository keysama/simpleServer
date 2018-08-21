const db = require('../tools/promise.js').db;

module.exports = {
	hello : () => {
		console.log('hello啊')
	},
	sqlTest : async () => {
		let res = await db('SELECT * FROM user2').catch(err=>{
			console.log(err);
			return 123;
		});
		console.log('sql测试')
		console.log(res)
	}
}

const db = require('../tools/promise.js').db;

module.exports = {
	hello : () => {
		console.log('hello啊')
	},
	sqlTest : async () => {
		let res = await db('SELECT * FROM user limit 0,1');
		if(res===false){return res};
		return res;
		console.log('sql测试')
		console.log(res)
	}
}

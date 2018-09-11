const mysql = require('../../config/mysql');

module.exports = {
	sqlTest : async () => {
		let sql = `INSERT INTO kv (k,v) VALUES ('${'eee'}',${333})`;
		let step1 = await mysql.db(sql);
		console.log('sqlTestModule.sqlTest res',step1)
		console.log('sqlTestModule.sqlTest ')
		return true;

	},
	transTest : async () => {
		let step1 = await mysql.startTrans(async (conn)=>{//参数是mysql链接对象，注意async
			let sql1 = `INSERT INTO kv (k,v) VALUES ('${'eee'}',${444})`;//right
			let trans1 = await mysql.trans(conn,sql1);//使用已有的链接查询
			if(trans1===false){console.log('err');return false};//return false将导致回滚
			let sql2 = `INSERT INTO kv (k,v) VALUES (${'eee'},'${555}')`;//wrong
			let trans2 = await mysql.trans(conn,sql2);//使用已有的链接查询
			if(trans2===false){console.log('err');return false};//return false将导致回滚
			
			return {trans1,trans2};//返回的结果会赋给step1
		})
		console.log('sqlTestModule.transTest ')
		return step1;
	}
}
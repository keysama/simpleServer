const mysql = require('../config/database/mysql');

module.exports = {
	login : async (username,password) => {
		let sql = `SELECT * FROM user WHERE username='${username}' AND password='${password}'`;

		let result = await mysql.db(sql);

		if(result === false || result.length <= 0){
			return false
		}

		delete result[0].password;

		return result[0];
	}
}
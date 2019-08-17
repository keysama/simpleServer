const mysql = require('../config/mysql');

module.exports = {
	login : async (username,password) => {
		let sql = `SELECT * FROM user WHERE username='${username}' AND password='${password}'`;

		let result = await mysql.db(sql);

		if(result === false || result.length <= 0){
			return false
		}

		delete result[0].password;

		return result[0];
	},
	registe : async (username,password,nickname,type) => {
		let date = Date.now();
		let sql = `INSERT INTO user (username,password,nickname,createTime,type) VALUES ('${username}','${password}','${nickname}','${date}',${type})`;
		let result = await mysql.db(sql);

		if(result === false || result.length <= 0){
			return false
		}
		return true;
	},
	getUserInfoByGFId : async (id,type) => {
		let sql = `SELECT * FROM user WHERE ${type}='${id}'`;

		let result = await mysql.db(sql);

		if(result === false){
			return false
		}

		if(result.length <= 0){
			return 0;
		}

		delete result[0].password;

		return result[0];
	},
	addUserInfoByGFId : async (id,email,head,name,type,phone,phoneType) => {
		let date = Date.now();
		let sql = `INSERT INTO user (head,nickname,username,password,type,createTime,state,${type},phone,phoneType) VALUES('${head}','${name}','${email}','${date+'_pang'}',${0},'${date}',${0},'${id}','${phone || ''}','${phoneType || ''}')`;
		let result = await mysql.db(sql);

		if(result === false || result.length <= 0){
			return false
		}
		return true;

	},
	getUserState : async (type,data) => {
		let sql = `SELECT * FROM user WHERE ${type}='${data}'`;
		let result = await mysql.db(sql);

		if(result === false || result.length <= 0){
			return false
		}
		return result;
	},
	updateUserInfo : async (id,data) => {
		let str = Object.keys(data).map(item=>`${item}='${data[item]}'`).join(',');
		let sql = `UPDATE user SET ${str} WHERE id=${id}`;
		let result = await mysql.db(sql);

		if(result === false || result.length <= 0){
			return false
		}
		return result;
	}
}
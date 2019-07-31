const mysql = require('../config/mysql');

module.exports = {
	create : async (data) => {
		const {originId,targetId,content,date} = data;
		let sql = `INSERT INTO message (originId,targetId,content,createTime) VALUES (${originId},${targetId},'${content}','${date}')`;

		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return true;
	},
	getMessageList : async (userId,type) => {
		let sql ;
		if(type == 0) {
			sql = `SELECT * FROM message WHERE targetId=${userId}`;
		}else{
			sql = `SELECT * FROM message WHERE targetId=${userId} AND state=${type}`;
		}
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return result;

	},
	deleteMessage : async (messageId) => {
		let sql = `DELETE from message WHERE id=${messageId}`;
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return true;
	},
	editMessageState : async (messageId,state) => {
		let sql = `UPDATE message SET state=${state} WHERE id=${messageId}`;
		
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return true;
	},
}
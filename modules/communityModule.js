const mysql = require('../config/mysql');

module.exports = {
	create : async (name,userId,date) => {
		let sql = `INSERT INTO community (name,createTime,creator) VALUES ('${name}','${date}',${userId})`
		let result = await mysql.db(sql);

		if(result === false ){
			return false
		}

		return true;
	},
	getListByCreator : async (creatorId) => {
		let sql = `SELECT * FROM community WHERE creator=${creatorId}`;

		let result = await mysql.db(sql);

		if(result === false ){
			return false
		}

		return result;
	},
	getInfo : async (communityId) => {
		let sql = `SELECT * FROM community WHERE id=${communityId}`;

		let result = await mysql.db(sql);

		if(result === false){
			return false
		}

		return result;
	},
	getConfig : async (communityId) => {
		let sql = `SELECT * FROM community_config WHERE communityId=${communityId}`;

		let result = await mysql.db(sql);

		if(result === false ){
			return false
		}

		return result;
	},
	getCustomerList: async (communityId) => {
		let sql = `
		SELECT 
		community_customer.createTime as joinTime,
		user.id,
		user.head,
		user.nickname 
		FROM community_customer left join user on user.id = community_customer.userId 
		WHERE community_customer.communityId=${communityId}`;

		let result = await mysql.db(sql);

		if(result === false ){
			return false
		}

		return result;

	},
	editCommunity: async (communityId,data) => {
		let str = Object.keys(data).map(item=>`${item}=${data[item]}`).join(',')

		let sql = `UPDATE community SET ${str} WHERE id=${communityId}`;

		let result = await mysql.db(sql);

		if(result === false ){
			return false
		}

		return true;
	},
	editCommunityConfig: async (communityId,data) => {
		let keys = Object.keys(data);
		let num = keys.length;

		for (let i = 0;i < num;i ++){
			let sql = `UPDATE community_config SET `+'`value`'+`='${data[keys[i]]}' WHERE communityId=${communityId} AND `+'`key`'+`='${keys[i]}'`;
			let result = await mysql.db(sql);

			if(result === false){
				return false
			}
		}
		return true;
	},
	addCommunityConfig : async (communityId,data) => {
		let keys = Object.keys(data);
		let num = keys.length;

		for (let i = 0;i < num;i ++){
			let sql = 'INSERT INTO community_config(communityId,'+'`key`'+`,value) VALUES (${communityId},'${keys[i]}','${data[keys[i]]}')`;
			let result = await mysql.db(sql);

			if(result === false){
				return false
			}
		}
		return true;
	},
	checkNameRepeat : async (name) => {
		let sql = `SELECT * FROM community WHERE name='${name}'`;
		let result = await mysql.db(sql);

		if(result === false ){
			return false
		}

		return result;
	}
}
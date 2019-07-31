const mysql = require('../config/mysql');

module.exports = {
	create : async (data) => {
		const {name,zindex,sectionId,creator,date} = data;

		let sql = `INSERT INTO channel (name,zindex,sectionId,creator,createTime) VALUES ('${name}',${zindex},${sectionId},${creator},'${date}')`;

		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return true;
	},
	getList : async (sectionId) => {
		let sql = `SELECT channel.*,(SELECT count(1) FROM article WHERE article.channelId=channel.id)articleNum FROM channel WHERE sectionId=${sectionId}`;
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return result;

	},
	delete : async (channelId) => {
		let sql = `DELETE from channel WHERE id=${channelId}`;
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return true;
	},
	edit : async (data) => {
		const {channelId,...others} = data;

		let str = Object.keys(others).map(item=>`${item}='${others[item]}'`).join(',')

		let sql = `UPDATE channel SET ${str} WHERE id=${channelId}`;
		
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return true;
	},
	getCommunityCreator : async (channelId) => {
		let sql = `SELECT community.creator from channel LEFT JOIN section on channel.sectionId = section.sectionId LEFT JOIN community on community.id = section.communityId WHERE channel.id=${channelId}`;
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return result;
	},
	getInfo : async (channelId) => {
		let sql = `SELECT * FROM channel WHERE id=${channelId}`;

		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return result;
	}
}
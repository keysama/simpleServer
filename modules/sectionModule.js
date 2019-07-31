const mysql = require('../config/mysql');

module.exports = {
	create : async (data) => {
		const {name,communityId,zindex} = data;

		let sql = `INSERT INTO section (name,zindex,communityId) VALUES ('${name}',${zindex},${communityId})`;

		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return true;
	},
	getList : async (communityId) => {
		let sql = `SELECT * FROM section WHERE communityId=${communityId}`;
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return result;

	},
	delete : async (sectionId) => {
		let sql = `DELETE from section WHERE sectionId=${sectionId}`;
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return true;
	},
	edit : async (data) => {
		const {sectionId,...others} = data;

		let str = Object.keys(others).map(item=>`${item}='${others[item]}'`).join(',')

		let sql = `UPDATE section SET ${str} WHERE sectionId=${sectionId}`;
		
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return true;
	},
	getCommunityCreator : async (sectionId) => {
		let sql = `SELECT community.creator from section LEFT JOIN community on community.id = section.communityId WHERE section.sectionId=${sectionId}`;
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return result;
	}
}
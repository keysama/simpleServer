const mysql = require('../config/mysql');

module.exports = {
	create : async (data) => {
		const {channelId,title,type,zindex,content,creator,date} = data;

		let sql = `INSERT INTO article (channelId,title,type,zindex,content,creator,createTime) VALUES (${channelId},'${title}',${type},${zindex},'${content}',${creator},'${date}')`;

		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return true;
	},
	getList : async (channelId,start,num) => {
		let sql = `SELECT article.*,user.nickname as creator_nickname,user.head as creator_head,(SELECT count(1) FROM comment WHERE comment.articleId=article.id)commnetNum FROM article LEFT JOIN user on user.id=article.creator WHERE channelId=${channelId} ORDER BY article.zindex DESC,article.createTime DESC LIMIT ${start},${num}`;
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return result;

	},
	delete : async (articleId) => {
		let sql = `DELETE from article WHERE id=${articleId}`;
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return true;
	},
	edit : async (data) => {
		const {articleId,...others} = data;

		let str = Object.keys(others).map(item=>`${item}=${others[item]}`).join(',')

		let sql = `UPDATE article SET ${str} WHERE id=${articleId}`;
		
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return true;
	},
	getInfo : async (articleId) => {
		let sql = `SELECT article.*,user.nickname as creator_nickname,user.head as creator_head,(SELECT count(1) FROM comment WHERE comment.articleId=article.id)commentNum FROM article LEFT JOIN user on user.id=article.creator WHERE article.id=${articleId}`;
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return result;
	}
}
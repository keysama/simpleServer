const mysql = require('../config/mysql');

module.exports = {
	createComment : async (data) => {
		const {articleId,content,creator,date} = data;

		let sql = `INSERT INTO comment (articleId,creator,content,createTime) VALUES (${articleId},${creator},'${content}','${date}')`;

		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return true;
	},
	createReply : async (data) => {
		const {commentId,content,creator,date} = data;

		let sql = `INSERT INTO reply (commentId,content,creator,createTime) VALUES (${commentId},'${content}',${creator},'${date}')`;

		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return true;
	},
	getCommentList : async (articleId,start,num) => {
		let sql = `SELECT comment.*,user.nickname as creator_niackname,user.head as creator_head,(SELECT count(1) from reply WHERE reply.commentId = comment.id)reply_num from comment left join user on user.id = comment.creator WHERE comment.articleId=${articleId} ORDER BY comment.createTime DESC LIMIT ${start},${num}`;

		let result = await mysql.db(sql);

		console.log('getCommentList,result',result)

		if(result === false){
			return false
		}
		return result;

	},
	getReplyList : async (commentId,start,num) => {
		let sql = `SELECT reply.*,user.nickname as creator_niackname,user.head as creator_head FROM reply left join user on user.id = reply.creator WHERE commentId=${commentId} ORDER BY reply.createTime DESC LIMIT ${start},${num}`;
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return result;

	},
	deleteComment : async (commentId) => {
		let sql = `DELETE from comment WHERE id=${commentId}`;
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return true;
	},
	deleteReplay : async (replyId) => {
		let sql = `DELETE from reply WHERE id=${replyId}`;
		let result = await mysql.db(sql);

		if(result === false){
			return false
		}
		return true;
	}
}
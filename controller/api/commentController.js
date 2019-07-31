const commentModule = require('../../modules/commentModule');

module.exports = {
	createComment : async (ctx,next) => {
		const userInfo = ctx.userInfo;
		const {articleId,content} = ctx.request.body;
		const creator = userInfo.id;
		const date = Date.now();

		let res = await commentModule.createComment({articleId,content,creator,date});

		if(res === false){
			return ctx.body = {
				state : 0,
				body: 'err'
			}
		}

		return ctx.body = {
			state : 1,
			body : 'success'
		}
	},
	createReply : async (ctx,next) => {
		const userInfo = ctx.userInfo;
		const {commentId,content} = ctx.request.body;
		const creator = userInfo.id;
		const date = Date.now();

		let res = await commentModule.createReply({commentId,content,creator,date});

		if(res === false){
			return ctx.body = {
				state : 0,
				body: 'err'
			}
		}

		return ctx.body = {
			state : 1,
			body : 'success'
		}
	},
	getCommentList : async (ctx,next) => {
		const { articleId,start,num } = ctx.params;

		let res = await commentModule.getCommentList(articleId,start,num);

		if(res === false){
			return ctx.body = {
				state : 0,
				body: 'err'
			}
		}

		return ctx.body = {
			state : 1,
			body : res
		}

	},
	getReplyList : async (ctx,next) => {
		const { commentId,start,num } = ctx.params;
		
		let res = await commentModule.getReplyList(commentId,start,num);

		if(res === false){
			return ctx.body = {
				state : 0,
				body: 'err'
			}
		}

		return ctx.body = {
			state : 1,
			body : res
		}
	},
	deleteComment : async (ctx,next) => {
		const { commentId } =ctx.params;
		const userInfo = ctx.userInfo;

		let res = await commentModule.deleteComment(commentId);

		if(res === false){
			return ctx.body = {
				state : 0,
				body: 'err'
			}
		}

		return ctx.body = {
			state : 1,
			body : 'success'
		}
	},
	deleteReplay : async (ctx,next) => {
		const { replyId } =ctx.params;
		const userInfo = ctx.userInfo;

		let res = await commentModule.deleteReplay(replyId);

		if(res === false){
			return ctx.body = {
				state : 0,
				body: 'err'
			}
		}

		return ctx.body = {
			state : 1,
			body : 'success'
		}
	},

}
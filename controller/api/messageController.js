const messageModule = require('../../modules/messageModule');

module.exports = {
	create : async (ctx,next) => {
		const userInfo = ctx.userInfo;
		const {targetId,content} = ctx.request.body;
		const originId = userInfo.type == 1 ? -1 : userInfo.id;
		const date = Date.now();

		let res = await messageModule.create({originId,targetId,content,date})

		if(res === false){
			return ctx.body = {
				state : 0,
				body: 'err'
			}
		}

		return ctx.body = {
			state : 1,
			body : true
		}
	},
	getMessageList : async (ctx,next) => {
		const userInfo = ctx.userInfo;
		const { type } = ctx.params;
		const userId = userInfo.id;

		if(type != 0 && type !=1){
			type = 0
		}

		let res = await messageModule.getMessageList(userId,type)

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
	editMessageState : async (ctx,next) => {
		const userInfo = ctx.userInfo;
		const {messageId,state} = ctx.request.body;

		if(state != 0 && state != 1){
			state = 0;
		}

		let res = await messageModule.editMessageState(messageId,state)

		if(res === false){
			return ctx.body = {
				state : 0,
				body: 'err'
			}
		}

		return ctx.body = {
			state : 1,
			body : true
		}
	},
	deleteMessage : async (ctx,next) => {
		const userInfo = ctx.userInfo;
		const { messageId } = ctx.params;

		let res = await messageModule.deleteMessage(messageId)

		if(res === false){
			return ctx.body = {
				state : 0,
				body: 'err'
			}
		}

		return ctx.body = {
			state : 1,
			body : true
		}
	}
}
const articleModule = require('../../modules/articleModule');

module.exports = {
	create : async (ctx,next) => {
		const userInfo = ctx.userInfo;
		const {channelId,title,type = 0,author = 0,zindex = 0,content} = ctx.request.body;
		const creator = userInfo.id;
		const date = Date.now();

		const pass = false;


		let res = await articleModule.create({channelId,title,type,zindex,content,creator,date,author});

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
	getList : async (ctx,next) => {
		const { channelId,start,num } = ctx.params;
		
		let res = await articleModule.getList(channelId,start,num);

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
	delete : async (ctx,next) => {
		const { articleId } =ctx.params;
		const userInfo = ctx.userInfo;

		let res0 = await articleModule.getInfo(articleId);
		if(res0 === false){
			return ctx.body = {
				state : 0,
				body: 'err'
			}
		}
		if(userInfo.type <= 0 && res0[0].creator != userInfo.id){
			return ctx.body = {
				state : 0,
				body: 'Incorrect permissions'
			}
		}

		let res = await articleModule.delete(articleId);

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
	edit : async (ctx,next) => {
		const { articleId } =ctx.params;
		const userInfo = ctx.userInfo;
		const {title,type,zindex,content} = ctx.request.body;

		let res0 = await articleModule.getInfo(articleId);
		if(res0 === false){
			return ctx.body = {
				state : 0,
				body: 'err'
			}
		}
		if(userInfo.type <= 0 && res0[0].creator != userInfo.id){
			return ctx.body = {
				state : 0,
				body: 'Incorrect permissions'
			}
		}


		let res = await articleModule.edit({title,type,zindex,content,articleId});

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
	getInfo : async (ctx,next) => {
		const { articleId } =ctx.params;

		let res = await articleModule.getInfo(articleId);

		if(res === false){
			return ctx.body = {
				state : 0,
				body: 'err'
			}
		}

		if(res.length <= 0){
			return ctx.body = {
				state : 0,
				body: 'can not find article'
			}
		}

		return ctx.body = {
			state : 1,
			body : res[0]
		}		

	}
}

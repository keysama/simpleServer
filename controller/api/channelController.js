const channelModule = require('../../modules/channelModule');
 const sectionModule = require('../../modules/sectionModule');

module.exports = {
	create : async (ctx,next) => {
		const userInfo = ctx.userInfo;
		const {name,zindex,sectionId} = ctx.request.body;
		const creator = userInfo.id;
		const date = Date.now();

		let checkRes = await checkSectionRoles(sectionId,creator);

		if(!checkRes){
			return {
				state : 0,
				body : checkRes === 0 ? 'err' : 'Incorrect permissions'
			}
		}

		let res = await channelModule.create({name,zindex,sectionId,creator,date});

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
		const { sectionId } = ctx.params;

		let res = await channelModule.getList(sectionId);

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
		const { channelId } =ctx.params;
		const userId = ctx.userInfo.id;

		let checkRes = await checkChannelRoles(channelId,userId);

		if(!checkRes){
			return {
				state : 0,
				body : checkRes === 0 ? 'err' : 'Incorrect permissions'
			}
		}



		let res = await channelModule.delete(channelId);

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
		const { channelId } =ctx.params;
		const userId = ctx.userInfo.id;
		const {name,zindex,type} = ctx.request.body;

		let checkRes = await checkChannelRoles(channelId,userId);

		if(!checkRes){
			return {
				state : 0,
				body : checkRes === 0 ? 'err' : 'Incorrect permissions'
			}
		}

		if(!type && type != 0){
			type = 0
		}

		let res = await channelModule.edit({name,zindex,channelId,type});

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
	getInfo: async (ctx,next) => {
		const { channelId } =ctx.params;

		let res = await channelModule.getInfo(channelId);

		if(res === false){
			return ctx.body = {
				state : 0,
				body: 'err'
			}
		}

		return ctx.body = {
			state : 1,
			body : res[0]
		}

	},
}

function checkSectionRoles(sectionId,userId){
	return new Promise(async (resolve,reject)=>{
		let communityCreator = await sectionModule.getCommunityCreator(sectionId);
		if(communityCreator === false){
			resolve(0)
		}

		if(communityCreator[0].creator != userId){
			resolve(false)
		}

		resolve(true);
	})
}

function checkChannelRoles(channelId,userId){
	return new Promise(async (resolve,reject)=>{
		let communityCreator = await channelModule.getCommunityCreator(channelId);
		if(communityCreator === false){
			resolve(0)
		}

		if(communityCreator[0].creator != userId){
			resolve(false)
		}

		resolve(true);
	})
}
const communityModule = require('../../modules/communityModule');

module.exports = {
	create : async (ctx,next) => {
		const userInfo = ctx.userInfo;
		const {name} = ctx.request.body;
		const date = Date.now();

		if(userInfo.type <= 0){
			return ctx.body = {
				state : 0,
				body : 'Incorrect permissions'
			}
		}

		let res = await communityModule.create(name,userInfo.id,date);

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
	checkNameRepeat : async (ctx,next) => {
		const { name } = ctx.params;
		let res = await communityModule.checkNameRepeat(name);

		if(res === false){
			return ctx.body = {
				state : 0,
				body: 'err'
			}
		}

		return ctx.body = {
			state : 1,
			body : res.length > 0 ? res[0].id : null
		}
	},
	getListByCreator : async (ctx,next) => {
		const { creatorId } = ctx.params;

		let res = await communityModule.getListByCreator(creatorId);

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
	getInfo : async (ctx,next) => {
		const { communityId } = ctx.params;

		let res = await communityModule.getInfo(communityId);

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
	getConfig : async (ctx,next) => {
		const { communityId } = ctx.params;

		let res = await communityModule.getConfig(communityId);

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
	getCustomerList : async (ctx,next) => {
		const { communityId } = ctx.params;
		let res = await communityModule.getCustomerList(communityId);

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
	editCommunity : async (ctx,next) => {
		const { communityId } = ctx.params;
		const userId = ctx.userInfo.id;
		const {name} = ctx.request.body;


		let checkRes = await checkCommunityRoles(communityId,userId);

		if(!checkRes){
			return {
				state : 0,
				body : checkRes === 0 ? 'err' : 'Incorrect permissions'
			}
		}


		let res = await communityModule.editCommunity(communityId,{name});

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
	editCommunityConfig : async (ctx,next) => {
		const { communityId } = ctx.params;
		const userId = ctx.userInfo.id;
		const data = ctx.request.body;
		
		let checkRes = await checkCommunityRoles(communityId,userId);

		if(!checkRes){
			return {
				state : 0,
				body : checkRes === 0 ? 'err' : 'Incorrect permissions'
			}
		}

		let res = await communityModule.editCommunityConfig(communityId,data);

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
	addCommunityConfig : async (ctx,next) => {
		const { communityId } = ctx.params;
		const userId= ctx.userInfo.id;
		const data = ctx.request.body;

		let checkRes = await checkCommunityRoles(communityId,userId);

		if(!checkRes){
			return {
				state : 0,
				body : checkRes === 0 ? 'err' : 'Incorrect permissions'
			}
		}

		let res = await communityModule.addCommunityConfig(communityId,data);

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
	}
}

function checkCommunityRoles(communityId,userId){
	return new Promise(async (resolve,reject)=>{
		let communityInfo = await communityModule.getInfo(communityId);
		if(communityInfo === false){
			resolve(0)
		}

		if(communityInfo[0].creator != userId){
			resolve(false)
		}

		resolve(true);
	})
}
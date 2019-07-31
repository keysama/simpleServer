const sectionModule = require('../../modules/sectionModule');
 const communityModule = require('../../modules/communityModule');

module.exports = {
	create : async (ctx,next) => {
		const userId = ctx.userInfo.id;
		const {name,zindex,communityId} = ctx.request.body;

		let checkRes = await checkCommunityRoles(communityId,userId);

		if(!checkRes){
			return ctx.body ={
				state : 0,
				body : checkRes === 0 ? 'err' : 'Incorrect permissions'
			}
		}


		let res = await sectionModule.create({name,zindex,communityId});

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
		const { communityId } = ctx.params;

		let res = await sectionModule.getList(communityId);

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
		const { sectionId } = ctx.params;
		const userId = ctx.userInfo.id;

		let checkRes = await checkSectionRoles(sectionId,userId);

		if(!checkRes){
			return {
				state : 0,
				body : checkRes === 0 ? 'err' : 'Incorrect permissions'
			}
		}

		let res = await sectionModule.delete(sectionId);

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
		const { sectionId } =ctx.params;
		const userId = ctx.userInfo.id;
		const {name,zindex,type} = ctx.request.body;

		let checkRes = await checkSectionRoles(sectionId,userId);

		if(!checkRes){
			return {
				state : 0,
				body : checkRes === 0 ? 'err' : 'Incorrect permissions'
			}
		}
		
		if(!type && type != 0){
			type = 0
		}

		let res = await sectionModule.edit({name,zindex,type,sectionId});

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

function checkCommunityRoles(communityId,userId){
	return new Promise(async (resolve,reject)=>{
		let communityInfo = await communityModule.getInfo(communityId);
		if(communityInfo === false){
			resolve(0)
		}

		console.log('communityInfo',communityId)

		if(communityInfo[0].creator != userId){
			resolve(false)
		}

		resolve(true);
	})
}
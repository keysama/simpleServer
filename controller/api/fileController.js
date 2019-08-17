const communityModule = require('../../modules/communityModule');

module.exports = {
	asyncUpload : async (ctx,next) => {
		const { communityId,filePath } = ctx.params;
		const files = ctx.request.files;

		const res = Object.keys(files).map(item=>({
					name : item,
					url : `/community_${communityId}/${filePath}/${item}.${files[item]['name'].split('.')[files[item]['name'].split('.').length-1]}`
				}))
		console.log('asdsd',res)

		return ctx.body = {
			state : 1,
			body : res
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
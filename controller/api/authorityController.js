const authorityModule = require('../../modules/authorityModule');
const jwt = require('jsonwebtoken');
const config = require('../../config/index.js').token;

module.exports = {
	login : async (ctx,next) => {

		const {username,password} = ctx.request.body;

		let userInfo = await authorityModule.login(username,password);

		if(userInfo === false){
			return ctx.body = {
				state : 0,
				body : '用户名或密码错误'
			};
		}

		const token = jwt.sign({...userInfo},config.key,config.options);

		return ctx.body = {
			state : 1,
			body : token
		}
	},
	getUserInfo : async (ctx,next) => {

		const {type} = ctx.params;

		if(type > ctx.userInfo.type){
			return  ctx.body = {
				state : 0,
				body : 'Incorrect permissions'
			}
		} 

		return ctx.body = {
			state : 1,
			body : ctx.userInfo
		}
	},
	getUserState : async (ctx,next) => {

		const { type,data } = ctx.request.body;

		let userState = await authorityModule.getUserState(type,data);

		if(userState[0]){
			delete userState[0].password;
		}

		return ctx.body = {
			state : 1,
			body : userState[0]
		}
	},
	registe : async (ctx,next) => {
		let {username,password,nickname,type} = ctx.request.body;

		if(!type && type != 0){
			type = 0;
		}

		let result = await authorityModule.registe(username,password,nickname,type);

		if(result === false){
			return ctx.body = {
				state : 0,
				body : '注册失败'
			};
		}

		return ctx.body = {
			state : 1,
			body : 'success'
		};
	},
	loginWIthId : async (ctx,next) => {
		let {id,email,head,name,type,phone,phoneType} = ctx.request.body;

		let result = await authorityModule.getUserInfoByGFId(id,type);

		if(result === false){
			return ctx.body = {
				state : 0,
				body : 'err'
			};
		}
		console.log('res',result)

		if(phone != null && phoneType != null && result.id && !result.phone && !result.phoneType){
			await authorityModule.updateUserInfo(result.id,{phone:phone,phoneType:phoneType});
		}


		if(result.id){
			const token = jwt.sign({...result},config.key,config.options);

			return ctx.body = {
				state : 1,
				body : token
			}
		}

		let result2 = await authorityModule.addUserInfoByGFId(id,email,head,name,type,phone,phoneType);
		if(result2 === false){
			return ctx.body = {
				state : 0,
				body : 'err'
			};
		}

		console.log('res2',result2)

		let result3 = await authorityModule.getUserInfoByGFId(id,type);
		if(result3.id){
			const token = jwt.sign({...result3},config.key,config.options);

			return ctx.body = {
				state : 1,
				body : token
			}
		}
		console.log('res3',result3)

		return ctx.body = {
			state : 0,
			body : 'err'
		}

	}
}
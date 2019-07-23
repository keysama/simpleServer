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
	logout : async (ctx,next) => {



	}
}
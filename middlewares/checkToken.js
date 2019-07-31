const jwt = require('jsonwebtoken');
const koajwt = require('koa-jwt');
const config = require('../config/index.js').token;



module.exports = async (ctx,next) => {
	await koajwt({
	    secret: config.key
	})(ctx,async () => {
		const token = ctx.header.authorization;
		let payload = jwt.decode(token.split(' ')[1], config.key);
		ctx.userInfo = payload;
		await next()
	})
}
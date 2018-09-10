const cors = require('koa2-cors');
const config = require('../config').cors;

if(config.switch){
	console.log('开启跨域')
}else{
	console.log('关闭跨域')
}

module.exports=()=>{
	if(!config.switch){return async (ctx,next) => {await next()}}
	return cors({
	    exposeHeaders: config.exposeHeaders,
	    maxAge: config.maxAge,
	    credentials: config.credentials,
	    allowMethods: config.allowMethods,
	    allowHeaders: config.allowHeaders,
	})
}
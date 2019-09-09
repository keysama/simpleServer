const cors = require('koa2-cors');
const config = require('../config').cors;

module.exports= app => {
	if(!config.switch){
		console.log('关闭跨域');
		return 0;
	};

	console.log('开启跨域');

	app.use(cors({
	    exposeHeaders: config.exposeHeaders,
	    maxAge: config.maxAge,
	    credentials: config.credentials,
	    allowMethods: config.allowMethods,
	    allowHeaders: config.allowHeaders,
	}))
}
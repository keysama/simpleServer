const Router = require('koa-router');
const fs = require('fs');
const config = require('../config/index.js').spaPath;//根据运行环境返回相应配置文件
router = new Router();

module.exports = app => {
	if(!config.switch){
		console.log('关闭单页面配置')
	}else{
		console.log('开启单页面配置')
		
		config.path.forEach(item=>{
			router.get(item.url+'/*', async (ctx,next) => {
				ctx.type = 'html';
  				ctx.body = fs.createReadStream(item.indexFile);
				await next();
			})
			app.use(router.routes())
		})
	}
}
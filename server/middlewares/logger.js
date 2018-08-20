const log4js = require('log4js');
const config = require('../config').logger;

log4js.configure({
  appenders: { 
  	cheese: { type: config.type, filename:config.filename }
  },
  //appenders:cheese是别名，输出模板的名字
  //file:输出到文件，dateFile：日期文件，console：控制台
  categories: { 
  	default: { appenders: ['cheese'], level: config.level } 
  }
  //appenders:类别，对应appenders
  //level：级别，保存error以上的错误信息
});

module.exports=()=>{
 	return async (ctx,next)=>{
 		let start=config.respondTime && Date.now();//记录相应开始时间
 		ctx.logger=log4js.getLogger('cheese')
 		await next();
 		if (config.respondTime){
 			let end=config.respondTime && Date.now();//记录相应结束时间
 			ctx.logger.info(`响应时间：${(end-start)/1000}秒`)
 		}
 	};
}

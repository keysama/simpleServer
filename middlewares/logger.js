const log4js = require('log4js');
const config = require('../config').logger;

log4js.configure({
  appenders: { 
  	cheeswwe: { type: config.type, filename:config.filename }
  },
  //appenders:cheese是别名，输出模板的名字
  //file:输出到文件，dateFile：日期文件，console：控制台
  categories: { 
  	default: { appenders: ['cheeswwe'], level: config.level } 
  }
  //appenders:类别，对应appenders
  //level：级别，保存error以上的错误信息
});

const logger = log4js.getLogger('请求信息');

module.exports=()=>{
 	return async (ctx,next)=>{
 		let start=config.respondTime && Date.now();//记录相应开始时间
    if(config.requestUrl){
      logger.info(`地址：${ctx.request.url}`)
    }
 		await next();
    if(config.requestBody){
      logger.debug(`请求body：${JSON.stringify(ctx.request.body)}`)
    }
    if(config.requestParams){
      logger.debug(`url参数：${(ctx.params && JSON.stringify(ctx.params)) || '无'}`)
    }
    if (config.respondTime){
      let end=config.respondTime && Date.now();//记录相应结束时间
      logger.trace(`响应时间：${(end-start)/1000}秒`)
    }
 	};
}

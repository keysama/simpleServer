module.exports = {
	handle :  async (ctx,next) => {//错误处理
		if(!ctx.errorCode){await next();return;}

		switch(ctx.errorCode){
			case 0:ctx.body={state:0,text:'数据库错误'};break;
			default:ctx.body={state:0,text:'未知错误'};break;
		}
		
	},
}

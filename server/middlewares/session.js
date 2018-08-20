const session = require('koa-session');//保存session,ctx.sessoion

const CONFIG = {
   key: 'koa:sess',   //cookie key (default is koa:sess)
   maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
   overwrite: true,  //是否可以overwrite    (默认default true)
   httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
   signed: true,   //签名默认true
   rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
   renew: false,  //(boolean) renew session when session is nearly expired,
};

module.exports = (app) => {
	app.keys = [];//生成随机密钥
    for(var i=0;i<100000;i++){
        app.keys[i]='a_'+Math.random();
    }
	return session(CONFIG,app)
}
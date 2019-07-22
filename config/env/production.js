const path = require('path')

const timeStemp = new Date();//获取当前日期时间戳
const time = timeStemp.getFullYear() + '_' + timeStemp.getMonth() + '_' + timeStemp.getDate();//保证每天日志放在不同文件夹

module.exports = {

	port : 80,//监听端口号

	https : {
		httpsPort : 443,
		switch : false,
		privateKey : {
			path : path.resolve(__dirname,'../https/2524472_www.gamenanum.com.key'),
			encoded : 'utf8'
		},
		certificate : {
			path : path.resolve(__dirname,'../https/2524472_www.gamenanum.com.pem'),
			encoded : 'utf8'
		}
	},
	
	mysql : {
        host: '127.0.0.1',
        user: 'root',
        password: 'pangSky12#$',
        database: 'pangsky_community',
        port:'3306',
        dateStrings: true
	},

	logger : {//配置日志
		respondTime : false,//是否开启记录响应时间
		type : 'file',//类型，file：保存到文件，dateFile：保存到日期文件，console：控制台
		filename:  path.resolve(__dirname,`../../logs/daily_${time}.log`),//输出的文件路径和文件名
		level : 'debug',//级别，保存以上的错误信息trace<debug<info<warn<error<fatal
	},

	staticPath : [//静态资源目录,可以是多个
		path.resolve(__dirname,'../../static')
	],

	cors : {
		switch:false,
 		exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
	    maxAge: 100,
	    credentials: true,
	    allowMethods: ['GET', 'POST', 'OPTIONS'],
	    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous']
	},

	ejs : {
		path : path.resolve(__dirname,'../../views'),
		options : {
			map : {
				html : 'ejs'
			}
		}
	},
	
	commonConfig : {//通用设置
		compress : {//请求缓存，koa-compress中的设置
			threshold : 2048
		},
		patchCache : [{	//静态资源缓存，可以是多个，所以是数组
			path : path.resolve(__dirname,'../../static/'),//需要缓存的静态路径
			options : {//koa-static-cache中的设置,
				maxAge : 1 * 60 * 60
			}
		}]

	},
	spaPath : { //解决单页面刷新问题，有关的路由全部定向为index.html
		switch : true,
		path : [
			{
				url:'/community',//把/community下的请求全部返回/community/index.html，因为放在static和router之后，不会影响已有路由。
				indexFile:path.resolve(__dirname,'../../static/community/index.html')
			}
		]
	}

}
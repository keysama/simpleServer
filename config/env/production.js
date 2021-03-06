const path = require('path');

const timeStemp = new Date();//获取当前日期时间戳
const time = timeStemp.getFullYear() + '_' + timeStemp.getMonth() + '_' + timeStemp.getDate();//保证每天日志放在不同文件夹

module.exports = {

	port : 8083,//监听端口号,false关闭

	https : {
		httpsPort : 443,
		switch : false,//开关
		privateKey : {
			path : path.resolve(__dirname,'../https/2524472_www.gamenanum.com.key'),//公钥地址
			encoded : 'utf8'
		},
		certificate : {
			path : path.resolve(__dirname,'../https/2524472_www.gamenanum.com.pem'),//私钥地址
			encoded : 'utf8'
		}
	},

	token : {
		key : 'pangSky_12#$',
		options : { expiresIn: '2h' }
	},

	database : {
		mysqsl : {
	        host: '127.0.0.1',
	        user: 'root',
	        password: 'lx834529965LX#@!',
	        database: 'pangsky_community',
	        port:'3306',
	        dateStrings: true
		},
		// mongo : {
		// 	dbUrl: 'mongodb://localhost:27017/test'
		// }
	},

	staticPath : [//静态资源目录,可以是多个
		path.resolve(__dirname,'../../static')
	],

	logger : {//配置日志
		respondTime : true,//是否开启记录相应时间
		requestBody : true,//是否开启记录请求数据
		requestParams : true,//是否开启记录请求的url参数
		requestUrl : true,//是否开启记录请求的地址
		sql : true,//是否开启记录sql请求
		type : 'console',//类型，file：保存到文件，dateFile：保存到日期文件，console：控制台
		filename : path.resolve(__dirname,`../../logs/daily_${time}.log`),//输出的文件路径和文件名
		level : 'warn',//级别，保存以上的错误信息trace<debug<info<warn<error<fatal
	},

	cors : {
		switch:true,
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
				url:'/community',//把/community下没找到的请求全部返回/community/index.html，因为放在static和router之后，不会影响已有路由。
				indexFile:path.resolve(__dirname,'../../static/community/index.html')
			}
		]
	}
}
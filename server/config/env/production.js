const path = require('path')

const timeStemp = new Date();//获取当前日期时间戳
const time = timeStemp.getFullYear() + '_' + timeStemp.getMonth() + '_' + timeStemp.getDate();//保证每天日志放在不同文件夹

module.exports = {

	port : 8080,//监听端口号

	logger : {//配置日志
		respondTime : false,//是否开启记录响应时间
		type : 'file',//类型，file：保存到文件，dateFile：保存到日期文件，console：控制台
		filename:  path.resolve(__dirname,`../../logs/daily_${time}.log`),//输出的文件路径和文件名
		level : 'debug',//级别，保存以上的错误信息trace<debug<info<warn<error<fatal
	},

	staticPath : 'static',//静态资源目录（在网站根目录），可以是二级如static/www

	mysql : {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'test',
        port:'3306',
        dateStrings: true
	}

}
const config = require('../index.js').database.mongo;
let mongoose;

if(!config){
	mongoose = null;
	console.log('不启用mongo数据库')
	return;
}else{
	mongoose = require('mongoose');
	//设置mongo存储路径
	const dbUrl = config.dbUrl;

	mongoose.connect(dbUrl,{ useNewUrlParser: true })
	// 连接成功
	mongoose.connection.on('connected', () => {
	  console.log('启用mongo数据库:'+config.dbUrl)
	})
	// 连接异常
	mongoose.connection.on('error', () => {
	  console.log('MongoDB connected error.')
	})
	// 连接断开
	mongoose.connection.on('disconnected', () => {
	  console.log('MongoDB connected disconnected.')
	})
		
}
//导出mongoose对象
module.exports = mongoose
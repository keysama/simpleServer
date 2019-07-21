const config = require('../config').commonConfig;

const compress = require('koa-compress');//压缩请求，gzip
const staticCache = require('koa-static-cache');//文件缓存

module.exports = app => {
	app.use(compress(config.compress));

	config.patchCache.forEach(item => {
		app.use(staticCache(item.path,item.options))
	})
}
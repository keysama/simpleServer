const views = require('koa-views');
const config = require('../config').ejs;

module.exports = () => {
	return views(config.path,config.options)
}
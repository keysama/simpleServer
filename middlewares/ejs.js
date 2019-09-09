const views = require('koa-views');
const config = require('../config').ejs;

module.exports = app => {
	app.use(views(config.path,config.options))
}
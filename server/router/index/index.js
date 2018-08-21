const Router = require('koa-router');

const test = require('./test.js');
const indexController = require('../../controller/index/indexController.js')

router = new Router({
	prefix: '/index'
});

router
	.use(test.routes())
	.all('/', indexController.hello)

module.exports = router;
const Router = require('koa-router');

const indexController = require('../../controller/index/indexController.js')
const testController = require('../../controller/test/index.js')//引入需要的controller

router = new Router({
	prefix: '/index'
});

router
	.all('/', indexController.index)

module.exports = router;
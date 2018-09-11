const Router = require('koa-router');

const indexController = require('../../controller/index/indexController.js')

router = new Router({
	prefix: '/index'
});

router
	.all('/', indexController.index)

module.exports = router;
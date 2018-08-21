const Router = require('koa-router');

const testController = require('../../controller/test/')//引入需要的controller

router = new Router({
	prefix: '/test'//路由前缀
});

router
	.get('/get', testController.testGet)

	.post('/post', testController.testPost)

	.all('/', testController.testAll)

module.exports = router;
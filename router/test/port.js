const Router = require('koa-router');

const portController = require('../../controller/test/portController')//引入需要的controller

router = new Router({
	prefix: '/port'//路由前缀
});

router
	.all('/',portController.all)

	.get('/get', portController.get)

	.post('/post', portController.post)

	.put('/put', portController.put)

	.delete('/delete', portController.delete)

module.exports = router;
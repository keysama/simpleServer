const Router = require('koa-router');

const apiController = require('../../controller/api/apiController.js')

router = new Router({
	prefix: '/api'
});

router
	.all('/', apiController.index)


module.exports = router;
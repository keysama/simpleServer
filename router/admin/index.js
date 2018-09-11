const Router = require('koa-router');

const adminController = require('../../controller/admin/adminController.js')

router = new Router({
	prefix: '/admin'
});

router
	.all('/', adminController.index)

module.exports = router;
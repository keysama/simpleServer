const Router = require('koa-router');

const test = require('./test.js');
const adminController = require('../../controller/admin/adminController.js')

router = new Router({
	prefix: '/admin'
});

router
	.use(test.routes())
	.all('/', adminController.hello)

module.exports = router;
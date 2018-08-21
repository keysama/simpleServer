const Router = require('koa-router');

const test = require('./test.js');
const apiController = require('../../controller/api/apiController.js')

router = new Router({
	prefix: '/api'
});

router
	.use(test.routes())
	.all('/', apiController.hello)

module.exports = router;
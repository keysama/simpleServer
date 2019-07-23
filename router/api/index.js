const Router = require('koa-router');

const apiController = require('../../controller/api/apiController.js')

const authority = require('./authority.js')

router = new Router({
	prefix: '/api'
});

router
	.all('/', apiController.index)
	.use(authority.routes())


module.exports = router;
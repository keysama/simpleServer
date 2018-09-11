const Router = require('koa-router');

const sqlController = require('../../controller/test/sqlController')//引入需要的controller

router = new Router({
	prefix: '/sql'//路由前缀
});

router
	.all('/',sqlController.all)

	.all('/sql', sqlController.sqlTest)

	.all('/trans', sqlController.transTest)

module.exports = router;
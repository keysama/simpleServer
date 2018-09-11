const Router = require('koa-router');

const port = require('./port.js')
const sql = require('./sql.js')

const testController = require('../../controller/test/')//引入需要的controller

router = new Router({
	prefix: '/test'
});

router
	.all('/',testController.all)

	.use(port.routes())

	.use(sql.routes())


module.exports = router;
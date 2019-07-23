const Router = require('koa-router');

const authorityController = require('../../controller/api/authorityController');

const router = new Router({
	prefix: '/authority'
})
/**
 * @api {post} /api/authority/login 登录
 * @apiDescription 普通用户/管理员登录
 * @apiName  login
 * @apiGroup authority
 * @apiParam {string} username 用户名
 * @apiParam {string} password 密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "state" : 1,
 *      "body" : token
 *  }
 * @apiSampleRequest http://localhost:8083/api/authority/login
 * @apiVersion 1.0.0
 */
router
	.post('/login',authorityController.login)
	.post('/logout',authorityController.logout)

module.exports = router;
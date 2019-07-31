const Router = require('koa-router');

const authorityController = require('../../controller/api/authorityController');
const checkToken = require('../../middlewares/checkToken');

const router = new Router({
	prefix: '/authority'
})


router
	/**
	 * @api {post} /api/authority/login 登录
	 * @apiDescription 普通用户/管理员登录
	 * @apiName  login
	 * @apiGroup authority
	 * @apiParam {string} username 用户名
	 * @apiParam {string} password 密码
	 * @apiSuccess {json} result 用于验证用户的token，有效期24小时
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : [token]
	 *  }
	 */
	.post('/login',authorityController.login)
	.post('/loginWIthId',authorityController.loginWIthId)
	/**
	 * @api {post} /api/authority/registe 注册用户
	 * @apiDescription 注册普通用户
	 * @apiName  registe
	 * @apiGroup authority
	 * @apiParam {string} nickname 昵称
	 * @apiParam {string} username 用户名
	 * @apiParam {string} password 密码
	 * @apiParam {int} type 0:普通用户，1：论坛管理员
	 * @apiSuccess {json} result 注册结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : "success"
	 *  }
	 */
	.post('/registe',authorityController.registe)
	/**
	 * @api {get} /api/authority/userInfo/:type 获取用户信息
	 * @apiDescription 使用token令牌，获取用户信息
	 * @apiName  userInfo
	 * @apiGroup authority
	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} type 0:普通用户，1：论坛管理员，2：超级管理员
	 * @apiSuccess {json} result 用户存在token中的信息
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : {...userinfo}
	 *  }
	 */
	.get('/userInfo/:type',checkToken,authorityController.getUserInfo)






module.exports = router;
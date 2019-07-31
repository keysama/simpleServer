const Router = require('koa-router');

const communityController = require('../../controller/api/communityController');
const checkToken = require('../../middlewares/checkToken');

const router = new Router({
	prefix: '/community'
})


router
	/**
	 * @api {post} /api/community/create 创建论坛
	 * @apiDescription 管理员创建论坛
	 * @apiName  create
	 * @apiGroup community
	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {string} name 论坛名/代号
	 * @apiSuccess {json} result 创建结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : "success"
	 *  }
	 */
	.post('/create',checkToken,communityController.create)
	/**
	 * @api {get} /api/community/nameExist/:name 查看论坛名是否存在
	 * @apiDescription 查看论坛名是否存在
	 * @apiName  nameExist
	 * @apiGroup community
	 * @apiParam {string} name 论坛名/代号
	 * @apiSuccess {json} result 创建结果,存在返回ID，不存在返回null
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : id || null
	 *  }
	 */
	.get('/nameExist/:name',communityController.checkNameRepeat)

	/**
	 * @api {get} /api/community/list/:creatorId 获取用户创建的论坛列表
	 * @apiDescription 获取用户创建的论坛列表
	 * @apiGroup community
	 * @apiParam {int} creatorId 创建者Id
	 * @apiSuccess {json} result 论坛列表
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : [...list]
	 *  }
	 */
	.get('/list/:creatorId',communityController.getListByCreator)

	/**
	 * @api {get} /api/community/info/:communityId 获取论坛信息
	 * @apiDescription 获取论坛信息
	 * @apiGroup community
	 * @apiParam {int} communityId 论坛id
	 * @apiSuccess {json} result 论坛信息
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : {...info}
	 *  }
	 */
	.get('/info/:communityId',communityController.getInfo)

	/**
	 * @api {get} /api/community/config/:communityId 获取论坛配置信息
	 * @apiDescription 获取论坛配置信息
	 * @apiGroup community
	 * @apiParam {int} communityId 论坛id
	 * @apiSuccess {json} result 配置信息
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : {...config}
	 *  }
	 */
	.get('/config/:communityId',communityController.getConfig)

	/**
	 * @api {get} /api/community/customerList/:communityId 获取论坛用户列表
	 * @apiDescription 获取论坛用户列表
	 * @apiGroup community
	 * @apiParam {int} communityId 论坛id
	 * @apiSuccess {json} result 用户列表
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : [...customerList]
	 *  }
	 */
	.get('/customerList/:communityId',communityController.getCustomerList)

	/**
	 * @api {post} /api/community/info/:communityId 修改论坛信息
	 * @apiDescription 修改论坛信息
	 * @apiGroup community
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} communityId 论坛id
	 * @apiParam {string} name 论坛名
	 * @apiSuccess {json} result 修改结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	.post('/info/:communityId',checkToken,communityController.editCommunity)

	/**
	 * @api {put} /api/community/config/:communityId 添加论坛配置信息
	 * @apiDescription 添加论坛配置信息
	 * @apiGroup community
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} communityId 论坛id
	 * @apiParam {json} data 配置内容,ep.{a:b,d:c}
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	.put('/config/:communityId',checkToken,communityController.addCommunityConfig)

	/**
	 * @api {post} /api/community/config/:communityId 修改论坛配置信息
	 * @apiDescription 修改论坛配置信息
	 * @apiGroup community
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} communityId 论坛id
	 * @apiParam {json} data 修改内容,ep.{a:b,d:c}
	 * @apiSuccess {json} result 修改结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	.post('/config/:communityId',checkToken,communityController.editCommunityConfig)
	

module.exports = router;
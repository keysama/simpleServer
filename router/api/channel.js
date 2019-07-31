const Router = require('koa-router');

const channelController = require('../../controller/api/channelController');
const checkToken = require('../../middlewares/checkToken');

const router = new Router({
	prefix: '/channel'
})


router
	/**
	 * @api {put} /api/channel/new 添加频道
	 * @apiDescription 添加频道
	 * @apiGroup channel
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} sectionId 板块id
	 * @apiParam {string} name 频道名
	 * @apiParam {int} zindex 排序
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	.put('/new',checkToken,channelController.create)
	
	/**
	 * @api {get} /api/channel/list/:sectionId 获取频道列表
	 * @apiDescription 获取频道列表
	 * @apiGroup channel
	 * @apiParam {int} sectionId 板块id
	 * @apiSuccess {json} result 频道列表
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : [...channelList]
	 *  }
	 */
	.get('/list/:sectionId',channelController.getList)
	/**
	 * @api {get} /api/channel/info/:channelId 获取频道信息
	 * @apiDescription 获取频道信息
	 * @apiGroup channel
	 * @apiParam {int} channelId 频道Id
	 * @apiSuccess {json} result 频道信息
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : {...channelInfo}
	 *  }
	 */
	.get('/info/:channelId',channelController.getInfo)
		/**
	 * @api {delete} /api/channel/delete/:channelId 删除频道
	 * @apiDescription 删除频道
	 * @apiGroup channel
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} channelId 频道Id
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	.delete('/delete/:channelId',checkToken,channelController.delete)
	/**
	 * @api {post} /api/channel/info/:channelId 修改频道
	 * @apiDescription 修改频道
	 * @apiGroup channel
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} channelId 频道Id
	 * @apiParam {string} name 频道名
	 * @apiParam {int} zindex 排序
	 * @apiParam {int} type 类型 默认0：普通频道
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	.post('/info/:channelId',checkToken,channelController.edit)
	
module.exports = router;
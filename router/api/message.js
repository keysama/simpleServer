const Router = require('koa-router');

const messageController = require('../../controller/api/messageController');
const checkToken = require('../../middlewares/checkToken');

const router = new Router({
	prefix: '/message'
})


router
	/**
	 * @api {put} /api/message/new 添加消息
	 * @apiDescription 添加消息
	 * @apiGroup message
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} targetId 接收者Id
	 * @apiParam {string} content 消息内容
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	.put('/new',checkToken,messageController.create)
	/**
	 * @api {get} /api/message/list/:type 消息列表
	 * @apiDescription 消息列表
	 * @apiGroup message
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} type 0:所有消息，1:未读消息
	 * @apiSuccess {json} result originId:-1:系统消息
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : [...messageList]
	 *  }
	 */
	.get('/list/:type',checkToken,messageController.getMessageList)
	/**
	 * @api {post} /api/message/state 修改状态
	 * @apiDescription 修改状态
	 * @apiGroup message
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} messageId 消息Id
	 * @apiParam {int} state 0:已读，1:未读
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	 .post('/state',checkToken,messageController.editMessageState)
	/**
	 * @api {delete} /api/message/delete/:messageId 删除消息
	 * @apiDescription 删除消息
	 * @apiGroup message
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} messageId 消息Id
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	.delete('/delete/:messageId',checkToken,messageController.deleteMessage)

	
module.exports = router;
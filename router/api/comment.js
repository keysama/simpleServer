const Router = require('koa-router');

const commentController = require('../../controller/api/commentController');
const checkToken = require('../../middlewares/checkToken');

const router = new Router({
	prefix: '/comment'
})


router
	/**
	 * @api {put} /api/comment/new 添加评论
	 * @apiDescription 添加评论
	 * @apiGroup comment
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} articleId 文章Id
	 * @apiParam {string} content 评论内容
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	 .put('/new',checkToken,commentController.createComment)
	/**
	 * @api {put} /api/comment/reply 回复评论
	 * @apiDescription 回复评论
	 * @apiGroup comment
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} commentId 评论Id
	 * @apiParam {string} content 评论内容
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	.put('/reply',checkToken,commentController.createReply)
	/**
	 * @api {get} /api/comment/list/:articleId/:start/:num 获取评论列表
	 * @apiDescription 获取评论列表
	 * @apiGroup comment
	 * @apiParam {int} articleId 文章Id
	 * @apiParam {int} start 获取的起始索引（从0开始）
	 * @apiParam {int} num 获取的数量
	 * @apiSuccess {json} result 评论列表
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : [...{           
	 *       "id": 0,
     *      "articleId": 0,
     *       "creator": 0,
     *      "content": "",
     *      "createTime": "",
     *      "creator_niackname": "",
     *      "creator_head": null,
     *      "reply_num": 0}
     *      ]
	 *  }
	 */
	.get('/list/:articleId/:start/:num',commentController.getCommentList)
	/**
	 * @api {get} /api/comment/reply/:commentId/:start/:num 获取回复列表
	 * @apiDescription 获取回复列表
	 * @apiGroup comment
	 * @apiParam {int} commentId 评论Id
	 * @apiParam {int} start 获取的起始索引（从0开始）
	 * @apiParam {int} num 获取的数量
	 * @apiSuccess {json} result 回复列表
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : [...replyList]
	 *  }
	 */
	.get('/reply/:commentId/:start/:num',commentController.getReplyList)
	/**
	 * @api {delete} /api/comment/delete/:commentId 删除评论
	 * @apiDescription 删除评论
	 * @apiGroup comment
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} commentId 评论Id
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	 .delete('/delete/:commentId',checkToken,commentController.deleteComment)
	/**
	 * @api {delete} /api/comment/deleteReply/:replyId 删除回复
	 * @apiDescription 删除回复
	 * @apiGroup comment
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {string} replyId 回复Id
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	.delete('/deleteReply/:replyId',checkToken,commentController.deleteReplay)
	
	
module.exports = router;